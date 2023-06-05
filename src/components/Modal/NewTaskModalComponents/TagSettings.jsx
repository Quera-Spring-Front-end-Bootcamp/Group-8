import React, { useState} from 'react'
import { CirclePicker } from 'react-color'

const TagSettings = ({deletedTagId,clickedTagId, value, handleColorChange, handleCompleteDelete, handleEdit}) => {
    const [showPalete,setShowPalete]=useState(false)
    const [newColor, setNewColor] = useState("#000");
    const [selectedTagId,setSelectedTagId]=useState(null)
    const [isEditting, setIsEditting]=useState(false);
    const [showSettings, setShowSettings]=useState(true);

    const handleChangeTagColor=(deletedTagId, clickedTagId)=>{
        setShowPalete(prev=>!prev)
        setSelectedTagId(deletedTagId, clickedTagId)
        

    }
    const handleChangeColor=(newColor)=>{
        
        setNewColor(newColor.hex)
        setShowPalete(false)
        handleColorChange(newColor.hex,selectedTagId, clickedTagId)
        
    }
    const handleTagDelete=(deletedTagId, clickedTagId)=>{
        handleCompleteDelete(deletedTagId, clickedTagId)
    }
    const handleTagEdit=(deletedTagId, clickedTagId)=>{
        setIsEditting(true)
        setSelectedIdForEdit(deletedTagId, clickedTagId)
        handleEdit(deletedTagId,clickedTagId,isEditting)
        setShowSettings(prev=>!prev)
    }
    
    return (
        <>
            {!showPalete && showSettings && (<div className='flex flex-col items-start bg-white w-max rounded-[8px] p-2 shadow-[0_4px_16px_0px_rgba(0,0,0,0.15)] absolute z-20'>
                <div onClick={()=>handleTagDelete(deletedTagId, clickedTagId)} className='flex gap-1 cursor-pointer'>
                    <span className="material-symbols-rounded ">
                        close
                    </span>
                    <p>حذف</p>
                </div>
                <div onClick={()=>handleTagEdit(deletedTagId, clickedTagId)} className='flex gap-1 cursor-pointer'>
                    <span className="material-symbols-rounded">
                        edit_square
                    </span>
                    <p>ویرایش تگ</p>
                </div>
                <div onClick={()=>handleChangeTagColor(deletedTagId, clickedTagId)} className='flex gap-1 cursor-pointer'>
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
        </>
        
     );
}

export default TagSettings