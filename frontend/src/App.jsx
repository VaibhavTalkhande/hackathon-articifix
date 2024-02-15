import { useEffect, useState } from 'react'
import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import axios from 'axios'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5000/api/example')
    .then(res =>{
      console.log(res.data.message)
      setMessage(res.data.message)
    }
    )
    .catch(err => console.error(err))
    axios.get('http://localhost:5000/')
    .then(res => console.log(res.data))
  }
  , [])

  return (
    <div>
      <h1>{message}</h1>
      <BrowserRouter>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;