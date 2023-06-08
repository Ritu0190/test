import React, {useState} from 'react'

const DataForm = ({ addTask, formRef}) => {
    // const [newTodo, setNewTodo] = useState('')
    const [isChecked, setIsChecked] = useState(false)
    const [postStatus, setPostStatus] = useState(false)
    const [dropOption, setDropOption] = useState('');

    const [values, setValues] = useState({
        title: "",
        date: "",
        desc: ""
    })

   
    const handleChange = (e) => {
            setValues({
                ...values, [e.target.name] : e.target.value,
            })
    }

    const checkHandler = (e) => {
        setIsChecked(!isChecked)
        if(e.target.checked) {
            setIsChecked(true)
        }else {
            setIsChecked(false)
        }
    }

    const postStatusHandler = (e) => {
        setPostStatus(!postStatus)
        if(e.target.checked) {
            setPostStatus(true)
        }else {
            setPostStatus(false)
        }
    }

    const onDropHandle = (e) => {
        const option = e.target.value;
        setDropOption(option);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(values.title, values.date, values.desc, isChecked, postStatus, dropOption);
        setValues({
            title: "",
            date: "",
            desc: ""
        })
        setValues('')
    }



  return (
    <>
    
        <form onSubmit={handleSubmit} ref={formRef} className="bg-white rounded-[10px] shadow-lg p-7 ">
            <div className="grid grid-cols-2 gap-6">
                <div className='form-group'>
                    <label className="block mb-2" htmlFor="title">Title</label>
                    <input  type="text" name="title" value={values.title} onChange={handleChange} placeholder="Enter Title..." className="bg-slate-100 border-2 block h-12 w-full rounded-[8px] hover:border-violet-500 focus:border-violet-500 p-2"/>
                </div>
                <div className='form-group'>
                    <label className="block mb-2" htmlFor="date">Date</label>
                    <input  type="date" name="date" value={values.date} onChange={handleChange} placeholder="Enter Tags..." className="bg-slate-100 border-2 block h-12 w-full rounded-[8px] hover:border-violet-500 focus:border-violet-500 p-2"/>
                </div>
                <div className='form-group'>
                    <label className="block mb-2" htmlFor="desc">Description</label>
                    <input  type="text" name="desc" value={values.desc} onChange={handleChange} placeholder="Enter Tags..." className="bg-slate-100 border-2 block h-12 w-full rounded-[8px] hover:border-violet-500 focus:border-violet-500 p-2"/>
                </div>
                <div className='form-group'>
                    <label className="block mb-2" htmlFor="selection">Selection</label>
                    {/* <input  type="text" name="tags" value={values.tags} onChange={handleChange} placeholder="Enter Tags..." className="bg-slate-100 border-2 block h-12 w-full rounded-[8px] hover:border-violet-500 focus:border-violet-500 p-2"/> */}
                    <select onChange={onDropHandle} name="selection" className="bg-slate-100 border-2 block h-12 w-full rounded-[8px] hover:border-violet-500 focus:border-violet-500 p-2">
                        <option value="">Select Category</option>
                        <option value="main">Main</option>
                        <option value="aaa">AAA</option>
                    </select>
                </div>
                <div className='form-group'>
                    <div className="flex items-center mb-3">
                        <input  id="checked-checkbox" type="checkbox" value={isChecked} onChange={checkHandler}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mark as Important</label>
                    </div>
                    <div className="flex items-center">
                        <input  id="checked-checkbox" type="checkbox" value={postStatus} onChange={postStatusHandler}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mark as Completed</label>
                    </div>
                </div>
                
            </div>
            <div className='form-group text-center mt-4 w-full'>
                    <button className='bg-violet-700 text-white rounded p-3 px-16'>Add a task</button>
                </div>
        </form>
    </>
  )
}

export default DataForm