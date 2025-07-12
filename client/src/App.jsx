import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signin from './pages/Signin'
import NotFound from './pages/NotFound'

function App() {

  

  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signin' element={<Signin />}/>
      </Routes>
    </Router> 
  )
}


export default App
