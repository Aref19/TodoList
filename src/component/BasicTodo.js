import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import DeleteTodo from "./DeleteTodo";

const BasicTodo = ({ todo }) => {
    const { todos, addTodo } = useContext(TodoContext);
    const [showDealog, setShowDealog] = useState(false);

    const completed = () => {
        addTodo([...todos.map((item) => {
            if (item.id == todo.id) {
                item.iscompleted = !item.iscompleted
            }
            return item;
        })])

    }

    return (
        <>
            <DeleteTodo show={showDealog} setShowDealog={setShowDealog} todd={todo} />
            <div style={{ border: "1px solid", margin: "10px", display: "flex", direction: "rtl", backgroundColor: "blue", height: "80px", alignItems: "center" }}>
                <div style={{ display: "flex", justifyContent: "start", width: "70%", flexDirection: "column" }}>
                    <h1 style={{ color: "white" }}>{todo.title}</h1>
                    <h1 style={{ color: "white" }}>{todo.descrption}</h1>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", width: "100px", width: "30%" }}>
                    <button style={{ color: "white", border: "1px black solid", width: "50px", height: "50px" }}>Edit</button>
                    <button style={{ color: "white", border: "1px  black solid", width: "50px", height: "50px" }} onClick={completed}>fish</button>
                    <button style={{ color: "white", border: "1px black solid", width: "50px", height: "50px" }} onClick={() => {
                        setShowDealog(true)
                    }} >delete</button>
                </div>
            </div>
        </>
    )
}

export default BasicTodo;