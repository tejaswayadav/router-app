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
            <div className="mt-8 ml-16 grid">
                <span className="pt-4 text-2xl font-bold text-indigo-500">{currentNews.contents.title}</span>
                <span className="text-md text-gray-500">{currentNews.contents.description}</span>
            </div>
        )
    }
}