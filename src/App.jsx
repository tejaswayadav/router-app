import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from "./components/Landing"
import TopBar from './components/TopBar'
import { lazy } from 'react'
import { Suspense } from 'react'
import NotificationsTab from './components/NotificationsTab'
import reactLogo from './assets/react.svg'

const TodoManager = lazy(() => import('./components/TodoManager'));
const Dashboard = lazy(() => import('./components/Dashboard'))
const Counter = lazy(() => import('./components/Counter'))

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div className='mt-4 grid grid-cols-12 grid-flow-col justify-between'>
            <div className="ml-2 flex justify-center col-span-1"><img src={reactLogo} alt='react' /></div>
            <div className='col-span-3'><TopBar /></div>
            <div className='pr-4 flex justify-end col-span-9'><NotificationsTab /></div>
          </div>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/dashboard' element={<Suspense fallback={'loading....'}><Dashboard /></Suspense>} />
            <Route path='/counter' element={<Suspense fallback={'loading....'}><Counter /></Suspense>} />
            <Route path='/todo-manager' element={<Suspense fallback={'loading....'}><TodoManager /></Suspense>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
