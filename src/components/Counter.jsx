import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "../store/atoms/count";

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
        </div>
    )
}

function CountRenderer() {
    const count = useRecoilValue(countAtom);
    return <div>
        count: {count}
    </div>
}

function Buttons() {
    const [count, setCount] = useRecoilState(countAtom);
    return (
        < div >
            <button onClick={() => {
                setCount(count + 1)
            }}>Increase</button>
            <button onClick={() => {
                setCount(count - 1)
            }}>Decrease</button>
        </div >
    )
}