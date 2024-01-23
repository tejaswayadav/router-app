import { useNavigate } from "react-router-dom";

export default function TopBar() {
    let navigate = useNavigate();
    return (
        <div className="text-gray-500 grid grid-flow-col justify-between">
            <button className="ml-2 px-1" onClick={() => navigate('/')}>Landing</button>
            <button className="ml-2 px-1" onClick={() => navigate('/dashboard')}> Dashboard</button>
            <button className="ml-2 px-1" onClick={() => navigate('/counter')}> Counter</button>
            <button className="ml-2 px-1" onClick={() => navigate('/todo-manager')}>Todo</button>
        </div >
    )
}