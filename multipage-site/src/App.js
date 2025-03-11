import './App.css';
import { BrowserRouter, Route, Routes, NavLink, Navigate } from 'react-router-dom';
import React from 'react';

// Page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Article from './pages/Article';
import Create from './pages/FormArticle'; 
import EditArticle from './pages/EditArticle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Devlog Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/new">New Article</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />              
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/articles/:urlId" element={<Article />} />  
          <Route path="/new" element={<Create />} />
          <Route path="/edit/:id" element={<EditArticle />} /> {/* Added edit route */}
          <Route path="/*" element={<Navigate to="/" />} />      
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;