import React, { useState, useEffect, useRef } from 'react'
import TagStructure from './TagStructure';
import TagSettings from './TagSettings';
import AXIOS from '../../Dashboard/Task/ColumnView/axios.configs';

const CreateTag = ({ taskId, setIsTagOpen, updateTags, tags1, boardId, deleteTaskTags }) => {
    const [tag, setTag] = useState("")
    const [tags, setTags] = useState([]);
    const [showText, setShowText] = useState("هیچ تگی وجود ندارد");
    const [deletedTags, setDeletedTags] = useState([]);
    const [showTagSettings, setShowTagSettings] = useState(false);
    const [selectedTagId, setSelectedTagId] = useState(null);
    const [updatedTextTag, setUpdatedTextTag] = useState('');
    const [isEditting, setIsEditting] = useState(false);
    const [updatedTag, setUpdatedTag] = useState({});
    const [newTags, setNewTags] = useState([])
    const [tagName, setTagName] = useState("");
    const [editedTagId,setEditedTagId] = useState("")
    const parentRef = useRef();
    const inputRef = useRef(null);

    useEffect(() => {
        console.log(boardId)
        console.log(taskId)
        AXIOS.get(`/board/${boardId}/tasks`)
            .then(res => {
                console.log(res.data.data)
                const boards = res.data.data
                const desiredBoard = boards.find((board) => board._id === taskId)
                setTags(desiredBoard.taskTags)
            })
    }, [])

    useEffect(() => {
        inputRef.current.focus();
        const handleClickOutside = (event) => {
            if (parentRef.current && !parentRef.current.contains(event.target)) {
                setIsTagOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };

    }, []);

    const handleTagChange = (e) => {
        setTagName(e.target.value);
        setUpdatedTextTag(e.target.value)
        setShowText("برای ساختن تگ جدید اینتر بزنید")

        if (updatedTag) {
            const newTag = {
                ...updatedTag,
                name: e.target.value,
            };
            setUpdatedTag(newTag);

        }
    }

    useEffect(() => {
        updateTags(tags, newTags);

    }, [tags, newTags]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (!isEditting) {
                const newTag = {
                    _id: Date.now(),
                    name: updatedTextTag,
                    color: getRandomColor(),
                };

                setNewTags((prevTags) => [...prevTags, newTag])
                const updatedTags = [...tags, newTag]
                console.log(updatedTags)
                updateTags(updatedTags, newTags)


                setTags((prevTags) => [...prevTags, newTag]);
            } else {
                AXIOS.patch(`tags/${editedTagId}`, {

                    name: updatedTextTag,
                    color: tag.color,

                })
                    .then(res => {
                        console.log(res.data.tag)
                        // updateTags(res.data.tag)
                        const EditedTags=[...tags, res.data.tag]
                        console.log(EditedTags)
                        deleteTaskTags(EditedTags)
                        setTags(EditedTags)
                    })
                    .catch(err => console.log(err))
                // setTags((prevTags) => [...prevTags, updatedTag])
            }

            setTagName("");
            setShowText("");
            setIsEditting(false);
        }

    };

    const getRandomColor = () => {
        const colors = ['#068DA9', '#F79327', '#FFE569', '#2CD3E1', '#ADE4DB', '#9CA777', '#7AA874', '#B8621B', '#FFACAC', '#BE6DB7', '#898121', '#F7A4A4', '#94B49F'];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    const handleDelete = (id) => {

        const deletedTag = tags.find((tag) => tag._id === id);
        setTags((prevTags) => prevTags.filter((tag) => tag._id !== id));
        setDeletedTags((prevDeletedTags) => [...prevDeletedTags, deletedTag]);

    };
    const handleCompleteDelete = (id) => {
        console.log(id)
        AXIOS.delete(`/tags/${id}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
        const deletedTags = tags.filter((tag) => tag._id !== id)
        console.log(deletedTags)
        deleteTaskTags(deletedTags)
        setDeletedTags((prevTags) =>
            prevTags.filter((prevTag) => prevTag._id !== id))
        setTags((prevTags) =>
            prevTags.filter((prevTag) => prevTag._id !== id))
    }

    const handleClickSetting = (id) => {
        setSelectedTagId(id);
        setShowTagSettings(pre => !pre)
    };

    const handleColorChange = (newColor, id) => {
        setDeletedTags((prevTags) =>
            prevTags.map((tag) => tag._id === id ? { ...tag, color: newColor } : tag)
        );
        setTags((prevTags) =>
            prevTags.map((tag) => tag._id === id ? { ...tag, color: newColor } : tag))
    };

    const handleEdit = (_id) => {
        setEditedTagId(_id)
        setIsEditting(true)
        tags.map((tag) => {
            if (tag._id === _id) {
                
                setTagName(tag.name)
                const editTag = {
                    id: tag._id,
                    color: tag.color,
                    name: tag.name,
                }

                setUpdatedTag(editTag)
                const newTags = tags.filter((tag) => tag._id !== _id)
                setTags(newTags)
                // setTaskTags(newTags)
            }
        });
        deletedTags.map((deletedTag) => {
            if (deletedTag._id === _id) {
                setTagName(deletedTag.name);
                const editTag = {
                    id: deletedTag._id,
                    color: deletedTag.color,
                    tagName: deletedTag.name,
                }
                setUpdatedTag(editTag)
                const newTags = deletedTags.filter((tag) => tag._id !== _id)
                setDeletedTags(newTags)

            }
        });
    }


    return (

        <div ref={parentRef} className="flex flex-col items-start bg-white w-80 rounded-[8px] shadow-[0_4px_16px_0px_rgba(0,0,0,0.15)] absolute right-0 bottom-[50px] z-[100]">
            <div className='flex flex-wrap gap-1 m-4 text-gray-600'>
                {tags?.map((tag) =>

                    <TagStructure
                        key={tag._id}
                        id={tag._id}
                        tagName={tag.name}
                        color={tag.color}
                        handleDelete={handleDelete}
                        handleColorChange={handleColorChange}
                        showSettings={true}
                        handleCompleteDelete={handleCompleteDelete}
                        handleEdit={handleEdit}

                    />

                )
                }
            </div>

            <div className='m-auto w-4/5'>
                <div class="relative">
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span class="material-symbols-rounded">
                            search
                        </span>
                    </div>
                    <input
                        ref={inputRef}
                        value={tagName}
                        type="text"
                        className="outline-none block w-full p-4 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                        placeholder='جستجو یا ساختن تگ'
                        onChange={handleTagChange}
                        onKeyDown={handleKeyPress}
                    />
                </div>
            </div>

            <div className='px-4 py-2 w-full m-auto min-h-[125px]'>
                {showText}
                {deletedTags.map((deletedTag) => (

                    <div key={deletedTag._id} className='flex justify-between items-center w-full text-gray-600'>
                        <div className='mb-2'>
                            <TagStructure
                                showSettings={false}
                                id={deletedTag._id}
                                tagName={deletedTag.name}
                                color={deletedTag.color}
                                handleDelete={handleDelete}
                                handleColorChange={handleColorChange}
                                handleEdit={handleEdit}
                                onClick={() => setTags((prevTags) => [...prevTags, deletedTag])}
                            />
                        </div>


                        <div className='relative'>
                            <span onClick={() => handleClickSetting(deletedTag._id)} className="material-symbols-rounded cursor-pointer">
                                more_horiz
                            </span>
                            {selectedTagId === deletedTag._id && showTagSettings && (
                                <TagSettings
                                    id={deletedTag._id}
                                    handleColorChange={handleColorChange}
                                    handleCompleteDelete={handleCompleteDelete}
                                    handleEdit={handleEdit}
                                />)}
                        </div>

                    </div>

                ))}
            </div>
        </div >

    );

}

export default CreateTag

