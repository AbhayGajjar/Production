"use client"

import React, { useEffect, useState } from 'react'


const Test = () => {

    const [data, setdata] = useState([])
    const fetchapidata = async () => {
    let data = await fetch('https://dummyjson.com/quotes');
    let result = await data.json();
    setdata(result.quotes)
    }


    useEffect(() => {
        fetchapidata();
        const intervel = setInterval(() => { fetchapidata(); }, 2000)
        return () => clearInterval(intervel);

    }, [])

    return (
        <div>
            {
                data.map((item: any) => {
                    return (
                        <div className='flex' key={item.id}>
                            <h3 className='border-[1px] border-black'>{item.quote}</h3>
                            <h2 className='right-0 text-center'>kcsano</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Test