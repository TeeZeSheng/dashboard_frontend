import React, { useEffect, useState } from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import axiosInstance from '../utils/axiosInstance';
const Sales = () => {
    const [date, setDate] = useState([]);
    const [revenue, setRevenue] = useState([]);
    const [location, setLocation] = useState([]);
    const [sum, setSum] = useState(0);

    useEffect(() => {
        axiosInstance.get("/data/getRevenue/5").then((res) => {
            const revenueItems = res.data.revenue.map(revenue => revenue.price)
            const dateItems = res.data.revenue.map(revenue => revenue._id)
            setDate(res.data.days)
            setRevenue(revenueItems)
            setLocation(res.data.location)
            setSum(res.data.sum)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
  return (
    <div className='w-fit basis-1/2 space-y-4 h-full flex flex-col'>
        <div className='chart p-4 basis-3/4 shrink-0'>
            <h1 className='mb-12 text-xl'>Total Sales</h1>
            <h1 className='text-3xl'>RM {sum}</h1>
            <h1 className='mt-12 text-xl'>Sales Volume</h1>

            <LineChart
                xAxis={[{ data: date }]}
                series={[
                {
                    data: revenue,
                },
                ]}
                width={440}
                height={300}
                tooltip={{trigger: 'item'}}
            />
        </div>

        <div className='chart p-4 basis-1/4' id='saleslocation'>
            <h1>Sales Location</h1>
            
            {location.map((l, k) => (
                <div className='flex justify-between my-4' key={k}>
                    <h1>{l._id}</h1>
                    <p>RM {l.price}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Sales