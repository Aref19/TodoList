import { useState } from "react";

import { v4 as uuidv4 } from 'uuid';

const AddTodo = ({ add, intialValue }) => {

    const [title, setTitle] = useState();

    const handleInput = () => {
        add((intialValue) => {
            const newTodo = [...intialValue, {
                id: uuidv4(),
                title: title,
                descrption: "todo",
                iscompleted: false
            },]
            localStorage.setItem("todo", JSON.stringify(newTodo))
            return newTodo
        })


    }

    return (
        <>
            <div style={{ display: "grid", gridTemplateColumns: "10%  80%", gridTemplateRows: "100%", gap: "0 10%" }}>
                <input style={{ gridColumn: "2/3", gridRow: "1/2", border: "1px solid" }} type="text" value={title} onChange={(e) => {
                    setTitle(e.target.value)
                }} />
                <button style={{ gridColumn: "1/2", gridRow: "1/2", border: "1px solid" }} onClick={handleInput}>Add</button>
            </div>
        </>
    )


}

export default AddTodo;