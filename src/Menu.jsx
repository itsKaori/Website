import React from'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import './Menu';
import './App';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Aboutme from './pages/Aboutme';
import Garden from './pages/Garden';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export function MenuTabs () {
    return (
<Router>
      <div className="menu">
        <nav>
        <ul className='menutabs'>
          <li><Link to="/aboutme" className='about'>about me</Link></li>
          <li><Link to="/garden" className='garden'>garden</Link></li>
          <li><Link to="home" className='home'>kaori hall</Link></li>
          <li><Link to="/portfolio" className='portfolio'>portfolio</Link></li>
          <li><Link to="/contact" className='contact'>contact me</Link></li>
          </ul>
          </nav>  
      <Routes>
        <Route path="home" exact component={Home} />
        <Route path="/" exact component={Layout} />
        <Route path="/aboutme" exact component={Aboutme} />
        <Route path="/garden" exact component={Garden} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
      </Routes>
        </div>
</Router>
        );

}

export default function Menu () {
    return (
      <header className="menu">
        <MenuTabs />
      </header>
    );
  }