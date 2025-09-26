import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    /* LOGO AND MENU MAIN CONTAINER */
   <div className=" flex h-full ">
      
      {/* LEFT MAIN CONTAINER */}
      <div className=' w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-white'>
        
        {/* LOGO  CONTAINER*/}
        <Link 
        href= "/" 
        className=" flex items-center justify-center lg:justify-start gap-2 "
        >
          {/* LOGO  IMAGE */}
          <Image src="/logo.png" alt="logo" width={32} height={32} />
         
          {/* LOGO  TEXT */}
          <span className=" hidden lg:block font-bold ">SmartSchool</span>
      
        </Link>

       {/* MENU lIST*/}
        <Menu/>
        
      </div>
      
 
      {/* RIGHT CONTAINER */}
      <div className=" w-[86%] h-srn bg-full md:w-[92%] lg:w-[84%] xl:w-[86%] flex flex-col">
        <Navbar/>
        {children}
        
        {/* COPYRIGHT CONTAINER */}
        <div className=" flex items-center justify-center mt-6 text-xs text-gray-400 mr-32 mr-fix ">
          &copy; {new Date().getFullYear()} Smart Schooling All rights reserved. Developed by Patrick U. Nnodu
        </div>


      </div>
      
    </div>
  );
}