import React, { useEffect, useState } from "react";
import Task from "./components/Task.jsx";
import { AiOutlinePlus } from 'react-icons/ai';

import { ImQuotesLeft } from 'react-icons/im';
import { RiDoubleQuotesR } from 'react-icons/ri';
function App(){

  const [inputList,setInputList]=useState("");
  const [Items,setItems]=useState([]);
  const [time,setTime]=useState("");
  const [quote,setQuote]=useState("");

  useEffect(()=>{
    fetch("http://api.quotable.io/random")
    .then(res =>res.json())
    .then(
      (quote)=>{
        setQuote(quote.content);
      }
    )
  },[]);

  const itemEvent =(event)=>{
    setInputList(event.target.value);
  }
  const itemEvent1 =(event)=>{
    setTime(event.target.value);
  }

  const Add = () =>{
    let obj={
      time1:time,
      task:inputList
    }
    setItems((oldItems)=>{
      return [...oldItems,obj];
    })
  }

  const deleteItem=(id)=>{
    console.log("del");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !==id;
      });
    });
  };

  const today=new Date().toLocaleDateString();

  return(
    <>
      <div className="  mb-[20px] p-[40px]">
        <h1 className="text-white text-2xl "><span className="text-2xl">"</span>{quote}<span className="text-2xl">"</span> </h1>
      </div>
      <div className="bg-white w-[85%]  flex flex-col md:w-[50%]  h-[80%]">
        <div className="text-center my-[10px]">
        <p className="font-bold  text-4xl text-teal-900 ">TODO LIST</p>
        <p className="  mt-[8px] text-xl text-teal-600 ">{today}</p>
        </div>
        <div className="flex px-[20px] justify-between my-[20px]">
          <div className="flex flex-[0.9]">
            <input type="time" onChange={itemEvent1} className="mr-[10px] px-[16px] flex-[0.2] border border-gray-400"></input>
            <input onChange={itemEvent} placeholder="Add Your New Todo" className="px-[16px] flex-[0.8] border border-gray-400"></input>
          </div>
          
          <div onClick={Add} className="text-white text-2xl font-bold flex-[0.05] bg-teal-400 flex justify-center items-center rounded p-[6px] cursor-pointer hover:bg-teal-700">
            <AiOutlinePlus/>
          </div>
        </div>
        <div className="my-[30px] overflow-y-auto text-red-500 ">
          
          {Items.map((itemval,index)=>{
            return <Task onSelect={deleteItem} key={index} id={index} time={itemval.time1} task={itemval.task}/>
            {/* return(
              <div onClick={()=>setDone(!done)} className={`${done===true ? 'bg-slate-400': ''} select-none my-[10px] mx-[20px] flex justify-between border border-gray-700 p-[10px] `}>
                <div className="text-teal-600 text-xl flex">
                  <input  type="checkbox" className=""></input>
                  <p className="ml-[10px]">{itemval.time1}</p>
                </div>
                <div className="text-bold text-xl flex ">
                  <p className="text-teal-900 font-semibold">{itemval.task}</p>
                  <div className="p-[10px] ml-[5px] text-sm cursor-pointer"><BsTrash/></div>
                </div>
              </div>
            ); */}
          })}


        </div>
      </div>
      
    </>
  )
}

export default App;
