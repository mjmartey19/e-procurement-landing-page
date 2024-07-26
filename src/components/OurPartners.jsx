import React from 'react'
import { partners } from "./../constants";

const OurPartners = () => {
  return (
    <div className='flex flex-col justify-center items-center py-5 bg-blue-100/40'>
            <h1 className='font-semibold  mb-5'>Sponsored By</h1>
            <div className='py-5'>
               <img src="/img/carisca.png" width={300}/>
            </div>
         <div className='flex items-center md:flex-row flex-col justify-center w-full gap-10 bg-gray-100 py-5'>
             {partners.map(partner => (
                <img key={partner.image} src={partner.image} alt={partner.image} width={150}/>
             ))}
         </div>
    </div>
  )
}

export default OurPartners
