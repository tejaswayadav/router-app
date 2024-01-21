import { atom, selector } from "recoil";
import axios from 'axios'

export const tabsAtom = atom({
    key: 'tabsAtom',
    default: selector({
        key: 'tabsAtomSelector',
        get: async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data;
        }
    })
});