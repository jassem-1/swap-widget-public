import React from 'react'

function Indications() {
    const fdv = "$105M";
    const mkt = "$55T";
    const liquidity = "$11M";
    const vol = "$11B";
  return (
    <div className="flex w-full items-center justify-center px-4 py-4 gap-x-10 mb-3
    lg:container lg:mx-auto lg:px-12">
      
     
     
           <div className="flex flex-col items-center ">
               <p className="font-semibold text-gray-400 ">Fdv</p>
               <p className="text-black font-semibold">{fdv}</p>
           </div>
           <div className="flex flex-col items-center ">
               <p className="font-semibold  text-gray-400">Mkt Cap</p>
               <p className="text-black font-semibold">{mkt}</p>
           </div>
           <div className="flex flex-col items-center ">
               <p className="font-semibold  text-gray-400">vol(24)</p>
               <p  className="text-black font-semibold">{vol}</p>
           </div>
           <div className="flex flex-col items-center ">
               <p className="font-semibold  text-gray-400">Liquidity</p>
               <p  className="text-black font-semibold">{liquidity}</p>
           </div>
   </div>
  )
}

export default Indications