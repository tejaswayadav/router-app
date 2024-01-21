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
    return <div>
        count: {count}
    </div>
}

function Buttons() {
    const setCount = useSetRecoilState(countAtom);
    return (
        < div >
            <button onClick={() => {
                setCount(count => count + 1)
            }}>Increase</button>
            <button onClick={() => {
                setCount(count => count - 1)
            }}>Decrease</button>
        </div >
    )
}

function CheckEven() {
    const value = useRecoilValue(evenSelector);
    if (value) {
        return <div>
            It is even
        </div>
    }
}