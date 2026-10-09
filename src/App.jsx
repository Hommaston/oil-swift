import Navbar from './components/Navbar/Navbar'
import Home  from './components/Hero/Hero'
import { Routes, Route, useNavigate } from 'react-router-dom'
import SignUp from './components/auth/SignUp/SignUp'
import Login from './components/auth/Login/Login'
import './App.css'

function App() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/');
  }

  return (
    <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onSubmit={handleLogin} />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
    </div>
  )
}

export default App
