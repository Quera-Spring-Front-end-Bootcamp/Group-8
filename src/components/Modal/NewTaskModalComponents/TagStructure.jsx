import React from 'react'
import { useState, useEffect, useRef } from 'react';
import TagSettings from './TagSettings';

const TagStructure = ({ id, showSettings, tagName, color, handleDelete, handleColorChange, handleCompleteDelete, handleEdit }) => {

    const [showTagSetting, setShowTagSetting] = useState(false);
    const [showTagSettingWindow, setShowTagSettingWindow] = useState(false);
    const parentRef=useRef(null);


    const handleClickSetting = () => {
        setShowTagSettingWindow(prev => !prev);
    };

    const handleDeleteTag = (id) => {
        handleDelete(id);
    }

    return (
        <>
            <div ref={parentRef}
                onMouseEnter={() => setShowTagSetting(true)}
                onMouseLeave={() => setShowTagSetting(false)}
                className='flex items-center justify-center w-14 h-8 text-[10px] rounded-tl-[10px] rounded-bl-[10px]'
                style={{
                    backgroundColor: color
                }}>

                {showSettings ?
                    (
                        <>
                            {!showTagSetting &&
                                <div>{tagName}</div>

                            }
                            {showTagSetting &&
                                <div className='flex justify-between '>
                                    <span onClick={() => handleDeleteTag(id)} className="material-symbols-rounded cursor-pointer">
                                        close
                                    </span>
                                    <span onClick={handleClickSetting} className="material-symbols-rounded cursor-pointer">
                                        more_horiz
                                    </span>
                                </div>}
                        </>

                    )
                    : (
                        <div>{tagName}</div>
                    )
                }


            </div>
            {showTagSettingWindow &&
                <TagSettings
                    id={id}
                    handleColorChange={handleColorChange}
                    handleCompleteDelete={handleCompleteDelete}
                    handleEdit={handleEdit}
                />}

        </>



    );
}

export default TagStructure