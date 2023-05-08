import React from'react';
import './Menu.css';
import './App';

export function MenuTabs ({link, label}) {
    return (
      <nav className="menu">
        <ul className='menutabs'>
          <li><link to="/about" className='about'>about me</link></li>
          <li> <link href="kaoriii.com/garden" className='garden'>garden</ link></li>
          <li> <link href="#" className='home'>kaori hall</ link></li>
          <li> <link href="kaoriii.com/portfolio" className='portfolio'>portfolio</ link></li>
          <li> <link href="kaoriii.com/contact" className='contact'>contact me</ link></li>
          </ul>
        </nav>
        )

}

export default function Menu () {
    return (
      <header className="menu">
        <MenuTabs />
      </header>
    )
  }