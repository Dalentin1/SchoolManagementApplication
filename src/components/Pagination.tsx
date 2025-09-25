const Pagination = () => {
  return (
    <div className=' p-4 flex items-center justify-between text-gray-500 move'>
     
     {/* BUTTON 1 */}
     <button disabled className=" py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed try ">
        Prev
     </button>

      {/* PAGE NUMBER CONTAINER */}
      <div className=" flex items-center gap-2 text-sm try padding ">

        <button className=" px-2 rounded-sm bg-PatoSky">
          1
        </button>

        <button className=" px-2 rounded-sm ">
          2
        </button>

        <button className=" px-2 rounded-sm ">
          3
        </button>
        ...
        <button className=" px-2 rounded-sm ">
          10
        </button>

      </div>
     

      {/* BUTTON 3 */}
     <button className=" py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed try">
      Next
     </button>

    </div>
  )
}

export default Pagination