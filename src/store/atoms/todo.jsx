import { atom } from "recoil";

export const todoAtom = atom({
    key: 'todoAtom',
    default: [{
        id: 0,
        title: 'Title',
        description: 'This is a sample description'
    }]
})

export const inputFilterAtom = atom({
    key: 'inputFilterAtom',
    default: ''
})