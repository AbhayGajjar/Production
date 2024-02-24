import React from 'react';
import { infinity } from 'ldrs'






const loading = () => {
    
    return (
        <div>
            <l-line-wobble
                size="80"
                stroke="5"
                bg-opacity="0.1"
                speed="1.75"
                color="black"
            ></l-line-wobble>
        </div>
    )
}

export default loading