import React from 'react'
import { useParams } from 'react-router-dom'

const CourceDetails = () => {

    const params = useParams()

    // console.log(params);
    

  return (
    <div className='flex justify-center'><h1>{params.id} CourceDetails</h1></div>
  )
}

export default CourceDetails