import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import ListHeader from "@/components/ListHeader";
import { role, studentsData} from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

{/* TEMPOARY DATA TYPE FOR STUDENT */}
 type Student = {
  id:number;
  studentId:string;
  name:string;
  email?:string;
  photo:string;
  phone?:string;
  grade:number;
  class:string;
  address:string;
 }

{/* TABLE HEAD ARRAY STRUCTURE */}
const columns = [
  {
    header:"Info", accessor:"info",
  },
  {
    header:"Student ID", accessor:"studentId",
    className:" hidden md:table-cell ",
  },
   {
    header:"Grade", accessor:"Grade",
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

const StudentListPage = () => {

  const renderRow = (item:Student) => [
    <tr key={item.id} className=" border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-PatoPurple/10 transition-all duration-145">

      <td className=" flex items-center gap-4 p-4"> 

        <Image src={item.photo} alt="" width={40} height={40} className=" md:hidden xl:block w-10 h-10 rounded-full object-cover"/>

        <div className=" flex flex-col">
          <h1 className="font-semibold">{item.name}</h1>
          <p className="text-xs text-gray-500">{item.class}</p>
        </div>

      </td>

      <td className=" hidden md:table-cell" >{item.studentId}</td>
      <td className=" hidden md:table-cell" >{item.grade}</td>
      <td className=" hidden lg:table-cell" >{item.phone}</td>
      <td className=" hidden lg:table-cell" >{item.address}</td>

      <td>

       <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
            
            <button className=" w-7 h-7 flex items-center justify-center rounded-full hover:bg-PatoSky ">

              < FaEye width={16} height={16}/>

            </button>

          </Link>

          { role === "admin" && (
            
           /* <button className=" w-7 h-7 flex items-center justify-center rounded-full bg-PatoPurple ">

              <Image src="/delete.png" alt="" width={16} height={16}/>

            </button> */

            <FormModal table="student" type="delete" id= {item.id} />

          )} 


       </div>

      </td>
    </tr>
  ]


  return (

    /* TOP  CONTAINER*/
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
    
      <ListHeader title="All Students" createTable={role === "admin" ? "student" : null} />

      {/* LIST  LINK */}
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
 

      {/* PAGINATION  LINK */}
      <Pagination/>

  </div>
  );
};

export default StudentListPage;