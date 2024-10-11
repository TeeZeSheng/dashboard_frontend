import React, { useEffect } from 'react'
import Sales from './components/Sales'
import Order from './components/Order'
import Profit from './components/Profit'
import axiosInstance from './utils/axiosInstance'

const Home = () => {
   
  return (
     <div className='w-full p-8'>
      <div className='flex justify-between w-full'>
       
          <h1 className='text-2xl mb-4'>Dashboard</h1>
          <div className='flex items-center space-x-4'>
            <h1 className='text-xl'>
                {new Date().getDate()}/{new Date().getMonth() + 1}/{new Date().getFullYear()}
            </h1>

            
          </div>
          
      
        
      </div>
      <div className='w-full overflow-x-auto '>
      <div className='flex w-full'>
        <div className='flex md:flex-row flex-col md:space-x-4 w-full space-y-4 md:space-y-0'>
            <Sales />
            <Order />
            <Profit />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home