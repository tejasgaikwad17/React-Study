import React from "react";

const CreateTask = () => {
  return (
    <div>
      <div className="bg-[#1c1c1c] mt-7 p-5 rounded">
        <form className="flex flex-wrap items-center justify-between w-full">
          <div className="w-1/2">
            <div>
              <h1 className="text-sm text-gray-300 mb-0.5">Task Title</h1>
              <input
                type="text"
                placeholder="Make a UI design"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1.5px] border-gray-400 mb-4"
              />
            </div>
            <div>
              <h1 className="text-sm text-gray-300 mb-0.5">Date</h1>
              <input
                type="date"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1.5px] border-gray-400 mb-4"
              />
            </div>
            <div>
              <h1 className="text-sm text-gray-300 mb-0.5">Assign To</h1>
              <input
                type="text"
                placeholder="Employee Name"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1.5px] border-gray-400 mb-4"
              />
            </div>
            <div>
              <h1 className="text-sm text-gray-300 mb-0.5">Category</h1>
              <input
                type="text"
                placeholder="Design, Dev, etc"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1.5px] border-gray-400 mb-4"
              />
            </div>
          </div>
          <div className="w-1/2">
            <h1 className="text-sm text-gray-300 mb-0.5">Description</h1>
            <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"></textarea>

            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
