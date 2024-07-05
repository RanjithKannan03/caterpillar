'use client';

import React, { useState } from 'react';
import SubmitButton from './SubmitButton';
import { getPredictions } from '../../lib/action';

const CSVForm = () => {
    const [file, setFile] = useState(null);

    function handleChange(e) {
        setFile(e.target.files[0]);
    }
    return (
        <div className="w-[40%] rounded-xl flex flex-col gap-8" >

            <div className="flex flex-col items-center justify-center w-full gap-2">
                <span className='self-start text-3xl font-semibold text-white'>Upload CSV :</span>
                <label htmlFor="dropzone-file-banner" className={`flex flex-col items-center justify-center w-full h-60 rounded-lg cursor-pointer bg-[#E269D7] `}>


                    <div className="flex flex-col items-center justify-center h-full pt-5 pb-6">
                        {
                            file ?
                                <span className='text-xl text-white'>{file.name}</span>
                                :
                                <>
                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-white"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-white">CSV</p>
                                </>
                        }
                    </div>

                    <input id="dropzone-file-banner" type="file" accept=".csv" className="hidden" name='banner' onChange={handleChange} />
                </label>
            </div>

            <div className="flex items-center self-end gap-8">
                <button className="p-2 bg-[#E269D7] rounded-xl text-white" onClick={() => { setFile(null) }}>Cancel</button>
                <SubmitButton />
            </div>

        </div>
    )
}

export default CSVForm