import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { todoAtom } from "../store/atoms/todo"
import { useState } from "react";
// import { todoFilter } from "../store/selectors/todoFilter";

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
    const todos = useRecoilValue(todoAtom)
    return (
        <div>
            {todos.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
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
    // const filteredTodos = useRecoilValue(todoFilter);
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
    </div>
}