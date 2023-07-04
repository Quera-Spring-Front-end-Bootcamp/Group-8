import React, { useState, useEffect, useRef } from 'react'
import { CirclePicker } from 'react-color'

const TagSettings = ({ id, handleColorChange, handleCompleteDelete, handleEdit }) => {
    const [showPalete, setShowPalete] = useState(false)
    const [newColor, setNewColor] = useState("#000");
    const [showSettings, setShowSettings] = useState(true);
    const parentRef= useRef(null);
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (parentRef.current && !parentRef.current.contains(event.target)) {   
                setShowSettings(false)
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleChangeTagColor = () => {
        setShowPalete(prev => !prev)      
    }

    const handleChangeColor = (newColor) => {
        setNewColor(newColor.hex)
        setShowPalete(false)
        handleColorChange(newColor.hex,id) 
        setShowSettings(false)
    }

    const handleTagDelete = (id) => {
        handleCompleteDelete(id)
    }

    const handleTagEdit = (id) => {
        handleEdit(id)
        setShowSettings(prev => !prev)
    }

    return (
        <div ref={parentRef}>
            {!showPalete && showSettings && (<div className='flex flex-col items-start bg-white w-max rounded-[8px] p-2 shadow-[0_4px_16px_0px_rgba(0,0,0,0.15)] absolute z-20'>
                <div onClick={() => handleTagDelete(id)} className='flex gap-1 cursor-pointer'>
                    <span className="material-symbols-rounded ">
                        close
                    </span>
                    <p>حذف</p>
                </div>
                <div onClick={() => handleTagEdit(id)} className='flex gap-1 cursor-pointer'>
                    <span className="material-symbols-rounded">
                        edit_square
                    </span>
                    <p>ویرایش تگ</p>
                </div>
                <div onClick={handleChangeTagColor} className='flex gap-1 cursor-pointer'>
                    <span className="material-symbols-rounded">
                        palette
                    </span>
                    <p>ویرایش رنگ</p>
                </div>

            </div>)}
            {showPalete &&
                (
                    <div className='flex absolute'>
                        <CirclePicker color={newColor} onChange={handleChangeColor} />
                    </div>
                )
            }
        </div>

    );
}

export default TagSettings
