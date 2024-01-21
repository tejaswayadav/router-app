import { RecoilRoot, useRecoilValue } from "recoil";
import { tabsAtom } from "../store/atoms/tabs";

export default function NotificationsTab() {
    return (
        <RecoilRoot>
            <TabRender />
        </RecoilRoot>
    )
}

function TabRender() {
    const tabData = useRecoilValue(tabsAtom);
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <button>My Network {tabData.network}</button>
            <button>Jobs {tabData.jobs}</button>
            <button>Messaging {tabData.messaging}</button>
            <button>Notifications {tabData.notifications}</button>
            <button>Me</button>
        </div>
    )
}