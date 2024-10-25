import Image from 'next/image'
import React from 'react'

const HOME = () => {
  return (
    <div className='flex justify-between' style={{
      backgroundImage: "url('/Ghouse.jpg')", // Public folder ka path
      backgroundSize: 'cover', // Image ko cover karne ke liye
      backgroundPosition: 'center ', // Center mein position karne ke liye
      height: '100vh', // Full viewport height
    }}
    >
  <div className='flex text-xl mt-20 text-bold ml-6'>
    <ul>
                   <li><h1 className='text-sky-800 font-bold text-5xl'>Governor Sindh</h1></li>
                   <li><h1 className='text-sky-800 text-bold text-4xl' >Kamran Khan Tessori</h1></li><br></br>
                   <li><h1 className='text-sky-400 font-bold text-3xl' >Certified Cloud<br></br> Applied Generative AI<br></br> Engineer (GenEng)</h1></li><br></br>
                   <li><h1 className='text-sky-800 font-bold text-2xl' >Earn up to $5,000/month</h1></li><br></br>
                   <li><h1 className='text-sky-800 font-bold text-2xl' >Now admissions are open in<br></br> Hyderabad</h1></li><br></br>
                   <button className='bg-sky-800 text-white text-bold border-rounded'>APPLY NOW</button>       <center className='text-sky-800'>562,143</center>
                                                                                                         <center className='text-sky-800'>Accepted Applicatons</center>                              
                      </ul>
           </div>
            <div className='flex justify-end '>
       <Image
                   src={require('@/public/Governor.png')}
                   alt='Logo'
                   width={500}
                   height={500}
                  
                        />
           </div>
 </div>
   

  )
}

export default HOME