import { useEffect, useState } from 'react';
import './SearchedFlights.css'

const SearchedFlight = () => {

    const [data,setData]=useState([]);
    
    useEffect(()=>{
        console.log('hi')
        setData(localStorage.getItem('search'))
        localStorage.setItem('data',JSON.stringify(data))
    })

    return (  
        <div className="page">
            <h1>{data}</h1>
        </div>
    );
}
 
export default SearchedFlight