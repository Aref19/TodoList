import styled from "styled-components";
import BasicTodo from "./BasicTodo";
import AddTodo from "./AddTodo";

import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";

import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import DeleteTodo from "./DeleteTodo";


const ContainerTod = () => {
    const { todos, addTodo } = useContext(TodoContext);
    const [todoArt, setTodoArt] = useState("all")
    let showTodo = [...todos]

    if (todoArt == "all") {
        showTodo = [...todos]
    } else if (todoArt == "fertig") {
        showTodo = todos.filter((item) => {
            return item.iscompleted
        })

    } else if (todoArt == "noch") {
        showTodo = todos.filter((item) => {
            return !item.iscompleted
        })
    }

    const Todos = showTodo.map((item) => {
        return <BasicTodo key={item.id} todo={item} />
    })

    useEffect(() => {
        const todosStorge = JSON.parse(localStorage.getItem("todo"));
        addTodo(todosStorge)
    }, [])


    return (
        <>

            <div class="container  mx-auto    " style={{ display: "flex", flexDirection: "column" }} >

                <h1 className="text-2xl">My Taskes</h1>
                <hr className="bg-black h-0.5 "></hr>
                <div style={{ display: "flex", justifyContent: "center" }}>

                    <div style={{ display: "flex", justifyContent: "space-around", width: "400px", zIndex: "0" }}>
                        <button style={{ height: "60px", width: "60px", border: "1px solid", padding: "1px", marginTop: "2px" }} onClick={() => {
                            setTodoArt("all")
                        }}>All</button>
                        <button style={{ height: "60px", width: "60px", border: "1px solid", padding: "1px", marginTop: "2px" }}
                            onClick={() => {
                                setTodoArt("fertig")
                            }}
                        >fertig</button>
                        <button style={{ height: "60px", width: "60px", border: "1px solid", padding: "1px", marginTop: "2px", }}
                            onClick={() => {
                                setTodoArt("noch")
                            }}

                        >noch</button>
                    </div>

                </div>
                {Todos}

                <AddTodo add={addTodo} intialValue={todos} />
            </div>
        </>
    )
}




export default ContainerTod;