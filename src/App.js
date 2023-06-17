import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Video from './components/Video';
import Bollywood from './components/Bollywood';
import Hollywood from './components/Hollywood';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
function App() {
  return (
    <Router>
      <Header />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/videos' element={<Video />}/>
        <Route path='/bollywood' element={<Bollywood />}/>
        <Route path='hollywood' element={<Hollywood />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
