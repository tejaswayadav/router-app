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
        <div>
            <button className="ml-2 px-4 rounded-md bg-indigo-200"> My Network {tabData.network}</button>
            <button className="ml-2 px-4 rounded-md bg-indigo-200">Jobs {tabData.jobs}</button>
            <button className="ml-2 px-4 rounded-md bg-indigo-200">Messaging {tabData.messaging}</button>
            <button className="ml-2 px-4 rounded-md bg-indigo-200">Notifications {tabData.notifications}</button>
            <button className="ml-2 px-4 rounded-md bg-indigo-200">Me</button>
        </div>
    )
}