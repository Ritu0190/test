import { BsXLg } from "react-icons/bs";
import React, { useState } from 'react'


const DataEdit = ({ item, onSubmit, onEditFormCloseHandle }) => {
    const [title, setTitle] = useState(item.title)
    const [date, setDate] = useState(item.date)
    const [desc, setDesc] = useState(item.desc)
    const [option, setOption] = useState(item.cat)
    const [fav, setFav] = useState(item.fav)
    const [postStatus, setPostStatus] = useState(item.postStatus)

    console.log("Tags", date)
    console.log("Title", title)
    console.log("Fav", fav)
    console.log("PostStatus", postStatus)


    const checkHandler = (e) => {
       const currentVal = e.target.value; 
       setFav(currentVal)
        if(e.target.checked) {
            setFav(true)
        }else {
            setFav(false)
        }
    }

    const postStatusHandler = (e) => {
        const currentVal1 = e.target.value; 
        setPostStatus(currentVal1)
        if(e.target.checked) {
            setPostStatus(true)
        }else {
            setPostStatus(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(item.id, title, date, desc, option, fav, postStatus)
    }
    return (
        <div className="p-6 fixed top-0 right-0 left-0 bottom-0 m-auto w-full h-full   rounded-[8px] bg-slate-600/[.2]  border shadow-lg text-center z-[9999]">
            <div className="relative bg-slate-200 max-w-lg w-full rounded-lg p-3 sm:p-5 flex flex-col justify-start dark:bg-slate-900 m-auto">
                <button className='close absolute right-3 sm:right-4' onClick={onEditFormCloseHandle}><BsXLg/></button>
                <h2 className='font-medium mb-5 text-lg md:text-2xl text-left'>Edit Task</h2>
                <form className='mb-4' onSubmit={handleSubmit}>
                    <div>
                        <label className='text-left block mb-2'>Title</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="bg-slate-100 border-2 block h-12 w-full rounded-[8px] hover:border-violet-500 focus:border-violet-500 p-2 mb-4"/>
                    </div>
                    <div>
                        <label  className='text-left block mb-2'>Date</label>
                        <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className="bg-slate-100 border-2 block h-12 w-full rounded-[8px] hover:border-violet-500 focus:border-violet-500 p-2 mb-4"/>
                    </div>
                    <div>
                        <label  className='text-left block mb-2'>Description</label>
                        <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" className="bg-slate-100 border-2 block h-12 w-full rounded-[8px] hover:border-violet-500 focus:border-violet-500 p-2 mb-4"/>
                    </div>
                    <div>
                        <label  className='text-left block mb-2'>Selection</label>
                        <select onChange={(e) => setOption(e.target.value)} className="bg-slate-100 border-2 block h-12 w-full rounded-[8px] hover:border-violet-500 focus:border-violet-500 p-2 mb-4">
                            <option value="">Select option</option>
                            <option value="main">Main</option>
                            <option value="aaa">AAA</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <div className="flex items-center mb-4">
                            <input  id="checked-checkbox" type="checkbox"  checked={fav} value={fav} onChange={checkHandler}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mark as Important</label>
                        </div>
                        <div className="flex items-center">
                            <input  id="checked-checkbox" type="checkbox" checked={postStatus} value={postStatus} onChange={postStatusHandler}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mark as Completed</label>
                        </div>
                    </div>

                    <div><button type='submit' className='bg-blue-500 text-white p-2 px-6 rounded border border-blue-500 mt-5'>Edit Task</button></div>
                </form>
            </div>
        </div>
    )
}

export default DataEdit
