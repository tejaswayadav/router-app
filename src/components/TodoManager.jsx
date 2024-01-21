import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { inputFilterAtom, todoAtom } from "../store/atoms/todo"
import { useState } from "react";
import { todoFilter } from "../store/selectors/todoFilter";

let counter = 1;
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
        <div>
            <h3>{title}</h3>
            <h5>{description}</h5>
        </div>
    )
}

function TodoInput() {
    const setTodos = useSetRecoilState(todoAtom);
    const setInput = useSetRecoilState(inputFilterAtom);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return <div>
        <input type="text" placeholder="title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="description" onChange={(e) => setDescription(e.target.value)} />
        <button onClick={() => {
            setTodos(todos => [...todos, {
                id: counter++,
                title: title,
                description: description
            }])
        }}>ADD</button>
        <div>
            <input type="text" placeholder="filter" onChange={(e) => setInput(e.target.value)} />
        </div>
    </div>
}