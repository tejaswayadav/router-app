import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "../store/atoms/count";
import { evenSelector } from "../store/selectors/evenSelector";

export default function Counter() {
    return <RecoilRoot>
        <Count />
    </RecoilRoot>
}

function Count() {
    return (
        <div>
            <CountRenderer />
            <Buttons />
            <CheckEven />
        </div>
    )
}

function CountRenderer() {
    const count = useRecoilValue(countAtom);
    return <div className="mt-10 flex justify-center">
        count: {count}
    </div>
}

function Buttons() {
    const setCount = useSetRecoilState(countAtom);
    return (
        <div className="mt-10q grid grid-flow-col">
            <div className="pr-10 flex justify-end">
                <button className="px-8 py-2 rounded-md text-white bg-indigo-500" onClick={() => {
                    setCount(count => count + 1)
                }}>Increase</button></div>
            <div className="pl-10 flex justify-start">
                <button className="px-8 py-2 rounded-md text-white bg-indigo-500" onClick={() => {
                    setCount(count => count - 1)
                }}>Decrease</button></div>
        </div >
    )
}

function CheckEven() {
    const value = useRecoilValue(evenSelector);
    return <div className="mt-10 flex justify-center">
        {value ? "Its is even" : ""}
    </div>

}