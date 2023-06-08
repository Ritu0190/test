import axios from "axios";
import React, {useState, useEffect} from 'react'
import DataList from './DataList'
import DataForm from "./DataForm";


const  baseUrl = 'http://localhost:3001/posts';
console.log("sadas", baseUrl)

const CURDIndex = () => {
    const [curdItem, setCURDItem] = useState(null);

    const getData = () => {
        axios.get(baseUrl).then((response) => {
            setCURDItem(response.data);
            console.log("dsadas", response.data)
        });
    }

    const deleteData = async (id) => {
        await axios.delete(`http://localhost:3001/posts/${id}`)
        const newItems = curdItem.filter((item) => item.id !== id)
        setCURDItem(newItems);
    }


    const editData = async (id, newTitle, newDate, newDesc, newOption, newFav, newPostStatus) => {
        const response = await axios.put(`http://localhost:3001/posts/${id}`, {
          title: newTitle,
          date: newDate,
          desc: newDesc,
          cat: newOption,
          fav: newFav,
          postStatus: newPostStatus
        })
    
        const updatedTodo = curdItem.map((item) => {
          if (item.id === id) {
            return { ...item, ...response.data }
          }
          return item
        })
        setCURDItem(updatedTodo)
      }

  


    useEffect(() => {
        getData();
    }, [])

    if (!curdItem) return null;



      //Adding Task on Form Submission
    // const addTask = (userInput, userTags) => {
    //     let copy = [...curdItem];
    //     copy = [{ id: curdItem.length + 1, title: userInput, tags: userTags, complete: false }, ...copy];
    //     setCURDItem(copy);
    // };


    const addTask = async (userInput, userDate, userDesc, userFav, userPostStatus, userOption) => {
        const response = await axios.post('http://localhost:3001/posts', {
            cat: userOption,
            title: userInput, 
            date: userDate,
            desc: userDesc,
            fav: userFav,
            postStatus: userPostStatus

        })
    
        const updatedTodos = [response.data, ...curdItem];
        setCURDItem(updatedTodos);
    }

    const markHandle = async (id) => {
      // const response = await axios.post(`http://localhost:3001/posts/${id}`)
      //   console.log("Updating Value",response.data)
       
    }
    

  return (
    <div>
        <DataForm  addTask={addTask} />
        <DataList data={curdItem} onDelete={deleteData} onEdit={editData} markHandle={markHandle}/>
    </div>
  )
}

export default CURDIndex