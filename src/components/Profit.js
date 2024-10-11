import React, { useEffect, useState } from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import axiosInstance from '../utils/axiosInstance';

const Profit = () => {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState([]);
  const [date, setDate] = useState([])
  const [profit, setProfit] = useState([])
  useEffect(() => {
    axiosInstance.get('/data/getExpenses').then((res) => {
      const expenses = res.data.expense.map(ex => ({value: ex.price, label: ex.name}));
      // const amount = res.data.expense.map(ex => ex.price);
      setExpenses(expenses);
      const date = res.data.profit.map(p => p.date)
      const profit = res.data.profit.map(p => p.profit)
      setDate(date)
      setProfit(profit)
      // setAmount(amount);
     console.log(res.data) 
    }).catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div className='w-fit basis-1/2 space-y-4 flex flex-col h-full'>
        <div className='chart p-4 basis-3/4'>
            <h1 className='mb-2 text-xl'>Net Profit</h1>
            <p>This Month</p>
            <BarChart
              xAxis={[
                {
                  id: 'barCategories',
                  data: date,
                  scaleType: 'band',
                  
                },
              ]}
              series={[
                {
                  data: profit,
                  color: "blue",
                },
              ]}
              
              width={440}
              height={300}
            /> 
        </div>
        <div className='chart p-4 basis-1/4'>
            <h1>Expenses</h1>
            <PieChart
                series={[
                    {
                    data: expenses,
                    },
                ]}
                width={400}
                height={200}
            />
        </div>
    </div>
  )
}

export default Profit