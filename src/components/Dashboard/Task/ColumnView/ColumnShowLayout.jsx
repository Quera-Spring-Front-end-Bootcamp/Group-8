import React, { useEffect, useState, useRef, useContext, createContext } from 'react';
import Column from './../../../Dashboard/Task/ColumnView/ColHeader/ColumnHeader';
import { CirclePicker } from 'react-color';
import AXIOS from './axios.configs';
import { ActiveButtonsContext } from '../../../../App';

function ColumnShowLayout() {
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked1, setIsClicked1] = useState(true);
    const [columns, setColumns] = useState([]);
    const [column, setColumn] = useState({
        name: "",
        borderColor: "",
        tasks: [],
        position: 0,
    });
    const [color, setColor] = useState(null);
    const [showPicker, setShowPicker] = useState(true);
    const parentRef = useRef(null);
    const { boards, projectId } =
        useContext(ActiveButtonsContext);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (parentRef.current && !parentRef.current.contains(event.target)) {
                setShowPicker(false);
                setIsClicked(false);
                setIsClicked1(true)
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setColumns(boards)
    }, [boards])

    const handleChangeColor = (newColor) => {
        setColor(newColor.hex);
        setShowPicker(false)
    };


    const handleColumnTextChange = (event) => {
        setColumn({ ...column, name: event.target.value });
    };

    const changeStatus = () => {
        setShowPicker(true)
        setIsClicked(true)
        setIsClicked1(false)
        setColor("");
    }

    const addColumn = () => {
        if (column.name) {
            AXIOS.post('/board', {
                name: column.name,
                projectId: projectId
            }).then(res => {
                console.log(res)
                const retrievedColumn = res.data.data
                const newColumn = { ...retrievedColumn, borderColor: color }
                localStorage.setItem(newColumn._id, color);
                setColumns((prevColumns) => [...prevColumns, newColumn])

            }).catch(error => console.log(error))

            setShowPicker(false)
            setIsClicked(false)
            setIsClicked1(true)

        }

    };

    const handleDelete = (id) => {
        AXIOS.delete(`/board/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        setColumns((prevColumns) => prevColumns.filter((column) => column._id !== id))
    }

    function handleBoardEdit(id, newcolumnText) {

        AXIOS.put(`/board/${id}`,
            {
                name: newcolumnText
            }

        ).then((res) => {
            console.log(res)
            const response = res.data.data
            const editedColumn = { ...response, borderColor: localStorage.getItem(response._id) }
            setColumns((prevColumns) => {
                return prevColumns.map((column) => {
                    if (column._id === id) {
                        return editedColumn
                    }
                    return column;

                })
            })
        })
            .catch(error => console.log(error));

    }

    return (

        <div ref={parentRef} className='flex flex-row '>

            <div className="flex">
                {columns.map(({ _id, borderColor, name, position }) => (
                    <Column
                        boardId={_id}
                        key={_id}
                        borderColor={borderColor}
                        position={position}
                        columnText={name}
                        handleDelete={handleDelete}
                        handleBoardEdit={handleBoardEdit}
                        setColor={setColor}
                        color={color}
                        setColumns={setColumns}

                        parentRef={parentRef}
                    />
                ))}
            </div>

            {isClicked1 &&
                (
                    <div onClick={changeStatus} className={`flex gap-8 shadow-md flex-row justify-between items-center py-2 px-3 mb-4 w-[250px] h-[41px] bg-white text-[#1E1E1E]-500 border-t rounded cursor-pointer relative z-1`}>

                        <div>
                            ساختن ستون جدید

                        </div>
                        <span className="material-symbols-rounded">
                            add
                        </span>
                    </div>
                )
            }
            {isClicked &&
                (<>
                    <div className='flex relative shadow-md flex-row justify-between items-center gap-1 py-2 px-2 mb-4 w-[250px] h-[41px] bg-white  border-t rounded cursor-pointer'>

                        <div className='absolute top-[45px] z-10 bg-white'>

                            {showPicker && (<CirclePicker color={color} onChange={handleChangeColor} />)}
                            <div className='mt-2' style={{ color }}> رنگ مورد نظر خود را انتخاب کنید </div>
                        </div>

                        <input
                            type="text"
                            placeholder='یک نام وارد کنید'
                            onChange={handleColumnTextChange}
                            className='outline-none'
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    addColumn();
                                }
                            }} />
                        <span onClick={addColumn} className="material-symbols-rounded">
                            add
                        </span>
                    </div>
                </>)
            }
        </div>

    );
};

export default ColumnShowLayout
