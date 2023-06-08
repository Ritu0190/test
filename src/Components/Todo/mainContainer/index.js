import React, { useState, useRef, useEffect } from 'react'
import Data from '../todoData'
import FilterAction from './childComp/FilterAction';
import TodoCard from './childComp/TodoCard';
import TodoForm from './childComp/TodoForm';
import TopSec from './childComp/TopSec';
import Sidebar from '../Sidebar/Sidebar';


const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

const setLocalStorage = (Data) => {
    localStorage.setItem('list', JSON.stringify(Data));
};

console.log(defaultList);

const TodoMIndex = () => {
    const [item, setItem] = useState(Data);
    const [filterValue, setfilterValue] = useState("");
    const [listView, setListView] = useState(false);
    const [count, setCount] = useState(0);
    const [activeId, setActiveId] = useState(false);
    

    // Filtring Data on Category 
    const filterItem1 = ( e) => {
        console.log(e.target.value)
        if(e.target.value === '') {
            setItem(Data);
        }
        const newItem = Data.filter((newVal) => {
        return newVal.category.toLowerCase() === e.target.value.toLowerCase();
        });
        setItem(newItem);
        setLocalStorage(newItem)
    };


    //Filtering Data on Nav select
    const handleTaskChange = (e) => {
        if( e.target.getAttribute("data-value") === "") {
            setItem(Data)
        return
        }

        const newItem = Data.filter((newVal) => {
            return newVal.category.toLowerCase() === e.target.getAttribute("data-value").toLowerCase();
        });
        setItem(newItem);
        setLocalStorage(newItem)

        setActiveId(e.target.getAttribute("data-value"));
        // console.log("dasdasd", activeId);

    }


    //Adding Task on Form Submission
    const addTask = (userInput, userDesc, useDate) => {
        let copy = [...item];
        copy = [{ id: item.length + 1, title: userInput, date: useDate, desc: userDesc, complete: false }, ...copy];
        setItem(copy);
        setCount(count => count + 1);
        setLocalStorage(copy);
    };

    const formRef = useRef(null);
    //On Click Scrolling to From
    const handleClickEditData  = () => {
        formRef.current?.scrollIntoView({behavior: 'smooth'});
    };

 

    //Remove Task
    const removeItem = (id) => {
        console.log(id)
        const newItems = item.filter((item) => item.id !== id)
        setItem(newItems)
        setLocalStorage(newItems)
    }


    const listViewhandleClick = () => {
        setListView(true)
        document.getElementById('list').classList.add('active')
        document.getElementById('grid').classList.remove('active')
    }

    const gridViewhandleClick = () => {
        setListView(false)
        document.getElementById('list').classList.remove('active')
        document.getElementById('grid').classList.add('active')
    }

    // function getInitialTodos() {
    //     // getting stored items
    //     const temp = localStorage.getItem('Data');
    //     const savedTodos = JSON.parse(temp);
    //     return savedTodos || [];
    //   }
    
    //   useEffect(() => {
    //     // storing todos items
    //     const temp = JSON.stringify(Data);
    //     localStorage.setItem('Data', temp);
    //   }, [Data]);
  
  return (
    <>
    
        <div className='bg-slate-100 h-screen w-60 w-2/12 fixed dark:bg-slate-800 z-20 left-0 block'>
            <Sidebar handleTaskChange={handleTaskChange} activeId={activeId}/>
        </div>
        <div className=' pt-5 pb-8  px-3 pr-6  w-10/12 ml-auto mr-0 min-h-screen'>
    
            <TopSec count={count} filterValue={filterValue} setfilterValue={setfilterValue} />
            <TodoForm  addTask={addTask} formRef={formRef}/>
            <FilterAction
                filterItem1={filterItem1}
                setItem={setItem}
                listViewhandleClick={listViewhandleClick} gridViewhandleClick={gridViewhandleClick}

            />
    
            <TodoCard    handleClickEditData={handleClickEditData} 
                innerCard={listView ? 'bg-slate-100 rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent flex-row sm:h-32' : 'bg-slate-100 rounded-lg p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:bg-slate-800 dark:hover:shadow-transparent flex-col h-52 sm:h-64'}
                viewclass={listView ? 'tasksList mt-4 grid gap-2 sm:gap-4 xl:gap-6 grid-cols-1' : 'todo_card_wrap  mt-4 grid grid-cols-3 gap-4 items-end'}
                leftCard={listView ? 'flex flex-col flex-1 mr-6' : 'flex flex-col flex-1'}
                rightCard={listView ? 'flex border-dashed border-slate-200 dark:border-slate-700/[.3] items-center' : 'flex border-dashed border-slate-200 dark:border-slate-700/[.3] border-t-2 w-full pt-4 mt-4'}
                descClass={listView ? 'desc mb-2 text-slate-500': 'desc mb-2 text-slate-500 min-h-[80px]'}
                data={item.filter(item =>item.title.toLowerCase().includes(filterValue.toLowerCase())+ item.date.toLowerCase().includes(filterValue.toLowerCase()))} removeHandler={removeItem}
            />
      </div>
    </>
  )
}

export default TodoMIndex