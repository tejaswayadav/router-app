import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

export const newsAtomFamily = atomFamily({
    key: 'newsAtomFamily',
    default: selectorFamily({
        key: 'newsSelectorFamily',
        get: (id) => {
            return async () => {
                await new Promise(r => setTimeout(r, 5000));
                const response = await axios.get("https://sum-server.100xdevs.com/todo?id=" + id);
                return response.data.todo;
            }
        }
    })
})