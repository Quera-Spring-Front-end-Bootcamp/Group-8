import React from 'react'
import { useState, useRef } from 'react';
import TagSettings from './TagSettings';

const TagStructure = ({ id, isEditting, showSettings, deletedTagId, value, handleDelete, color, handleColorChange, handleCompleteDelete, handleEdit }) => {

    const [showTagSetting, setShowTagSetting] = useState(false);
    const [showTagSettingWindow, setShowTagSettingWindow] = useState(false);
    const [clickedTagId, setClickedtagId] = useState("");
    const [editText, setEditText] = useState(value);

    const parentRef = useRef(null);

    const handleTagMouseEnter = () => {
        setShowTagSetting(true);
    };

    const handleTagMouseLeave = () => {
        setShowTagSetting(false)
    };

    const handleClickSetting = (id) => {
        setClickedtagId(id)
        setShowTagSettingWindow(prev => !prev);
        handleColorChange(id);
        handleEdit(deletedTagId, clickedTagId, isEditting);
    };

    const handleDeleteTag = (id) => {
        handleDelete(id);
    }


    return (
        <>
            <div
                onMouseEnter={handleTagMouseEnter}
                onMouseLeave={handleTagMouseLeave}
                className='px-2 py-2 gap-1 rounded w-20 h-full relative z-10'
                style={{
                    backgroundColor: color
                }}>

                {showSettings ?
                    (
                        <>
                            {!showTagSetting &&
                                <div>{editText}</div>
                                // <input ref={parentRef} onChange={handleEditText} onKeyDown={handleKeyDown} style={{ backgroundColor: color }} className='w-full' value={editText} />
                            }
                            {showTagSetting &&
                                <div className='flex justify-between '>
                                    <span onClick={() => handleDeleteTag(id)} className="material-symbols-rounded cursor-pointer">
                                        close
                                    </span>
                                    <span onClick={() => handleClickSetting(id)} className="material-symbols-rounded cursor-pointer">
                                        more_horiz
                                    </span>
                                </div>}
                        </>

                    ) : (
                        <div>{editText}</div>

                        // <input ref={parentRef} onChange={handleEditText} onKeyDown={handleKeyDown} style={{ backgroundColor: color }} className='w-full' value={editText} />
                    )}







                {showTagSettingWindow && <TagSettings value={editText} handleColorChange={handleColorChange} clickedTagId={clickedTagId} handleCompleteDelete={handleCompleteDelete} handleEdit={handleEdit} />}
            </div>


        </>



    );
}

export default TagStructure