import React, {useState} from 'react'
import DataEdit from './DataEdit';
import { BsFillTrash3Fill, BsFillStarFill, BsStar,  BsThreeDotsVertical, BsCalendar3} from "react-icons/bs";
import { Link } from 'react-router-dom';

const DataItem = ({item, onDelete, onEdit, markHandle}) => {
    const [isEdit, setIsEdit] = useState(false)
    // const [taskStatus, setTaskStatus] = useState(true)

    const handleSubmit = (id, newTitle, newDate, newDesc, newOption,  newFav, newPostStatus) => {
        setIsEdit(false);
        onEdit(id, newTitle, newDate, newDesc, newOption, newFav, newPostStatus);
    };

    // const markHandle = (e) => {
    //     e.stopPropagation();
    //     console.log("Gettinng Value :", e.target.getAttribute('data-value'))
    //     setTaskStatus(!taskStatus)
    // }

    const onEditFormCloseHandle = () => {
        setIsEdit(false);
    }

  return (
    <div>
                <Link to="/" className='ml-auto mr-4 w-min whitespace-nowrap overflow-hidden max-w-[10rem] text-center text-ellipsis bg-rose-200 text-rose-600 px-4 py-1 rounded-t-md transition dark:bg-slate-700 dark:text-slate-200 block hover:bg-rose-300 dark:hover:bg-rose-500 capitalize'>{item.cat}</Link>

        <div className='border rounded-[8px] overflow-hidden shadow-lg' key={item.id}>
            <div className='img-wrap h-[200px]'>
                <img src={`https://picsum.photos/seed/${item.id}/200/300`} alt={item.title} title={item.title} className='w-full h-[200px] object-cover'/>
            </div>
            <div className='data-wrp  p-5'>
                <h3 className='font-semibold'>{item.title}</h3>
                <p className='my-4 text-sm'>{item.desc}</p>
                <p className='flex items-center'><span className='mr-3'><BsCalendar3/></span> <span>{item.date}</span></p>
                <div className='btn-wrap flex justify-between mt-3 items-center'>
                    <p  className='p-3 pl-0' >{!item.postStatus? <span className='bg-amber-200 text-amber-800 mr-4 order-0 rounded-full font-medium px-3 py-1 capitalize'>Uncompleted</span> : <span className='mr-4 order-0 rounded-full font-medium px-3 py-1 capitalize bg-emerald-200 text-emerald-800'>Completed</span>}</p> 
                    <div className='w-2/3 flex justify-end items-center'>
                        <button  onClick={markHandle} className='p-3 relative z-90' >
                            {!item.fav? <BsStar className='relative z-[-1]'/> : <BsFillStarFill className="z-[-1]" style={{color:'#f43f5e'}}/>}
                        </button> 
                        <button className='p-3'  onClick={() => onDelete(item.id)}><BsFillTrash3Fill/></button>
                        <button className='p-3'  onClick={() => setIsEdit(!isEdit)}><BsThreeDotsVertical/></button>
                    </div>
                </div>
            </div>
        </div>
        {isEdit && <DataEdit item={item} onSubmit={handleSubmit}  onEditFormCloseHandle={onEditFormCloseHandle}/>}
    </div>
  )
}

export default DataItem