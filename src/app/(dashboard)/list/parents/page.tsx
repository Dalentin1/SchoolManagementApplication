import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import ListHeader from "@/components/ListHeader";
import { parentsData, role} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

{/* TEMPOARY DATA TYPE FOR PARENT */}
 type Parent = {
  id:number;
  name:string;
  email?:string;
  students:string[];
  phone:string;
  address:string;
 };

{/* TABLE HEAD ARRAY STRUCTURE */}
const columns = [
  {
    header:"Info", accessor:"info",
  },
  {
    header:"Student Names", accessor:"students",
    className:" hidden md:table-cell ",
  }, 
   {
    header:"Phone", accessor:"phone",
    className:" hidden lg:table-cell ",
  },
   {
    header:"Address", accessor:"address",
    className:" hidden lg:table-cell ",
  },
  {
   header: "Actions",
   accessor:"action",
  },
]

const ParentListPage = () => {

  const renderRow = (item:Parent) => [
    <tr key={item.id} className=" border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PatoPurple/10 transition-all duration-145">

      <td className=" flex items-center gap-4 p-4"> 

        <div className=" flex flex-col">
          <h1 className="font-semibold">{item.name}</h1>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>

      </td>

      <td className=" hidden md:table-cell" >{item.students.join(",")}</td>
      <td className=" hidden lg:table-cell" >{item.phone}</td>
      <td className=" hidden lg:table-cell" >{item.address}</td>

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
           <FormModal table="parent" type="update" data= {item} />

           <FormModal table="parent" type="delete" id= {item.id} />
           </>
            


          )} 


       </div>

      </td>
    </tr>
  ]


  return (

    /* TOP  CONTAINER*/
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
    
      <ListHeader title="All Parents" createTable={role === "admin" ? "parent" : null} />

      {/* LIST  LINK */}
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
 

      {/* PAGINATION  LINK */}
      <Pagination/>

  </div>
  );
};

export default ParentListPage;