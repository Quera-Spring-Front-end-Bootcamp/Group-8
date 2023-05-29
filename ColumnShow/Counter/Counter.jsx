import React, { useState } from 'react'

const Counter = ({value}) => {
    return ( 
    <span className='w-3 h-4 bg-[#F4F4F4] text-center leading-4 text-[10px] font-medium text-[#1E1E1E] rounded'>
        {value}
    </span>
     );
}
export default Counter