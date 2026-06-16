import React from 'react'

const Card = (propss) => {
  console.log(propss.age);
  
  return (
    <div className='col-md-4'>

            <div className='card'>
              <div className='card-img'>
                <img src={propss.img} alt="img"  />
              </div>
              <h1>{propss.user}, {propss.age}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque earum distinctio voluptatibus aspernatur, repudiandae nostrum voluptatum itaque ipsa nulla quia, deleniti aperiam numquam doloribus neque dicta labore adipisci minus!</p>
              <div className='text-center'>
                <div className='col-md-4 btn btn-primary card-btn '>
                  View Profile
                </div>
              </div>
            </div>

    </div>
  )
}

export default Card
