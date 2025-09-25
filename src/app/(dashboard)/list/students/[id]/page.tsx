import Announcements from "@/components/Announcements"
import BigCalendar from "@/components/BigCalendar"
import FormModal from "@/components/FormModal"
import Performance from "@/components/Performance"
import Image from "next/image"
import Link from "next/link"

const SingleStudentPage = () => {
  return (
    <div className=' flex-1 p-4 flex flex-col gap-4 xl:flex-row'>

      {/* LEFT CONTENT CONTAINER */}
      <div className="w-ful xl:w-2/3">
        
        {/* LEFT CONTAINER TOP CONTENT CONTAINER */}
        <div className=" flex flex-col lg:flex-row gap-4 ">

          {/* USER INFO CARD */}
          <div className=" bg-PatoSky py-6 px-4 rounded-md flex-1 flex gap-4 ">

            {/* STUDENT IMAGE CONTAINER */}
            <div className="w-1/3">
              <Image src="https://images.pexels.com/photos/541817/pexels-photo-541817.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="User Pic" width={144} height={144} className=" w-36 h-36 rounded-full object-cover sng-pag-fx "/>
            </div>
            
            {/* TEACHER INFO CONTAINER  */}
            <div className="w-2/3 flex flex-col justify-between gap-4">

              {/* TEACHER NAME ANF FORM CONTAINER */}
             <div className="flex items-center gap-4">

                {/* TEACHER NAME */}
                <h1 className="text-xl font-semibold">Faith Nnodu</h1>

                <FormModal table="student" type="update" data={ {
                      id: 1,
                     username: "faithnnodu",
                     email: "paulnnodu3@gmail.com",
                     password: "password",
                     firstName:"Faith",
                     lastName: "Nnodu",
                     phone: "+234 567 8909",
                     address: "1234 Main St, Lagos, Nigeria,",
                     bloodType: "A+",
                     dateOfBirth: "2000-01-01",
                     sex: "female",
                      img:"https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                    }}
                  />

              </div>

              {/* MORE TEXT ABOUT TEACHER */}
              <p className=" text-sm text-gray-500 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              
              {/* TEACHER INFO ICONS AND TEXT MAIN CONTAINER */}
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">

                {/* INFO ICON 1 */}
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                  <Image src="/blood.png" alt="" width={14} height={14} />

                  <span>A+</span>
                </div>

                {/* INFO ICON 2 */}
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                  <Image src="/date.png" alt="" width={14} height={14} />

                  <span>October 2025</span>
                  
                </div>

                {/* INFO ICON 3 */}
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-1.5 smd ">
                  <Image src="/mail.png" alt="" width={14} height={14} />

                  <span>paulnnodu3@gmail.com</span>
                  
                </div>

                {/* INFO ICON 4 */}
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2 ">
                  <Image src="/phone.png" alt="" width={14} height={14} />

                  <span>+234 124 5635 63</span>
                  
                </div>

              </div>

            </div>

          </div>


          {/* SMALL CARDS */}
          <div className=" flex-1 flex gap-4 justify-between flex-wrap">

            {/* CARD 1 */}
            <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] ">
              <Image src="/singleAttendance.png" alt='' width={24} height={24} className=" w-6 h-6" />

              {/* CARD TEXT MAIN CONTAINER */}
              <div className="">
                
                {/* CARD TEXTS */}
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>


            </div>

            {/* CARD 2 */}
            <div className=" bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleBranch.png" alt='' width={24} height={24} className=" w-6 h-6" />

              {/* CARD TEXT MAIN CONTAINER */}
              <div className="">
                
                {/* CARD TEXTS */}
                <h1 className="text-xl font-semibold">SSS</h1>
                <span className="text-sm text-gray-400">3</span>
              </div>


            </div>

            {/* CARD 3 */}
            <div className=" bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleLesson.png" alt='' width={24} height={24} className=" w-6 h-6" />

              {/* CARD TEXT MAIN CONTAINER */}
              <div className="">
                
                {/* CARD TEXTS */}
                <h1 className="text-xl font-semibold">20</h1>
                <span className="text-sm text-gray-400">Lessons</span>
              </div>


            </div>

            {/* CARD 4 */}
            <div className=" bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
              <Image src="/singleClass.png" alt='' width={24} height={24} className=" w-6 h-6" />

              {/* CARD TEXT MAIN CONTAINER */}
              <div className="">
                
                {/* CARD TEXTS */}
                <h1 className="text-xl font-semibold">SS3B</h1>
                <span className="text-sm text-gray-400">Class</span>
              </div>


            </div>

          </div>

        </div>


        {/* BOTTOM CONTAINER */}
        <div className=" mt-4 bg-white rounded-md p-4 h-[800px]">
           <h1 className="text-xl font-semibold ">Student&apos;s Schedule</h1>
          <BigCalendar/>
        </div>


      </div>


      {/* RIGHT CONTENT COMTAINER*/}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">

        {/* SHORTCUTS MAIN COMTAINER*/}
        <div className="bg-white p-4 rounded-md">

          <h1 className="text-xl font-semibold">Shortcuts</h1>

          {/* SHORTCUT COMTAINER*/}
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">

            <Link className=" p-3 rounded-md bg-PatoSkyLight" href="/">Student&apos;s Lessons</Link>

            <Link className=" p-3 rounded-md bg-PatoPurpleLight" href="/">Student&apos;s Teachers</Link>

            <Link className=" p-3 rounded-md bg-pink-50 " href="/">Student&apos;s Exams</Link>

            <Link className=" p-3 rounded-md bg-PatoSkyLight " href="/">Student&apos;s Assignments</Link>

             <Link className=" p-3 rounded-md bg-PatoYellowLight "  href="/">Student&apos;s Results</Link>

          </div>

        </div>
        
        <Performance/>
        <Announcements/>
      </div>


     </div>
  )
}

export default SingleStudentPage