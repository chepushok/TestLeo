import React from 'react'
import Main from './components/Main'
import BlogNewN from './components/BlogNewN'
import BlogNewb from './components/BlogNewb'
import BlogNewA from './components/BlogNewA'
import Advanced from './components/Advanced'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  return (    
    
    
    <Router>

      <Routes>

        <Route path='/' element={<Main/>}/> 
        <Route path='/Newbies' element={<BlogNewN/>}/> 
        <Route path='/Beginners' element={<BlogNewb/>}/>
        <Route path='/Advanced' element={<BlogNewA/>}/>
      </Routes>

    </Router>
    
  );
}

export default App;
