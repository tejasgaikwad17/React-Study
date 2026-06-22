import React from 'react'

const Card = (props) => {
    // console.log(props);

  return (
    <div>
         <div className= ' h-40 w-40 overflow-hidden rounded-xl '>
                <img className='h-full object-cover w-full'  src={props.elem.avatar} alt="" />
              </div>
               <h2 className='font-bold text-xl'>{props.elem.name}</h2>
    </div>
  )
}

export default Card