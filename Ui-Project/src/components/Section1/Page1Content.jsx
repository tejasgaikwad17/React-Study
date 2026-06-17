import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  console.log(props);
  
  return (
    <div className='px-10 py-5 h-[90vh] flex gap-10 '>
        <LeftContent />
        <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content