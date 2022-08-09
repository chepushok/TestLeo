import React from 'react'
import Main from './components/Main'
import BlogNewN from './components/BlogNewN'
import BlogNewB from './components/BlogNewB'
import BlogNewA from './components/BlogNewA'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (    
    
    <Router>


      <Routes>

        <Route path='/' element={<Main/>}/> 
        <Route path='/Newbies' element={<BlogNewN/>}/> 
        <Route path='/Beginners' element={<BlogNewB/>}/>
        <Route path='/Advanced' element={<BlogNewA/>}/>
      </Routes>

    </Router>
    
  );
}

export default App;
