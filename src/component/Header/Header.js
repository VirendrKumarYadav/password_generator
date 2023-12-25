import './Header.css'
import React from 'react'

function Header() {
    return (
        <div>
            <div className='headContainer'>
                <div className='left'>
                    <img src="https://flowbite.com/docs/images/logo.svg"></img>
                    <h2>Rishiyam</h2>
                </div>
                <div className='mid'>
                    <ul>
                        <li>
                          <a>Home</a>
                        </li>
                        <li>
                           <a>Resturants</a>
                        </li>
                        <li>
                           <a>Contects</a>
                        </li>
                        <li>
                           <a>Foods</a>
                        </li>
                        <li>
                           <a>Quote</a>
                        </li>
                    </ul>
                </div>
                <div className='right'>
                 <button id="getStarted">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Header;
