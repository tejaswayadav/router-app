import { selector } from "recoil";
import { todoAtom } from "../atoms/todo";

// export const todoFilter = selector({
//     key: 'todoFilter',
//     get: (get) => {
//         const todos = get(todoAtom);
//         return todos.filter((todo) => {
//             return todo.title.includes(input) || todo.description.includes(input);
//         })
//     }
// });