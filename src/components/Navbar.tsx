import Image from "next/image"

const Navbar = () => {
  return (
    /* NAVBAR CONTAINER */
    <div className=' flex items-center justify-between p-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 '>

      { /* SEARCH BAR AND INPUT CONTAINER*/ }
      <div className=' hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 '>
        
        {/* SEARCH BAR IMAGE */}
        <Image src='/search.png' alt="" width={14} height={14}/>

        {/* SEARCH INPUT */}
        <input 
          type="text" 
          placeholder="Search..."
          className=" w-[200px] p-2 bg-transparent outline-none "
        />
      </div>

      { /* USER AND ICONS MAIN CONTAINER */ }
      <div className=' flex items-center gap-6 justify-end w-full'>

        {/* MESSAGE IMAGE ICON CONTAINER */}
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>

          {/* MESSAGE ICON */}
          <Image src='/message.png' alt="" width={20} height={20}/>
        
        </div>

        {/* ANNOUNCEMENT IMAGE CONTAINER */}
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>

          {/* ANNOUNCEMENT ICON */}
          <Image src='/announcement.png' alt="" width={20} height={20}/>
          
          {/* ANNOUNCEMENT NUMBER */}
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs ">1</div>


        </div>

        {/* USER NAME CONTAINER */}
        <div className=' flex flex-col'>
          <span className=' text-xs leading-3 font-medium'>Patrick</span>
          <span className=' text-[10px] text-gray-500 text-right'>Admin</span>
        </div>
        
        {/* AVATAR IMAGE */}
        <Image src="/avatar.png" alt="avatar" width={36} height={36} className="rounded-full"/>
      </div>

   </div>
  )
}

export default Navbar