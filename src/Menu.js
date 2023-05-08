import React from'react';
import './Menu.css';
import './App';

export function MenuTabs ({link, label}) {
    return (
      <div className="menu">
        <ul className='menutabs'>
          <li><a href="kaoriii.com/aboutme" className='about'>about me</a></li>
          <li><a href="kaoriii.com/garden" className='garden'>garden</a></li>
          <li><a href="#" className='home'>kaori hall</a></li>
          <li><a href="kaoriii.com/portfolio" className='portfolio'>portfolio</a></li>
          <li><a href="kaoriii.com/contact" className='contact'>contact me</a></li>
          </ul>
        </div>
        )

}

export default function Menu () {
    return (
      <header className="menu">
        <MenuTabs />
      </header>
    )
  }