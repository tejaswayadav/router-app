import { useNavigate } from "react-router-dom";

export default function TopBar() {
    let navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/')}>Landing</button>
            <button onClick={() => navigate('/dashboard')}> Dashboard</button>
            <button onClick={() => navigate('/counter')}> Counter</button>
        </div >
    )
}