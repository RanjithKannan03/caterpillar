'use client';

import React from 'react';
import { faker } from '@faker-js/faker';
import { predictionStore } from '../../../../zustand/store';

const page = ({ params }) => {
    const prediction = predictionStore((state) => state.prediction);
    const index = params.index;
    return (
        <div className='flex flex-col w-full h-full gap-8 p-8 pt-20'>

            <div className='flex items-center justify-between w-full p-2 text-white'>
                <span className='text-4xl font-semibold'>{prediction[index].Machine}</span>
                <span>{prediction[index].time}</span>
            </div>

            <div className='flex items-center w-full gap-8'>
                <div className='flex items-center gap-8'>
                    <span className='text-2xl font-medium text-white'>Probabilty of Failure:</span>
                    {/* <span className='p-2 text-4xl font-semibold text-green-500 border-2 border-green-500 border-solid'>Pass</span> */}
                    <span className='text-4xl font-semibold text-red-500 '>{prediction[index]["Probability of Failure"]}</span>
                </div>
                <div className='flex items-center gap-8'>
                    <span className='text-2xl font-medium text-white'>Status:</span>
                    {/* <span className='p-2 text-4xl font-semibold text-green-500 border-2 border-green-500 border-solid'>Pass</span> */}
                    <span className='px-4 py-2 text-4xl font-semibold text-red-500 border-2 border-red-500 border-solid'>{prediction[index].target}</span>
                </div>
            </div>

            <div className='flex flex-col w-full gap-4 text-white'>

                <span className='text-2xl font-medium'>Recommendations:</span>
                <span className=''>
                    {prediction[index].suggestion}
                </span>
            </div>

        </div>
    )
}

export default page