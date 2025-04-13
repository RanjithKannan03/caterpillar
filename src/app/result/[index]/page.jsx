'use client';

import React, { useState } from 'react';
import { predictionStore } from '../../../../zustand/store';

const page = ({ params }) => {
    const prediction = predictionStore((state) => state.prediction);
    const [isGen, setIsGen] = useState(false);
    const [loading, setIsLoading] = useState(false);
    const index = parseInt(params.index);


    async function genRecommendation() {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 5000));
        setIsGen(true);
        setIsLoading(false);
    }

    return (
        <div className='w-full h-full'>
            <div className='flex flex-col w-full h-full gap-8 p-8 pt-20'>

                <div className='flex items-center justify-between w-full p-2 text-white'>
                    <span className='text-4xl font-semibold'>{prediction[index].Machine}</span>
                    <span>{prediction[index].time}</span>
                </div>

                <div className='flex items-center w-full gap-8 p-2 text-white'>
                    <span className='text-2xl font-medium text-white'>Parameter:</span>
                    <span className='text-4xl font-semibold text-white'>{prediction[index].param_mapping_x}</span>
                </div>

                <div className='flex items-center w-full gap-8'>
                    <div className='flex items-center gap-8'>
                        <span className='text-2xl font-medium text-white'>Probabilty of Failure:</span>
                        {/* <span className='p-2 text-4xl font-semibold text-green-500 border-2 border-green-500 border-solid'>Pass</span> */}
                        <span className={`text-4xl font-semibold ${prediction[index].target === "Will Fail" ? "text-red-500" : "text-green-500"} `}>{prediction[index]["Probability of Failure"]}</span>
                    </div>

                    <div className='flex items-center gap-8'>
                        <span className='text-2xl font-medium text-white'>Status:</span>
                        {/* <span className='p-2 text-4xl font-semibold text-green-500 border-2 border-green-500 border-solid'>Pass</span> */}
                        <span className={`px-4 py-2 text-4xl font-semibold ${prediction[index].target === "Will Fail" ? "text-red-500 border-2 border-red-500" : "text-green-500 border-2 border-green-500"} border-solid`}>{prediction[index].target}</span>
                    </div>
                </div>

                {
                    prediction[index].target === "Will Fail" &&
                    <div className='flex w-full'>
                        {
                            isGen ?
                                (
                                    <div className='flex flex-col w-full gap-4 text-white'>

                                        <span className='text-2xl font-medium text-green-500'>Recommendations:</span>
                                        <span className=''>
                                            {prediction[index].suggestion}
                                        </span>
                                    </div>
                                )
                                :
                                <button onClick={genRecommendation} className='p-4 text-lg font-semibold text-white bg-orange-500'>Generate Recommendations</button>
                        }
                    </div>
                }

            </div>
            {
                loading && (
                    <div className='absolute top-0 left-0 flex w-screen h-screen z-50 bg-[rgb(0,0,0,0.4)] items-center justify-center'>

                        <div className="animate-spin inline-block size-10 border-[3px] border-current border-t-transparent rounded-full text-white" role="status" aria-label="loading">
                            <span className="sr-only">Loading...</span>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default page