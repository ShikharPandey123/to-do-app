import { useState } from "react";

export function CreateTodo({ onCreate }) {
    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    return <div>
        <input id="title" style={{
            padding:10,
            margin:10,
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input><br/>
        <input id="desc" style={{
            padding:10,
            margin:10,
        }} onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }}type="text" placeholder="description"></input><br/>
        <button style={{
            padding:10,
            margin:10,
        }} onClick={()=>{
            fetch("http://localhost:3000/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    description,
                    completed: false
                })
            }).then(async function(res){
                const json=await res.json();
                alert("Todo added successfully");
            })
        }}>Add a todo</button>
    </div>
}