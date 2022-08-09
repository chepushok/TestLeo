import React from 'react'
import Main from './components/Main'
import BlogNewb from './components/BlogNewb'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (    
    
    <Router>


      <Routes>

        <Route path='/' element={<Main/>}/>  
        <Route path='/beginners' element={<BlogNewb></BlogNewb>}/>
      </Routes>

    </Router>
    
  );
}

export default App;
