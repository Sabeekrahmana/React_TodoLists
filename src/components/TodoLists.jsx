import { useState } from 'react';

import AddTask from "./AddTask";
import UpdateForm from "./UpdateForm";
import ToDo from "./ToDo";

const TodoLists = () => {

    //TODO LIST STATE--->
    const [todo, setTodo] = useState([]);

    //TEMP STATE--->
    const [newTask, setNewTask] = useState('');
    const [updateData, setUpdateData] = useState('');

    //ADD TASK
    const addTask = () => {
        if (newTask) {
            let num = todo.length + 1;
            let newEntry = { id: num, title: newTask, status: false }
            setTodo([...todo, newEntry])
            setNewTask('')
        }
    }

    //DELETE TASK
    const deleteTask = (id) => {
        let newTasks = todo.filter(task => task.id !== id);
        setTodo(newTasks);
    }

    //MARK US DONE TASK
    const markDone = (id) => {
        let newTask = todo.map(task => {
            if (task.id === id) {
                return ({ ...task, status: !task.status })
            }
            return task;
        })
        setTodo(newTask);
    }

    //CANCEL UPDATE
    const cancelUpdate = () => {
        setUpdateData('');
    }

    //CHANGE TASK FOR UPDATE
    const changeTask = (e) => {
        let newEntry = {
            id: updateData.id,
            title: e.target.value,
            status: updateData.status ? true : false
        }
        setUpdateData(newEntry)
    }

    //UPDATE TASK
    const updateTask = () => {
        let filterRecords = [...todo].filter(task => task.id !== updateData.id);
        let updatedObject = [...filterRecords, updateData]
        setTodo(updatedObject);
        setUpdateData('');
    }

    return (
        <div className='container'>
            <h2 className="head">TODO LIST APP </h2>

            {updateData && updateData ? (
                <UpdateForm
                    updateData={updateData}
                    changeTask={changeTask}
                    updateTask={updateTask}
                    cancelUpdate={cancelUpdate}
                />
            ) : (
                <AddTask
                    newTask={newTask}
                    setNewTask={setNewTask}
                    addTask={addTask}
                />
            )}

            {todo && todo.length ? '' : 'No Tasks....'}

            <ToDo
                todo={todo}
                markDone={markDone}
                setUpdateData={setUpdateData}
                deleteTask={deleteTask}
            />
        </div>
    )
}

export default TodoLists;