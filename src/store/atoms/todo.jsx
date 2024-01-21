import { atom } from "recoil";

export const todoAtom = atom({
    key: 'todoAtom',
    default: [
        {
            id: 0,
            title: 'TITLE',
            description: 'This is a sample description'
        }
    ]
})