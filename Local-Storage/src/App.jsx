import React from 'react'

const App = () => {
  // localStorage.clear();

  // const user = {
  //   name : "Tejas",
  //   age : 25,
  //   gender: "male"
  // }

  // // localStorage.setItem('user', user)  // in that you can see the [object, object] values in the local storage. It should look like string so we use - JSON.DTRINGIFY() funtion

  // localStorage.setItem('user',JSON.stringify(user))  //now this shows the value in the string format , now we are removed it that dosent matter.

  const user = JSON.parse(localStorage.getItem("user"))  //when we directly do the getItem then it shows in the string form, for original form we have to do JSON.parse() fucntion
  console.log(user);
  
  
 
  return (
    <div>App</div>
  )
}

export default App