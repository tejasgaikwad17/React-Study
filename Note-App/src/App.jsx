import React, { useState } from "react";
import { X } from 'lucide-react';


const App = () => {

  const [title, settitle] = useState('')
  const [detailedTitle, setdetailedTitle] = useState('')

  const [task, settask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault();
    const taskCopy = [...task]
    // console.log(taskCopy);

    taskCopy.push({title, detailedTitle})
    settask(taskCopy);
    // console.log(taskCopy);
    

    // settitle(title);
    // setdetailedTitle(detailedTitle);
    // console.log(title);
    // console.log(detailedTitle );

    
    settitle('')
    setdetailedTitle('');
  }

  const noteDelete = (idx)=>{
      // console.log('Delete Note');
      const copyTask = [...task]
      // console.log(idx);
      copyTask.splice(idx,1);
      settask(copyTask)      
  }

  return (
    <div className="h-auto lg:h-screen bg-black text-white  lg:flex">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        action=" "
        className="flex  items-start flex-col gap-5 p-10 lg:w-1/2"
      >
        <h1 className="font-bold text-4xl">Recent Notes</h1>
        {/* title */}
        <input
          type="text"
          placeholder="Enter note title"
          className="w-full font-medium px-5 py-2 rounded border-2"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value );
          }}
        />

        {/* Detailed Title */}
        <textarea
          type="text"
          placeholder="Enter note"
          className="w-full h-40 font-medium px-5 py-2 rounded border-2"
          value={detailedTitle}
          onChange={(e)=>{
            setdetailedTitle(e.target.value);
            
          }}
        />
        <button className="bg-white text-black px-5 py-2 font-medium  w-full rounded active:bg-gray-500 scale-100">
          Add Note
        </button>
      </form>

        <div className="lg:w-1/2 lg:border-l-2 p-10 h-full overflow-auto sm:justify-between">
            <h1 className="text-4xl font-bold">Your Notes: </h1>
            <div className="flex gap-3 mt-5 flex-wrap"> 
            
              {task.map(function(elem, idx){
                return <div key={idx} className="flex flex-col justify-between relative h-80 w-70 bg-cover rounded-2xl  text-black py-8 px-7 bg-[url('https://www.onlygfx.com/wp-content/uploads/2022/03/realistic-notebook-notepage-paper-background-2-cover.jpg')] ">
                  {/* <h1 className="bg-red-500 w-fit absolute  top-5 right-4 rounded-full">
                    <X size={16} color="#ffffff" strokeWidth={2.5} />
                    </h1> */}
                    <div>
                    <h1 className="font-bold text-2xl"> {elem.title}</h1>
                    <p className="font-bold text-gray-500 font-medium">{elem.detailedTitle}</p>
                    </div>
                    <button onClick={()=>{
                      noteDelete(idx)
                    }} className="bg-red-500 text-white p-2 rounded font-bold">Delete</button>
                </div>
              })}

            </div>
        </div>

    </div>
  );
};

export default App;
