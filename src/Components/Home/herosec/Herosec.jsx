import React from 'react'
import '../herosec/herosec.css'
function Herosec() {
  return (
    <>
   <div className=''>
    <div>
      <img src='./banner.jpg' 
    alt='banner'
    className='ban'/>
    </div>
    <h1  className='Head1'> CONNECTS <span className='text-sky-400'>PEOPLE</span></h1>
    <h1 className='Head2'><span className='text-sky-400'> WITH </span>PEOPLE</h1>
    <button className='btn-1 rounded-lg'><span className='p-6 '>Find Out more..</span></button>
   </div>
   <div className='main-con'>
    <div className='content'>
      <h1>Introduction</h1>

    </div>
    <div className="img"></div>
   </div>
    </>
  )
}

export default Herosec;