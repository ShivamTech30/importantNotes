import React, { useState } from 'react'
const headers = ['1', '2', '3', '4', '5', '6', '7'];
const data = [
    { day: 'Mon', values: ['day 1-1', 'day 1-2', 'day 1-3', 'day 1-4', 'day 1-5', 'day 1-6'] },
    { day: 'Tue', values: ['day 2-1', 'day 2-2', 'day 2-3', 'day 2-4', 'day 2-5', 'day 2-6'] },
    { day: 'Wed', values: ['day 3-1', 'day 3-2', 'day 3-3', 'day 3-4', 'day 3-5', 'day 3-6'] },
    { day: 'Thu', values: ['day 4-1', 'day 4-2', 'day 4-3', 'day 4-4', 'day 4-5', 'day 4-6'] },
    { day: 'Fri', values: ['day 5-1', 'day 5-2', 'day 5-3', 'day 5-4', 'day 5-5', 'day 5-6'] },
    { day: 'Sat', values: ['day 6-1', 'day 6-2', 'day 6-3', 'day 6-4', 'day 6-5', 'day 6-6'] },
];

const TimeOffModal = () => {

    const [tableData, setTableData] = React.useState(data)


    const tdFun = (e, data, value) => { 

        // setTableData([...tableData,value]) 

    } 

    return (
        <div className=' border fixed inset-0  bg-black bg-opacity-25 flex justify-center items-center'>
            <div className='  flex flex-col'>
                <div className=' w-auto bg-white rounded '>
                    <div className='border-solid  border-b-2 w-full rounded flex flex-row justify-between bg-gray-100 px-2'>
                        <h2 className='font-medium  text-gray-900'>{"Modal Name"}</h2>
                        <button className=' text-xl  text-gray-900 '

                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>
                        </button>
                    </div>
                    <div className=' w-auto bg-white  rounded flex flex-col md:flex-row p-4'>

                        <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-full'>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th> {/* Empty cell for the upper-left corner */}
                                        {headers.map((header, index) => (
                                            <th key={index}>{header} </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData?.map((rowData, rowIndex) => (
                                        <tr key={rowIndex}>
                                            <th className='p-2 border'>{rowData.day}</th> {/* Left header cell */}
                                            {rowData.values.map((value, columnIndex) => (
                                                <td key={columnIndex} className='p-2 border' onClick={(e) => tdFun(e, rowData, value)}>{value}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default TimeOffModal;
