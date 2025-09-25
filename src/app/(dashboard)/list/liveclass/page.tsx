import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";
import Link from "next/link"
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';

const LiveClass = () => {
  return (

    /* PAGE MAIN CONTAINER  */
    <div className=' p-4 flex gap-4 flex-col xl:flex-row'>
      
      {/* LEFT  CONTAINER*/}
      <div className=" w-full xl:W-2/3 ">

       <div className="h-full bg-white p-4 rounded-md ">

          <h1 className=" text-xl font-semibold "> ExtraLive Classes </h1>
          <p className=" text-sm text-gray-400 font-light my-4 "> Empowering virtual learning for everyone </p>

          <div className=" mt-14 rounded-md p-4  ">

            <h1 className=" flex items-center justify-center text-gray-700 mb-6 mt-8 font-semibold  ">
              Choose your role to join a live class
            </h1>
          

            <div className=" flex items-center justify-evenly mt-10 mb-9 ">

              <Link className=" flex items-center justify-center gap-2 px-6 py-3 bg-blue-400 text-white rounded-xl shadow hover:bg-blue-700 transition text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-PatoSkyLight " href= "liveclass/teacherslive">

              <FaChalkboardTeacher className="text-2xl" /> Teacher
              
             </Link>

             <Link className=" flex items-center gap-2 px-6 py-3 bg-purple-400 text-white rounded-xl shadow hover:bg-purple-700 transition text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-lightpurple " href= "liveclass/studentslive">

             <FaUserGraduate className="text-2xl" /> Student
              
             </Link>

            </div>

            <div className=" mt-20 bg-white rounded-md p-4 h-[800px]">
              <h1 className=" text-sm font-semibold text-gray-400 ">Extra Lesson&apos;s Schedule</h1>
              <BigCalendar/>
            </div>

            
          </div>


        </div>


      </div>


      {/* RIGHT CONTAINER */}
      <div className=" w-full xl:w-1/3 flex flex-col gap-8 ">
        <EventCalendar />
        <Announcements/>
      </div>

    </div>
    
  )
}

export default LiveClass