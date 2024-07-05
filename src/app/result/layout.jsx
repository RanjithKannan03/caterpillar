import ItemsList from '@/components/ItemsList'
import React from 'react'

const layout = ({ children }) => {
    return (
        <div className='flex w-screen h-screen'>

            <div className='flex flex-col w-[20%] h-screen bg-[#161B2E] p-4 gap-8'>
                <span className='text-2xl font-semibold text-white'>Items</span>
                <ItemsList />
            </div>

            <div className='flex flex-1 h-screen bg-[#111525]'>
                {children}
            </div>

        </div>
    )
}

export default layout