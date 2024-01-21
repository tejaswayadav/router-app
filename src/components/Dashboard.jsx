import { RecoilRoot, useRecoilValueLoadable } from "recoil"
import { newsAtomFamily } from "../store/atoms/news"

export default function Dashboard() {
    return <RecoilRoot>
        <News id={1} />
        <News id={2} />
        <News id={2} />
        <News id={3} />
        <News id={3} />
    </RecoilRoot>
}

function News({ id }) {
    const currentNews = useRecoilValueLoadable(newsAtomFamily(id));
    if (currentNews.state == 'loading') {
        return <div>loading....</div>
    } else if (currentNews.state == 'hasValue') {
        return (
            <div>
                <h3>{currentNews.contents.title}</h3>
                <h5>{currentNews.contents.description}</h5>
            </div>
        )
    }
}