import React from 'react'
import Chart from '../components/Chart'
import TopSources from '../components/Top-Sources'
import TopLocations from '../components/Top-Locations'

const Dashboard = () => {
  return (
    <main className='px-10 w-4/5 pb-20'>
        <section className=' pt-8 shrink-0'>
      <div>
        <h3 className='font-bold text-[#131316]'>Dashboard</h3>
      </div>
      <div className='flex justify-between items-center mt-10 mb-8'>
        <div>
            <h2 className='text-xl font-bold text-[#131316] mb-2'>Good morning, Blessing⛅️</h2>
            <p className='text-sm text-[#31373D]'>Check out your dashboard summary.</p>
        </div>
        <div className='w-max'>
            <p className='w-max text-sm text-[#FF5403]'>View Analytics</p>
        </div>
      </div>
      <div className='flex gap-6'>
        <div className='py-2 px-3.5 border rounded-full font-semibold'>1 Day</div>
        <div className='py-2 px-3.5 border rounded-full font-semibold'>3 Days</div>
        <div className='py-2 px-3.5 border rounded-full font-semibold'>7 Days</div>
        <div className='py-2 px-3.5 border rounded-full font-semibold'>30 Days</div>
        <div className='py-2 px-3.5 border-2 border-[#FF5403] font-semibold rounded-full bg-[#FFDDCD] text-[#FF5403]'>All Time</div>
        <div className='py-2 px-3.5 border rounded-full font-semibold'>Custom Date</div>
      </div>

      <Chart />
    </section>
    <section className='flex gap-8'>
        <TopLocations/>
        <TopSources />
    </section>
    </main>
  )
}

export default Dashboard