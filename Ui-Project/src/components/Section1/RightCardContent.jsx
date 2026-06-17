import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-bold font-lg'>{props.id+1}</h2>
            <div>
                <p className='font-semibold leading-normal font-lg text-white mb-10 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione qui inventore sint fugiat deleniti sit eius tenetur voluptates placeat repellendus!</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-500 rounded-full px-8 py-2  font-medium'>{props.tag}</button>
                    <button  className='bg-blue-500 rounded-full px-4 py-2  font-medium'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCardContent