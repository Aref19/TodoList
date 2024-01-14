import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";



const DeleteTodo = ({ show, setShowDealog, todd }) => {
    const { todos, addTodo } = useContext(TodoContext);
    if (!show) return null;

    return (
        <>
            <div style={{
                display: "flex", flexDirection: "column", width: "200px", height: "200px", border: "1px solid", justifyContent: "center", backgroundColor: "gray",
                zIndex: "1", position: "absolute", margin: "0 auto",
                alignItems: "center"
            }}>
                <h1>Sure?</h1>
                <div style={{ display: "flex", width: "200px", justifyContent: "space-around" }}>
                    <button onClick={() => {
                        const newTodos = todos.filter((item) => {
                            return item.id!=todd.id
                        })

                        addTodo(newTodos)
                        setShowDealog(!show)
                        localStorage.setItem("todo", JSON.stringify(newTodos))
                    }}>confirm</button>
                    <button onClick={() => {
                        setShowDealog(!show)
                    }}>cancel</button>
                </div>
            </div>
        </>
    )
}

export default DeleteTodo;