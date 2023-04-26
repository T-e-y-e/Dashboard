import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const TopSources = () => {

    const [chartData, setChartData] = useState({
        series: [50, 68, 40, 41],
          
        options: {
            legend: {
                show: false
              },
          chart: {
            type: 'donut',
            width: 30,
          },
          marker: {
            show: false,
        },
          colors: ['#599EEA', '#844FF6', '#0FB77A', '#FAB70A'],
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
          labels: ['Google', 'Instagram', 'Facebook', 'LinkedIn']
        }
      });
  return (
    <main className='w-1/2 shadow-xl p-10 rounded-xl border mt-10'>
        <div className='flex justify-between mb-6'>
            <h1 className='font-bold text-lg'>Top Referral sources</h1>
            <p className='text-sm text-[#FF5403]'>View full reports</p>
        </div>
        <section className='flex justify-between items-center'>
        <div>
        <div className='flex items-center'>
            <img src="/socials/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="" className='w-4 h-4 rounded-sm'/>
            <p className='pl-2'> <span className='text-sm'>Google</span> <span className='font-bold'>25%</span></p>
            <span className='w-3 h-3 rounded-full bg-[#599EEA] ml-3'></span>
        </div>
        <div className='flex items-center mt-2'>
            <img src="/socials/Instagram_icon.png.webp" alt="" className='w-4 h-4 rounded-sm'/>
            <p className='pl-2'> <span className='text-sm'>Instagram</span> <span className='font-bold'>34%</span></p>
            <span className='w-3 h-3 rounded-full bg-[#844FF6] ml-3'></span>
        </div>
        <div className='flex items-center mt-2'>
            <img src="/socials/Vector.png" alt="" className='w-3 h-4 rounded-sm'/>
            <p className='pl-2'> <span className='text-sm'>Facebook</span> <span className='font-bold'>20%</span></p>
            <span className='w-3 h-3 rounded-full bg-[#0FB77A] ml-3'></span>
        </div>
        <div className='flex items-center mt-2'>
            <img src="/socials/174857.png" alt="" className='w-4 h-4 rounded-sm'/>
            <p className='pl-2'> <span className='text-sm'>LinkedIn</span> <span className='font-bold'>21%</span></p>
            <span className='w-3 h-3 rounded-full bg-[#FAB70A] ml-3'></span>
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

export default TopSources