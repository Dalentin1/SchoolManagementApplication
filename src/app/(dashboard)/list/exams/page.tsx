import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import ListHeader from "@/components/ListHeader";
import {examsData, role} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

{/* TEMPOARY DATA TYPE FOR EXAM */}
type Exam = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: string;
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
    header:"Date", accessor:"date",
    className:" hidden md:table-cell ",
  },

  {
  header: "Actions",
  accessor:"action",
  },
]

const ExamListPage = () => {

  const renderRow = (item:Exam) => [
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

      <td className=" hidden md:table-cell" >
        {item.date}
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
           <FormModal table="exam" type="update" data= {item} />

           <FormModal table="exam" type="delete" id= {item.id} />
           </>
            


          )} 


       </div>

      </td>
    </tr>
  ]


  return (

    /* TOP  CONTAINER*/
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
    
      <ListHeader title="All Examinations" createTable={role === "admin" ? "exam" : null} />

      {/* LIST  LINK */}
      <Table columns={columns} renderRow={renderRow} data={examsData} />


      {/* PAGINATION  LINK */}
      <Pagination/>

  </div>
  );
};

export default ExamListPage;