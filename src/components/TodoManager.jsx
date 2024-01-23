import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { inputFilterAtom, todoAtom } from "../store/atoms/todo"
import { useState } from "react";
import { todoFilter } from "../store/selectors/todoFilter";
import { useRef } from "react";

export default function TodoManager() {
    return (
        <div>
            <RecoilRoot>
                <TodoInput />
                <PopulateTodos />
            </RecoilRoot>
        </div>

    )
}

function PopulateTodos() {
    const filteredTodo = useRecoilValue(todoFilter);
    return (
        <div>
            {filteredTodo.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
        </div>
    )
}

function Todo({ title, description }) {
    return (
        <div className="my-4 mx-64 px-2 py-4 border-2 border-gray-500 rounded-md shadow-md grid">
            <span className="text-2xl font-bold text-indigo-500">{title}</span><br />
            <span className="text-md text-gray-500">{description}</span>
        </div>
    )
}

function TodoInput() {
    const setTodos = useSetRecoilState(todoAtom);
    const setInput = useSetRecoilState(inputFilterAtom);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const counter = useRef(1);

    return <div className="mt-8 grid">
        <div className="flex justify-center">
            <input className="px-4 w-80 rounded-sm" type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} /></div>
        <div className="mt-2 flex justify-center">
            <textarea className="rounded-sm" type="text" placeholder="Add a small description for your TODO" rows="4" cols="36" onChange={(e) => setDescription(e.target.value)} /></div>
        <div className="mt-2 flex justify-center">
            <button className="px-8 py-2 rounded-md bg-indigo-500" onClick={() => {
                setTodos(todos => [...todos, {
                    id: counter.current++,
                    title: title,
                    description: description
                }])
            }}>ADD</button></div>
        <div className="mt-2 flex justify-center">
            <input className="rounded-md" type="text" placeholder="filter" onChange={(e) => setInput(e.target.value)} />
        </div>
    </div>
}