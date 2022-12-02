import React,{ useState } from "react";
import { BsTrash } from 'react-icons/bs';
function Task(props){
    const [done,setDone]=useState(false);
    

    return(
        <>
            <div  className={`${done===true ? 'bg-slate-400': ''} select-none my-[10px] mx-[20px] flex justify-between border border-gray-700 p-[10px] `}>
                <div className="text-teal-600 text-xl flex">
                    <input onClick={()=>setDone(!done)} type="checkbox" className=""></input>
                    <p className="ml-[10px]">{props.time}</p>
                </div>
                <div className="text-bold text-xl flex ">
                    <p className="text-teal-900 font-semibold">{props.task}</p>
                    <div onClick={()=>{
                        props.onSelect(props.id)
                    }} className="p-[10px] ml-[5px] text-sm cursor-pointer"><BsTrash/></div>
                </div>
            </div>
        </>
    )
}

export default Task;