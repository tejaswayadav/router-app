import { atom } from "recoil";

export const todoAtom = atom({
    key: 'todoAtom',
    default: []
})

export const inputFilterAtom = atom({
    key: 'inputFilterAtom',
    default: ''
})