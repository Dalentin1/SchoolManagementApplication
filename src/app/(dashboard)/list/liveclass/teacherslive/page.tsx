/*
  * @license GPL-3.0
  * Copyright (C) <2007>  [ Patrick Nnodu ]

   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU General Public License for more details.
*/

"use client";

import React, { useState } from "react";
import '@livekit/components-styles';
import './livekit-overrides.css';
import { LiveKitRoom, VideoConference, useParticipants } from "@livekit/components-react";
import dynamic from "next/dynamic";
import LivekitToolbarFix from './LivekitToolbarFix';

const LiveKitChat = dynamic(() => import("@/components/LiveKitChat"), { ssr: false });

export default function TeacherPage() {
  const mockTeachers = [
    { name: "Mrs. Johnson", room: "Math101" },
    { name: "Mr. Smith", room: "Physics201" },
    { name: "Ms. Lee", room: "Chemistry301" },
  ];
  const [name, setName] = useState(mockTeachers[0].name);
  const [room, setRoom] = useState(mockTeachers[0].room);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/livekit-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identity: name, name, room, isTeacher: true }),
      });
      const data = await res.json();
      if (data.token) setToken(data.token);
      else setError(data.error || "Failed to get token");
    } catch (err) {
      setError("Network error");
    }
  };

  // Debug log for token value and type
  if (token) {
    console.log("token", token, typeof token);
  }
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
  <div className="w-full max-w-4xl bg-white/80 rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-stretch border border-white/40">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center drop-shadow">Teacher Live Class</h1>
        <p className="text-lg text-gray-600 mb-6 text-center">Start and manage your virtual classroom</p>
        {!token ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto">
          <label className="font-semibold">Select Mock Teacher:</label>
          <select
            className="border p-2 rounded"
            value={name + "|" + room}
            onChange={e => {
              const [n, r] = e.target.value.split("|");
              setName(n);
              setRoom(r);
            }}
          >
            {mockTeachers.map(t => (
              <option key={t.name} value={t.name + "|" + t.room}>{t.name} ({t.room})</option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Class/Room Name"
            value={room}
            onChange={e => setRoom(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start Class</button>
          {error && <p className="text-red-600">{error}</p>}
        </form>
      ) : (
        <div className="w-full livekit-wrapper">
          <LivekitToolbarFix />
          <LiveKitRoom
            token={token}
            serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
            connect={true}
            data-lk-theme="default"
          >
            <VideoConference />
            <ViewerList />
            <LiveKitChat name={name} />
          </LiveKitRoom>
        </div>
      )}
      </div>
    </main>
  );

// Custom component to show list of students watching
function ViewerList() {
  const participants = useParticipants();
  // Filter out the teacher (local participant)
  const viewers = Array.from(participants.values()).filter(p => !p.isLocal);
  return (
    <div className="w-full border rounded p-4 mt-4">
      <h2 className="font-semibold mb-2">Students Watching</h2>
      <ul>
        {viewers.length === 0 && <li>No students watching yet.</li>}
        {viewers.map((p) => (
          <li key={p.identity}>{p.name || p.identity}</li>
        ))}
      </ul>
    </div>
  );
}
}

