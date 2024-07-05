'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import { useRouter } from 'next/navigation';

const SubmitButton = () => {
    const status = useFormStatus();
    const router = useRouter();

    if (status.pending) {
        return <span>loading...</span>
    }
    return (
        <button className="p-2 bg-[#E269D7] rounded-xl text-white" onClick={(e) => {
            e.preventDefault();
            router.push('/result')
        }}>Submit</button>
    )
}

export default SubmitButton