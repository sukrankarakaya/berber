import React from 'react'

const PriceRange = () => {
  return (
    <div className='flex flex-row justify-center  items-center '>
        <input type="text" className=" w-16 h-9 border border-secondary bg-white rounded-md items-center justify-center text-xl p-1" placeholder='0 ₺' />
        
         <label className=" pb-2 text-7xl  text-secondary  "> -</label>
         <input type="text" className=" w-16 h-9 border border-secondary bg-white rounded-md items-center justify-center text-xl p-1" placeholder='0 ₺' />
        
    </div>
  )
}

export default PriceRange