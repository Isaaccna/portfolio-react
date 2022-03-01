import React from 'react';

function Header() {

  return (
    <header>
        <h2> 
        <a
         href="/">Isaac Andrade
        </a>
         </h2>
        <nav>
            <ul>
                <li>
                    <a href="about"> About me</a>
                </li>
                <li>
                    <a href="portfolio"> Portfolio</a>
                </li>
                <li>
                    <a href="contact"> Contact</a>
                </li>
                <li>
                    <a href="resume"> Resume</a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;