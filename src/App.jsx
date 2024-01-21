import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from "./components/Landing"
import TopBar from './components/TopBar'
import { lazy } from 'react'
import { Suspense } from 'react'
import NotificationsTab from './components/NotificationsTab'

const TodoManager = lazy(() => import('./components/TodoManager'))
const Dashboard = lazy(() => import('./components/Dashboard'))
const Counter = lazy(() => import('./components/Counter'))

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <TopBar />
            <NotificationsTab />
          </div>
          <br />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/dashboard' element={<Suspense fallback={'loading....'}><Dashboard /></Suspense>} />
            <Route path='/counter' element={<Suspense fallback={'loading....'}><Counter /></Suspense>} />
            <Route path='/todo-manager' element={<Suspense fallback={'loading....'}><TodoManager /></Suspense>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
