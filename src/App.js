import React from 'react'
import Main from './components/Main'
import Blog from './components/Blog'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (    
    
    <Router>


      <Routes>

        <Route path='/' element={<Main/>}/>  
        <Route path='/beginners' element={<Blog/>}/>

      </Routes>

    </Router>
    
  );
}

export default App;
