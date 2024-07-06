'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { predictionStore } from '../../zustand/store';

const List = ({ results }) => {
    const router = useRouter();
    const prediction = predictionStore((state) => state.prediction);
    const setPrediction = predictionStore((state) => state.setPrediction);
    setPrediction(results);
    const [selected, setSelected] = useState(-1);
    return (
        <div className='flex flex-col w-full gap-2 '>

            {
                results.length > 0 ?
                    results.map((value, index) => {
                        return (
                            <div key={index} className={`flex items-center justify-between transition-colors w-full rounded-xl hover:text-white gap-2 hover:bg-gradient-to-b from-[rgb(226,105,215,.5)] to-transparent p-4 ${index === selected ? 'text-white bg-gradient-to-b from-[rgb(226,105,215,.5)] to-transparent' : 'text-[#E269D7] bg-transparent'}`} onClick={() => {
                                setSelected(index);
                                router.push(`/result/${index}`)
                            }}>
                                <span className='text-sm font-medium'>{value.Machine}</span>
                                <span className='text-[0.6rem] font-light'>{new Date(value.Time).toLocaleString()}</span>
                            </div>
                        )
                    })
                    :
                    <span className='text-white'>loading...</span>
            }


        </div>
    )
}

export default List