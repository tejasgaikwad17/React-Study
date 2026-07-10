import React from "react";

const TaskList = () => {
  return (
    <div
      id="TaskList"
      className="h-[30%] overflow-x-auto w-full  mt-10 flex items-center justify-start flex-nowrap gap-5"
    >
      <div className="h-full w-[400px] bg-pink-600 rounded-sm flex-shrink-0 p-5">
        <div className="flex items-center justify-between">
          <h3 className="bg-red-600 w-fit px-3 py-1 text-sm font-semibold rounded text-white">
            High
          </h3>
          <h4 className="text-white text-sm font-semibold">20 Feb 2024</h4>
        </div>
        <div className="text-white font-semibold text-2xl mt-5">
        <h1>Make a React Project</h1>
        <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, voluptatum rem est laborum, vitae deserunt hic illo libero natus autem excepturi, ullam sint optio! Harum accusamus ratione dolorem nesciunt aliquid?</p>
        </div>
      </div>

      <div className="h-full w-[400px] bg-green-600 rounded-sm flex-shrink-0 p-5">
        <div className="flex items-center justify-between">
          <h3 className="bg-red-600 w-fit px-3 py-1 text-sm font-semibold rounded text-white">
            High
          </h3>
          <h4 className="text-white text-sm font-semibold">20 Feb 2024</h4>
        </div>
        <div className="text-white font-semibold text-2xl mt-5">
        <h1>Make a React Project</h1>
        <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, voluptatum rem est laborum, vitae deserunt hic illo libero natus autem excepturi, ullam sint optio! Harum accusamus ratione dolorem nesciunt aliquid?</p>
        </div>
      </div>

      <div className="h-full w-[400px] bg-purple-600 rounded-sm flex-shrink-0 p-5">
        <div className="flex items-center justify-between">
          <h3 className="bg-red-600 w-fit px-3 py-1 text-sm font-semibold rounded text-white">
            High
          </h3>
          <h4 className="text-white text-sm font-semibold">20 Feb 2024</h4>
        </div>
        <div className="text-white font-semibold text-2xl mt-5">
        <h1>Make a React Project</h1>
        <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, voluptatum rem est laborum, vitae deserunt hic illo libero natus autem excepturi, ullam sint optio! Harum accusamus ratione dolorem nesciunt aliquid?</p>
        </div>
      </div>

      <div className="h-full w-[400px] bg-orange-600 rounded-sm flex-shrink-0 p-5">
        <div className="flex items-center justify-between">
          <h3 className="bg-red-600 w-fit px-3 py-1 text-sm font-semibold rounded text-white">
            High
          </h3>
          <h4 className="text-white text-sm font-semibold">20 Feb 2024</h4>
        </div>
        <div className="text-white font-semibold text-2xl mt-5">
        <h1>Make a React Project</h1>
        <p className="text-sm mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, voluptatum rem est laborum, vitae deserunt hic illo libero natus autem excepturi, ullam sint optio! Harum accusamus ratione dolorem nesciunt aliquid?</p>
        </div>
      </div>

    </div>
  );
};

export default TaskList;
