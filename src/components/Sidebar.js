import React from 'react'

const dashboard = [
    {
        icon: '/icons/edit.png',
        text: 'Item 1'
    },
    {
        icon: '/icons/group.png',
        text: 'Item 2'
    },
    {
        icon: '/icons/hourglass_empty.png',
        text: 'Item 3'
    },
]

const others1 = [
    {
        icon: '/icons/add_a_photo.png',
        text: 'Item 4'
    },
    {
        icon: '/icons/delete.png',
        text: 'Item 5'
    },
]

const others2 = [
    {
        icon: '/icons/subscriptions.png',
        text: 'Item 6'
    },
    {
        icon: '/icons/file_present.png',
        text: 'Item 7'
    },
    {
        icon: '/icons/alarm.png',
        text: 'Item 8'
    },
]

const Sidebar = () => {
  return (
    <main className='pt-10 pb-14 pr-6 border-r w-max h-max sticky top-0'>
        <div className='pl-12 mb-8'>
            <img src="/mainstackLogo.png" alt="" />
        </div>
       <div>
       <div>
            <div className='flex items-center w-max mb-4 border-l-2 border-[#FF5403] pl-12 pr-24'>
                <div className='w-10'>
                    <img src="/icons/dashboard.png" alt="" />
                </div>
                <div>
                    <p className='font-semibold text-[#FF5403]'>Dashboard</p>
                </div>
            </div>
            {dashboard.map(item => (
             <div className='flex items-center w-max mb-4 pl-12 pr-24'>
                <div className='w-10'>
                    <img src={item.icon} alt="" />
                </div>
                <div>
                    <p className='font-semibold text-[#56616B]'>{ item.text }</p>
                </div>
            </div>
            ))}
        </div>

        <div>
            <p className='pt-4 uppercase text-[#56616B] text-sm mb-3 pl-12 pr-24'>Others 1</p>
            {others1.map(item => (
             <div className='flex items-center w-max mb-4 pl-12 pr-24'>
                <div className='w-10'>
                    <img src={item.icon} alt="" />
                </div>
                <div>
                    <p className='font-semibold text-[#56616B]'>{ item.text }</p>
                </div>
            </div>
            ))}
        </div>

        <div>
            <p className='pt-4 uppercase text-[#56616B] text-sm pl-12 mb-3 pr-24'>Others 2</p>
            {others2.map(item => (
             <div className='flex items-center w-max mb-4 pl-12 pr-24'>
                <div className='w-10'>
                    <img src={item.icon} alt="" />
                </div>
                <div>
                    <p className='font-semibold text-[#56616B]'>{ item.text }</p>
                </div>
            </div>
            ))}
        </div>
       </div>

       <div className='flex justify-between items-center pl-12 mt-36'>
        <div className='flex gap-2 items-center'>
            <img src="/unsplash_F16KPYxfm6s.png" alt=""  className='rounded-full'/>
            <p className='font-semibold text-sm text-[#56616B]'>Blessing Daniels</p>
        </div>
        <div>
            <img src="/icons/more_horiz.png" alt="" />
        </div>
       </div>
    </main>
  )
}

export default Sidebar