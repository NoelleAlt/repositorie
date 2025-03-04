import './App.css'
import { BrowserRouter, Route, Routes, NavLink, Redirect, Link,Navigate } from 'react-router-dom'
import React, {useState} from 'react';

// page components
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Article from './pages/Article'

function App() {

//   const articles = [
//     {
//       "id": "1",
//       "title": "Welcome to Our Website",
//       "author": "MC Clara",
//       "body": "I don't have a lot to say here. But hello. Feel free to look around and read. This site is still a WIP, so please be patient. Thanks for stopping by! We hope you enjoy your stay, and that you find something interesting to read. If there is anything, really. I'm just typing to fill up space. I hope you don't mind!"
//     },
//     {
//       "id": "2",
//       "title": "Site Update",
//       "author": "John M.",
//       "body": "Hello, everyone! I just wanted to let you know that we are currently working on updating the site. We are adding new features and fixing some bugs. We hope to have everything up and running soon. Thank you for your patience and continued support. We appreciate it! If you have any questions or concerns, please feel free to contact us. We are always happy to help. Thanks again for visiting our site! We hope you enjoy your stay! My friend should be updating the site soon, but they have a lot of things to work on in school. So please, be patient and stay tuned!"
//     },
//     {
//       "id": "3",
//       "title": "Lorem Ipsum",
//       "author": "Jane Doe",
//       "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit... just kidding. Hello. I hope you are having a great day. I've been experiencing some conflicts between schedules, so this site might be placed on hold for a while. I hope you understand. I'll try to update as soon as I can. Thank you for your patience. I hope you have a great day!"
//     }
//   ];


  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>


        <Routes>
          <Route path="/" element = {<Home/>} />              
          <Route path="/about" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/articles/:urlId" element ={<Article/>} />  
          <Route path="/*" element={<Navigate to="/"/> }/>      
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App
