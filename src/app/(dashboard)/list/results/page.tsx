import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import ListHeader from "@/components/ListHeader";
import {resultsData, role} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

{/* TEMPOARY DATA TYPE FOR EXAM */}
type Results = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  type: "exam" | "assignment"
  date: string;
  score:number;
};

{/* TABLE HEAD ARRAY STRUCTURE */}
const columns = [
  {
    header:"Subject Name", accessor:"name",
  },

  {
    header:"Student", accessor:"student",
  },

  {
    header:"Score", accessor:"score",
    className:" hidden md:table-cell ",
  },

  {
    header:"Teacher", accessor:"teacher",
    className:" hidden md:table-cell ",
  },

  {
    header:"Class", accessor:"class",
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

const ResultListPage = () => {

  const renderRow = (item:Results) => [
    <tr key={item.id} className=" border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PatoPurple/10 transition-all duration-145">
      

      <td className=" flex items-center gap-4 p-4"> 
        {item.subject}
      </td>

      <td >
        {item.student}
      </td>

      <td className=" hidden md:table-cell" >
        {item.score}
      </td>

      <td className=" hidden md:table-cell" >
        {item.teacher}
      </td>

      <td className=" hidden md:table-cell">
        {item.class}
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
           <FormModal table="result" type="update" data= {item} />

           <FormModal table="result" type="delete" id= {item.id} />
           </>
            


          )} 


       </div>

      </td>
    </tr>
  ]


  return (

    /* TOP  CONTAINER*/
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
    
      <ListHeader title="All Results" createTable={role === "admin" ? "result" : null} />

      {/* LIST  LINK */}
      <Table columns={columns} renderRow={renderRow} data={resultsData} />


      {/* PAGINATION  LINK */}
      <Pagination/>

  </div>
  );
};

export default ResultListPage;