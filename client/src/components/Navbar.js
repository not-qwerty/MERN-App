import React from 'react';
import { Link } from 'react-router-dom';
import Posts from './Posts';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="#">BlogPost</a>
            </div>
            <ul className="nav navbar-nav">
                <li><Link to='/posts'>Home</Link></li>
                <li><Link to='/create'>Create a Post</Link></li>
                <li><a href="#">Our Chat</a></li>
                <li><a href="#">Pomodoro Clock</a></li>
            </ul>
        </div>
      </nav>
        </div>
    )
}
