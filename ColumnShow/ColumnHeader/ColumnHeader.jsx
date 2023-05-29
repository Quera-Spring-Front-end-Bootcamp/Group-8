
import React, { useState } from 'react';
import ArezooComponent from './../../ArezooComponent/ArezooComponent';
import Counter from '../Counter/Counter';


const Column = ({ id, borderColor, columnText, handleDelete, handleClickEdit }) => {
  const [rowCount, setRowCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);
  const [isSettingHovered, setIsSettingHovered]= useState(true)
  const [columnEditID, setColumnEditID] = useState(null);
  const [columnEditText, setColumnEditText] = useState('')
  const [isEditing, setIsEditing] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const addRow = () => {
    setRowCount(rowCount + 1);
  };

  const openSettings = () => {
    setIsSettingOpen(true)
  }
  const closeSettings = () => {
    setIsSettingOpen(false)
  }


  const updateInputData= ()=>{
    setIsEditing(true);
    setColumnEditID(id);
    setColumnEditText(columnText);

    setIsSettingOpen(false);
    setIsSettingHovered(false);
  }
  

  const changeEditText=(e)=>{
  
    const newColumnEditText= e.target.value;
    setColumnEditText(newColumnEditText)
    
    
  }

  const handleClick= ()=>{
    handleClickEdit(id, columnEditText)
    setColumnEditID(null);
    setColumnEditText("");
    setIsSettingHovered(true);
    setIsEditing(false);
  }

  return (
    <div className='relative mr-8' >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ borderTop: `1px solid ${borderColor}` }}
        className={`flex flex-row justify-between items-center gap-1 py-2 px-3 w-[250px] h-[41px] shadow-md bg-white text-[#1E1E1E]-500 border-t border-t-[blockPickerColor]-500 rounded`}
      >
      
      {columnEditID === id ? 
      (    
      <>
            
            <input type='text' autoFocus onChange={changeEditText} value={columnEditText} className='outline-none' />
            <span onClick={handleClick} className="material-symbols-outlined cursor-pointer">
              done
            </span>
      </>)
        :
        (<div className="flex gap-2 items-center">
          <div>{columnText}</div>
          <Counter value={rowCount} />
        </div>)}
        

        {isHovered && isSettingHovered && (
          <div className="flex ">
            <span onClick={openSettings} className="material-symbols-outlined cursor-pointer">
              more_horiz
            </span>
            <span onClick={addRow} className="material-symbols-outlined cursor-pointer">
              add
            </span>
          </div>
        )}
        {isSettingOpen && (
          <div className='absolute top-0 left-0 shadow-md p-4 rounded mt-2 z-10 bg-white border-t cursor-pointer'>
            <span onClick={closeSettings} className="material-symbols-outlined">
              close
            </span>
            <div className='flex flex-col gap-4 text-gray-800 '>

              <div onClick={updateInputData} className='flex items-center gap-2 cursor-pointer'>
                <span className="material-symbols-outlined">
                  edit_square
                </span>
                <p>ویرایش نام ستون</p>
              </div>
              <div className='flex items-center gap-2'>
                <span className="material-symbols-outlined">
                  add
                </span>
                <p>افزودن تسک</p>
              </div>
              <div className='flex items-center gap-2'>
                <span className="material-symbols-outlined">
                  move_to_inbox
                </span>
                <p>آرشیو تمام تسک ها</p>
              </div>
              <div onClick={() => handleDelete(id)} className='flex items-center gap-2'>
                <span className="material-symbols-outlined">
                  delete
                </span>
                <p>حذف ستون</p>
              </div>
            </div>



          </div>
        )}
      </div>



      <div className='mt-4'>
        {Array.from(Array(rowCount), (_, index) => (
          <div className="flex flex-col justify-start items-center gap-1 py-2 px-3 mb-4" key={index}>
            <ArezooComponent />
          </div>
        ))}
      </div>

    </div>


  );
};

export default Column;