import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import ListHeader from "@/components/ListHeader";
import {lessonsData, role} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

{/* TEMPOARY DATA TYPE FOR Lessons */}
type Lesson = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
};

{/* TABLE HEAD ARRAY STRUCTURE */}
const columns = [
  {
    header:"Subject Name", accessor:"subjectName",
  },

  {
    header:"Class", accessor:"class",
  },

  {
    header:"Teacher", accessor:"teacher",
    className:" hidden md:table-cell ",
  },

  {
  header: "Actions",
  accessor:"action",
  },
]

const LessonListPage = () => {

  const renderRow = (item:Lesson) => [
    <tr key={item.id} className=" border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PatoPurple/10 transition-all duration-145">
      

      <td className=" flex items-center gap-4 p-4"> 
        {item.subject}
      </td>

      <td >
        {item.class}
      </td>

      <td className=" hidden md:table-cell" >
        {item.teacher}
      </td>

      <td>

      <div className="flex items-center gap-2">
         
         {/* 

            . Used this code before i wrote the FormModal component, applies also for the teacher and student list dashboards...
         
            <Link href={`/list/teachers/${item.id}`}>
            
            <button className=" w-7 h-7 flex items-center justify-center rounded-full bg-PatoSky ">

              <Image src="/edit.png" alt="" width={16} height={16}/>

            </button> 

            </Link>
          */}

          { role === "admin" && (
            /* <button className=" w-7 h-7 flex items-center justify-center rounded-full bg-PatoPurple ">

              <Image src="/delete.png" alt="" width={16} height={16}/>

            </button> */

           <>
           <FormModal table="lesson" type="update" data= {item} />

           <FormModal table="lesson" type="delete" id= {item.id} />
           </>
            


          )} 


       </div>

      </td>
    </tr>
  ]


  return (

    /* TOP  CONTAINER*/
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
    
      <ListHeader title="All Lessons" createTable={role === "admin" ? "lesson" : null} />

      {/* LIST  LINK */}
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />


      {/* PAGINATION  LINK */}
      <Pagination page={1} count={lessonsData.length} />

  </div>
  );
};

export default LessonListPage;