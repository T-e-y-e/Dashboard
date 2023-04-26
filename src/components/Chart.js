import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const Chart = () => {
    const [series, setSeries] = useState([
        {
          name: 'Views',
          data: [1, 3, 3, 7, 8, 5, 20, 50, 100, 2]
        },
      ]);
      
      const [options, setOptions] = useState({
        chart: {
          height: 350,
          type: 'area',
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        colors: ['#FF5403'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
         curve: 'straight'
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2022-07-31',
            '2022-08-01',
            '2022-08-02',
            '2022-08-03',
            '2022-08-04',
            '2022-08-05',
            '2022-08-06',
            '2022-08-07',
            '2022-08-08',
            '2022-08-09',
          ],
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy',
          },
        },
      });

  return (
    <main className='shadow-xl p-10 rounded-xl border mt-10'>
        <div className='flex justify-between items-center mb-8'>
        <div>
            <h2 className='text-lg font-bold text-[#131316] mb-2'>Page views</h2>
            <p className='text-sm text-[#31373D]'>All Time</p>
        </div>
        <div className='w-max'>
          <img src="/icons/info.png" alt="" />
        </div>
      </div>
      <h1 className='font-bold text-5xl'>500</h1>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="area" height={350} />
      </div>
    </main>
    
  )
}

export default Chart