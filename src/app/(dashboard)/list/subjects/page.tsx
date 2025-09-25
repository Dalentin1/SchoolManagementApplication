import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, subjectsData} from "@/lib/data";
import Image from "next/image";

{/* TEMPOARY DATA TYPE FOR PARENT */}
 type Subject = {
  id:number;
  name:string;
  teachers:string[];
 };

{/* TABLE HEAD ARRAY STRUCTURE */}
const columns = [
  {
    header:"Subject Name", accessor:"name",
  },
  {
    header:"Teachers", accessor:"teachers",
    className:" hidden md:table-cell ",
  }, 
  {
   header: "Actions",
   accessor:"action",
  },
]

const SubjectListPage = () => {

  const renderRow = (item:Subject) => [
    <tr key={item.id} className=" border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PatoPurple/10 transition-all duration-145">
      

      <td className=" flex items-center gap-4 p-4"> 
        {item.name}
      </td>

      <td className=" hidden md:table-cell" >{item.teachers.join(" , ")}</td>

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
           <FormModal table="subject" type="update" data= {item} />

           <FormModal table="subject" type="delete" id= {item.id} />
           </>
            


          )} 


       </div>

      </td>
    </tr>
  ]


  return (

    /* TOP  CONTAINER*/
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
    
      {/* TOP  CONTAINER*/}
      <div className=" flex items-center justify-between">

        {/* HEADER*/}
        <h1 className="hidden md:block text-lg font-semibold">
          All Subjects 
        </h1>

        <div className=" flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch/>

          {/* BUTTON CONTAINER FOR LIST SEARCH TABLE */}
          <div className=" flex items-center gap-4 self-end">

            {/* Btn 1*/}
            <button className=" w-8 h-8 flex items-center justify-center rounded-full bg-PatoYellow ">
              <Image src= "/filter.png" alt="" width={14} height={14}/>
            </button>

            {/* Btn 2*/}
            <button className=" w-8 h-8 flex items-center justify-center rounded-full bg-PatoYellow ">
              <Image src= "/sort.png" alt="" width={14} height={14}/>
            </button>

            {/* Btn 3*/}
            { role === "admin" && (
              /*  <button className=" w-8 h-8 flex items-center justify-center rounded-full bg-PatoYellow ">
              <Image src= "/plus.png" alt="" width={14} height={14}/>
             </button> */

             <FormModal table="subject" type="create" id={0}/>
            )}
            

          </div>

        </div>

      </div>

      {/* LIST  LINK */}
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />
 

      {/* PAGINATION  LINK */}
      <Pagination/>

  </div>
  );
};

export default SubjectListPage;