import { selector } from "recoil";
import { inputFilterAtom, todoAtom } from "../atoms/todo";

export const todoFilter = selector({
    key: 'todoFilter',
    get: ({ get }) => {
        const todos = get(todoAtom);
        const input = get(inputFilterAtom);
        const newVal = todos.filter(function (todo) {
            return todo.title.includes(input) || todo.description.includes(input);
        })
        return newVal;
    }
});