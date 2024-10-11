import React, { useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import axiosInstance from '../utils/axiosInstance';

const Order = () => {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const [totalOrder, setTotalOrder] = useState(0);
  const [mostOrder, setMostOrder] = useState('');
  useEffect(() => {
    axiosInstance.get('/order/getOrder').then((res)=> {
        const count = res.data.order.map(order => order.quantity);
        const newItems = res.data.order.map(order => order._id); 
        setItems(newItems); 
        setQuantity(count)
        setTotalOrder(res.data.todayOrder[0].count)
        setMostOrder(res.data.mostOrder[0]._id)
        console.log(res.data)
      // console.log(res.data.order)
    }).catch(err=>{
      console.log(err)
    })
  }, [])

  return (
    <div className='w-fit basis-1/2 flex flex-col'>
        <div className='chart p-4 h-full'>
            <h1 className='mb-12 text-xl'>Orders</h1>
            {/* <p className='text-3xl'>{totalOrder}</p> */}
            <h1 className='mt-12 text-xl'>Order Volume</h1>
            <BarChart
              xAxis={[{ scaleType: 'band', data: items }]}
              series={[{ data: quantity}]}
              width={440}
              height={300}
              tooltip={{ trigger: 'item'}} 
              
            />
            <div className='space-y-4 mt-12'>
                <h1>Orders Statistics</h1>
                <div className='flex justify-between'>
                  <p>Number of orders today </p>
                  <p>{totalOrder}</p>
                </div>
                <div className='flex justify-between'>
                <p>Most ordered item</p>
                  <p>{mostOrder}</p>
                </div>
                
                
            </div>
        </div>
        
    </div>
  )
}

export default Order