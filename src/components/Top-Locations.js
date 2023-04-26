import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const TopLocations = () => {

    const [chartData, setChartData] = useState({
        series: [68, 37, 60, 40, 4],
          
        options: {
            legend: {
                show: false
              },
          chart: {
            type: 'donut',
            width: 80,
          },
          colors: ['#599EEA', '#844FF6', '#0FB77A', '#FAB70A', '#F09468'],
          stroke: {
            show: false
           },
          dataLabels: {
            enabled: false,
          },
          responsive: [{
            breakpoint: 80,
            options: {
              chart: {
                width: 50
              },
            }
          }],
          labels: ['Nigeria', 'Germany', 'Ghana', 'Finland', 'United Kingdom']
        }
      });
  return (
    <main className='w-1/2 shadow-xl p-10 rounded-xl border mt-10'>
        <div className='flex justify-between mb-6'>
            <h1 className='font-bold text-lg'>Top Locations</h1>
            <p className='text-sm text-[#FF5403]'>View full reports</p>
        </div>
        <section className='flex justify-between items-center'>
        <div>
        <div className='flex items-center'>
            <img src="/flags/Flag-Nigeria.webp" alt="" className='w-4 h-3 rounded-sm'/>
            <p className='pl-2'> <span className='text-sm'>Nigeria</span> <span className='font-bold'>34%</span></p>
            <span className='w-3 h-3 rounded-full bg-[#599EEA] ml-3'></span>
        </div>
        <div className='flex items-center mt-2'>
            <img src="/flags/Flag_of_Germany.webp" alt="" className='w-4 h-3 rounded-sm'/>
            <p className='pl-2'> <span className='text-sm'>Germany</span> <span className='font-bold'>19%</span></p>
            <span className='w-3 h-3 rounded-full bg-[#844FF6] ml-3'></span>
        </div>
        <div className='flex items-center mt-2'>
            <img src="/flags/Flag-Ghana.webp" alt="" className='w-4 h-3 rounded-sm'/>
            <p className='pl-2'> <span className='text-sm'>Ghana</span> <span className='font-bold'>25%</span></p>
            <span className='w-3 h-3 rounded-full bg-[#0FB77A] ml-3'></span>
        </div>
        <div className='flex items-center mt-2'>
            <img src="/flags/Flag_of_Finland.svg.png" alt="" className='w-4 h-3 rounded-sm'/>
            <p className='pl-2'> <span className='text-sm'>Finland</span> <span className='font-bold'>20%</span></p>
            <span className='w-3 h-3 rounded-full bg-[#FAB70A] ml-3'></span>
        </div>
        <div className='flex items-center mt-2'>
            <img src="/flags/Flag_of_the_United_Kingdom_(1-2).svg.png" alt="" className='w-4 h-3 rounded-sm'/>
            <p className='pl-2'> <span className='text-sm'>United Kingdom</span> <span className='font-bold'>2%</span></p>
            <span className='w-3 h-3 rounded-full bg-[#F09468] ml-3'></span>
        </div>
        </div>
     <div className='w-60'>
        <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="donut"
      />
    </div>
        </section>
    </main>
  )
}

export default TopLocations