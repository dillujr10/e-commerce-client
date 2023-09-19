import React from 'react'


const product = () => {
  return (
  
    <>
  <div className="card w-70 lg:w-75  bg-base-100 shadow-xl ">
  <figure><img className='h-60 w-full object-cover' src="https://i.pinimg.com/564x/a7/bc/26/a7bc265e5b943813ed18cf548251db7b.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p className='sliderinfo'>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </>
  )
}

export default product