

import React, { useState, useEffect, useRef } from 'react'
import TagStructure from './TagStructure';
import TagSettings from './TagSettings';




const CreateTag = () => {
    const [tag, setTag] = useState("")
    const [tags, setTags] = useState([]);
    const [showText, setShowText] = useState("هیچ تگی وجود ندارد");
    const [deletedTags, setDeletedTags] = useState([]);
    const [showTagSettings, setShowTagSettings] = useState(false);
    const [selectedTagId, setSelectedTagId] = useState(null);
    const [updatedTextTag, setUpdatedTextTag] = useState('');
    const [isEditting, setIsEditting] = useState(false);
    const [enterPressed, setEnterPressed] = useState(false);
    const [updatedDeletedTag, setUpdatedDeletedTag] = useState({});



    useEffect(() => {
        setShowText(tags.length === 0 && deletedTags.length === 0 && updatedDeletedTag.lenght === 0 ? "هیچ تگی وجود ندارد" : "");
    }, [tags, deletedTags]);

    useEffect(() => {
        if (enterPressed) {
            if (!isEditting) {
                const newTag = {
                    id: Date.now(),
                    value: updatedTextTag,
                    color: getRandomColor(),
                };
                setTags((prevTags) => [...prevTags, newTag]);
                setTag("");
                setShowText("");
                setEnterPressed(false);
            } else {
                setTags((prevTags) => [...prevTags, updatedDeletedTag])
                setTag("");
                setShowText("");
                setEnterPressed(false);
                setIsEditting(false);
            }
        }
    }, [enterPressed, isEditting, updatedTextTag, deletedTags]);




    const handleTagChange = (e) => {
        setTag(e.target.value);
        setUpdatedTextTag(e.target.value)
        setShowText("برای ساختن تگ جدید اینتر بزنید")

        if (updatedDeletedTag) {
            const updatedTag = {
                ...updatedDeletedTag,
                value: e.target.value,
            };
            setUpdatedDeletedTag(updatedTag);
        }
    }


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setEnterPressed(true);
        }
    };


    const getRandomColor = () => {
        const colors = ['#068DA9', '#F79327', '#FFE569', '#2CD3E1', '#ADE4DB', '#9CA777', '#7AA874', '#B8621B', '#FFACAC', '#BE6DB7', '#898121', '#F7A4A4', '#94B49F'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    const handleDelete = (id) => {
        const deletedTag = tags.find((tag) => tag.id === id);
        setTags((prevTags) => prevTags.filter((tag) => tag.id !== id));
        setDeletedTags((prevDeletedTags) => [...prevDeletedTags, deletedTag]);
    };
    const handleCompleteDelete = (id, clickedTagId) => {
        setDeletedTags((prevTags) =>
            prevTags.filter((prevTag) => prevTag.id !== id))
        setTags((prevTags) =>
            prevTags.filter((prevTag) => prevTag.id !== clickedTagId))
    }

    const handleClickSetting = (tagId) => {
        setSelectedTagId(tagId);
        setShowTagSettings(prev => !prev)
    };

    const handleColorChange = (newColor, tagId, clickedTagId) => {
        setDeletedTags((prevTags) =>
            prevTags.map((tag) =>
                tag.id === tagId || tag.id === clickedTagId ? { ...tag, color: newColor } : tag
            )
        );
        setTags((prevTags) =>
            prevTags.map((tag) => tag.id === clickedTagId ? { ...tag, color: newColor } : tag))
    };


    const handleEdit = (deletedTagId, clickedTagId, isEditting) => {

        setIsEditting(true)
        tags.map((tag) => {
            if (tag.id === clickedTagId) {

                setTag(tag.value)
                const editTag = {
                    id: tag.id,
                    color: tag.color,
                    value: tag.value,
                }

                setUpdatedDeletedTag(editTag)
                const updatedTags = tags.filter((tag) => tag.id !== clickedTagId)

                setTags(updatedTags)
            }

        });


        deletedTags.map((deletedTag) => {
            if (deletedTag.id === deletedTagId) {
                setTag(deletedTag.value);
                const editTag = {
                    id: deletedTag.id,
                    color: deletedTag.color,
                    value: deletedTag.value,
                }
                setUpdatedDeletedTag(editTag)
                const updatedDeletedTags = deletedTags.filter((deletedTag) => deletedTag.id !== deletedTagId)
                setDeletedTags(updatedDeletedTags)
                return updatedDeletedTag
            }
        });
    }

    return (
        <div className="flex flex-col items-start bg-white w-80 rounded-[8px] shadow-[0_4px_16px_0px_rgba(0,0,0,0.15)] absolute right-0 bottom-[50px] z-[100]">
            <div className='flex flex-wrap gap-1 m-4 text-gray-600'>
                {(tags.map((tag) =>

                    <TagStructure
                        key={tag.id}
                        id={tag.id}
                        value={tag.value}
                        color={tag.color}
                        handleDelete={handleDelete}
                        handleColorChange={handleColorChange}
                        showSettings={true}
                        handleCompleteDelete={handleCompleteDelete}
                        handleEdit={handleEdit}

                    />
                ))
                }
            </div>

            <div className='m-auto w-4/5'>
                <div class="relative">
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span class="material-symbols-rounded">
                            search
                        </span>
                    </div>
                    <input autoFocus value={tag} onChange={handleTagChange} onKeyDown={handleKeyPress} type="text" className="outline-none block w-full p-4 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder='جستجو یا ساختن تگ' />
                </div>
            </div>

            <div className='px-4 py-2 w-full m-auto min-h-[125px]'>{showText}
                {deletedTags.map((deletedTag) => (

                    <div key={deletedTag.id} className='flex justify-between items-center w-full text-gray-600'>

                        <div className='mb-2'>
                            <TagStructure
                                showSettings={false}
                                id={deletedTag.id}
                                value={deletedTag.value}
                                color={deletedTag.color}
                                handleDelete={handleDelete}
                                handleColorChange={handleColorChange}
                                handleEdit={handleEdit}
                            />
                        </div>


                        <div className='relative'>
                            <span onClick={() => handleClickSetting(deletedTag.id)} className="material-symbols-rounded cursor-pointer">
                                more_horiz

                            </span>
                            {selectedTagId === deletedTag.id && showTagSettings && (<TagSettings deletedTagId={deletedTag.id} value={deletedTag.value} handleColorChange={handleColorChange} handleCompleteDelete={handleCompleteDelete} handleEdit={handleEdit} />)}
                        </div>

                    </div>

                ))}
            </div>
        </div >

    );

}

export default CreateTag