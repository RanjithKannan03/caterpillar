import React from 'react';
import axios from 'axios';
import List from './List';

const ItemsList = async () => {

    const response = await axios.get('http://127.0.0.1:5000');
    console.log("hi");
    const predictions = response.data;

    // useEffect(() => {
    //     async function getData() {
    //         const response = await axios.get('http://127.0.0.1:5000');
    //         console.log(response);
    //         const predictions = response.data;
    //         console.log(predictions);
    //         setResult(predictions);
    //         setPrediction(predictions);
    //     }
    //     getData();
    // }, []);


    return (
        <div className='flex flex-col items-start flex-1 w-full overflow-auto'>
            <List results={predictions} />
        </div>
    )
}

export default ItemsList