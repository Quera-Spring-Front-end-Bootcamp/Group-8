import React, { useEffect, useState,useRef } from 'react';
import Column from './../ColumnHeader/ColumnHeader';
import { CirclePicker } from 'react-color';

function ColumnShowLayout() {
    const [isClicked, setIsClicked] = useState(false);
    const [isClicked1, setIsClicked1] = useState(true);
    const [columns, setColumns] = useState([]);
    const [borderColor, setBorderColor] = useState('#000000');
    const [columnText, setColumnText] = useState('');
    const [color, setColor] = useState(null);
    const [showPicker, setShowPicker] = useState(true);
    const parentRef = useRef(null);
    
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


    const handleChangeColor = (newColor) => {

        setColor(newColor.hex);

    };
    const handleBorderColorChange = () => {
        setBorderColor(color);
        setShowPicker(false)
    };

    const handleColumnTextChange = (event) => {
        setColumnText(event.target.value);
    };

    const changeStatus = () => {
        setShowPicker(true)
        setIsClicked(true)
        setIsClicked1(false)
        setColor("");
    }

    const addColumn = () => {
        if (columnText.trim() !== ""){
            setShowPicker(false)
        setColumns((prevColumns) => [
            ...prevColumns,
            { id: Date.now(), borderColor: color, columnText },
        ]);
        setIsClicked(false)
        setIsClicked1(true)
        }
        
    };

    const handleDelete = (id) => {
        const newColumns = columns.filter((column) => column.id !== id);
        setColumns(newColumns)
    }

    const handleInputClick = () => {
        if (!color) {
          setShowPicker(true);
        }
      };

    function handleClickEdit(id, newcolumnEditText) {
        let updatedColumn = columns.map((column) => {
            if (column.id === id) {
                return { ...column, columnText: newcolumnEditText };
            }
            return column
        })

        setColumns(updatedColumn);
    }

    return (
        <div ref={parentRef} className='flex flex-row gap-8'>

            <div className="flex">
                {columns.map(({ id, borderColor, columnText }) => (
                    <Column
                        id={id}
                        key={id}
                        borderColor={borderColor}
                        columnText={columnText}
                        handleDelete={handleDelete}
                        handleClickEdit={handleClickEdit}
                    />
                ))}
            </div>

            {isClicked1 &&
                (
                    <div onClick={changeStatus} className={`flex gap-8 shadow-md flex-row justify-between items-center py-2 px-3 mb-4 w-[250px] h-[41px] bg-white text-[#1E1E1E]-500 border-t rounded cursor-pointer relative`}>

                        <div>
                            ساختن ستون جدید

                        </div>
                        <span className="material-symbols-outlined">
                            add
                        </span>
                    </div>
                )
            }
            {isClicked &&
                (<>
                    <div className='flex relative shadow-md flex-row justify-between items-center gap-1 py-2 px-2 mb-4 w-[250px] h-[41px] bg-white  border-t rounded cursor-pointer'>

                        {/* <input type="color"  id={Math.random()} onChange={handleBorderColorChange} className='w-4 text-xs' /> */}

                        <div onClick={handleBorderColorChange} className='absolute top-[45px] z-10 bg-white'>

                            {showPicker && (<CirclePicker color={color} onChange={handleChangeColor}  />)}
                            <div className='mt-2' style={{ color }}> رنگ مورد نظر خود را انتخاب کنید </div>
                        </div>

                        <input onClick={handleInputClick} 
                                type="text" placeholder='یک نام وارد کنید' 
                                id={Math.random()} 
                                onChange={handleColumnTextChange} 
                                className='outline-none'
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                      addColumn();
                                    }
                                  }} />
                        <span onClick={addColumn} className="material-symbols-outlined">
                            add
                        </span>
                    </div>
                </>)
            }
        </div>

    );
};

export default ColumnShowLayout