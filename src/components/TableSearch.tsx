import { FaSearch } from "react-icons/fa"

const TableSearch = () => {
  return (
    <div className=''>
        { /* SEARCH BAR AND INPUT CONTAINER*/ }
            <div className=' w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 '>
              
              {/* SEARCH BAR IMAGE */}
                < FaSearch className="text-gray-500" size={16} />
      
              {/* SEARCH INPUT */}
              <input 
                type="text" 
                placeholder="Search..."
                className=" w-[200px] p-2 bg-transparent outline-none "
              />
            </div>
    </div>
  )
}

export default TableSearch