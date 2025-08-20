function RecentSearch({recentHistory,setRecentHistory, setselectedHistory}){

    const clearHistory=()=>{
    localStorage.clear();
    setRecentHistory([])
}
const clearSelectedHistory=(selectedItem)=>{
  let history = JSON.parse(localStorage.getItem("history"));
  console.log(history);
  history = history.filter((item)=>{
    if(item!=selectedItem){
      return item
    }
  })
  setRecentHistory(history)
  localStorage.setItem("history",JSON.stringify(history));
  console.log(history);
  
}    


   

    return(
        <>
          <div className="col-span-1 dark:bg-zinc-800 bg-red-100 pt-3">
      <h1 className="dark:text-white text-zinc-800 text-xl flex text-center justify-center">
        <span>Recent Search</span> 
        <button  onClick ={clearHistory} className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg"  height="20px" viewBox="0 -960 960 960" width="20px"  className="dark:fill-white fill-zinc-700 dark:hover:fill-red-500 hover:fill-red-500"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
      </h1>
    <ul className='text-left overflow-auto   mt-2'>
      {
        recentHistory && recentHistory.map((item,index)=>(
          <div className="flex justify-between pr-3 py-1">
          <li key= {index} onClick={()=>setselectedHistory(item)} className= 'w-full pl-5 px-5 truncate dark:text-zinc-400 text-zinc-700 cursor-pointer dark:hover:bg-zinc-700 dark:hover:text-zinc-200 hover:bg-red-200 hover:text-zinc-800'>{item}</li>
          <button  onClick ={() =>clearSelectedHistory(item)} className="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg"  height="20px" viewBox="0 -960 960 960" width="20px"  className="dark:fill-white fill-zinc-700 dark:hover:fill-red-500 hover:fill-red-500"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>

          </div>

        ))
      }
    </ul>
    </div>
        </>
    )  
}
export default RecentSearch