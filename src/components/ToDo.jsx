import React from 'react';
import { FaEdit, FaTrash, FaCheckCircle } from "react-icons/fa";


const ToDo = ({ todo, markDone, setUpdateData, deleteTask }) => {
    return (
        <>
            {todo && todo
                .sort((a, b) => a.id > b.id ? 1 : -1)
                .map((task, index) => {
                    return (
                        <React.Fragment key={task.id}>
                            <div className='col taskBg'>
                                <div className={task.status ? 'done' : ''}>
                                    <span className='taskNumber'>{index + 1}</span>
                                    <span className='taskText'>{task.title}</span>
                                </div>
                                <div className="iconsWrap">
                                    <span title="completed"
                                        onClick={(e) => markDone(task.id)}><FaCheckCircle /></span>

                                    {task.status ? null : (
                                        <span title="edit"
                                            onClick={() => setUpdateData({
                                                id: task.id,
                                                title: task.title,
                                                status: task.status ? true : false
                                            })}><FaEdit /></span>
                                    )}

                                    <span title="delete"
                                        onClick={() => deleteTask(task.id)}><FaTrash /></span>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </>
    )
}

export default ToDo;