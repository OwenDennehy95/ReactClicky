import React from "react";
import './Nav.css';

const Nav = props => (
<nav className="navbar navbar-dark bg-danger">
    <h1>Clicky Game</h1>
    <span className='navbar-text'>Click the instruments only once to win!</span>
    <ul className='nav nav-fills'>
        <li className='nav-item'>
            <span className='nav-link'>Score: {props.score} | Top Score: {props.topScore}</span>
        </li>
    </ul>
    
</nav>
)

export default Nav;