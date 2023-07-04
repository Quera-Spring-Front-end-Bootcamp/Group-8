import React from 'react'
import DropdownItem from '../../common/Dropdown/DropdownItem';

const Priority = ({handleChoosePriority}) => {
    
    
    return (
        <div className="flex flex-col items-start bg-white w-max rounded-[8px] py-2 shadow-[0_4px_16px_0px_rgba(0,0,0,0.15)] absolute right-0 bottom-[50px] z-[100]">
            <button onClick={()=>{handleChoosePriority("#FB0606")}}><DropdownItem title="فوری" icon="flag" iconColor="#FB0606" /> </button>
           <button onClick={()=>{handleChoosePriority("#FFE605")}}> <DropdownItem title="بالا" icon="flag" iconColor="#FFE605" /></button> 
           <button onClick={()=>{handleChoosePriority("#09DBCE")}}><DropdownItem title="متوسط" icon="flag" iconColor="#09DBCE" /></button> 
          <button onClick={()=>{handleChoosePriority("#B2ACAC")}}><DropdownItem title="پایین" icon="flag" iconColor="#B2ACAC" /></button>  
          <button onClick={()=>{handleChoosePriority("")}}> <DropdownItem title="حذف اولویت" icon="close" iconColor="#E45454" /></button> 
        </div>
    );
}

export default Priority;