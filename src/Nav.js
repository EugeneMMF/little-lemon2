import './Nav.css'
import { useRef, useCallback, useState } from 'react';
import hamburger from './images/🦆 icon _hamburger menu.svg';
import { Link } from 'react-router-dom';

export default function Nav() {
    const [ loggedIn ] = useState(false);
    const list = useRef(null);

    const openCloseMenu = useCallback(() => {
        if (list.current) {
            list.current.className === "navbar phone" ?
            list.current.className = "navbar phone active" :
            list.current.className = "navbar phone"
        }
    }, []);

    const closeMenu = useCallback(() => {
        if (list.current) {
            list.current.className = "navbar phone";
        }
    }, []);

    return (
        <>
            <nav className="navbar desktop">
                <ul>
                    <li><Link className="navbar text-secondary-dark" to="/home">Home</Link></li>
                    <li><Link className="navbar text-secondary-dark" to="/about">About</Link></li>
                    <li><Link className="navbar text-secondary-dark" to="/menu">Menu</Link></li>
                    <li><Link className="navbar text-secondary-dark" to="/reservations">Reservations</Link></li>
                    <li><Link className="navbar text-secondary-dark" to="/orderOnline">Order Online</Link></li>
                    {
                        loggedIn ?
                        <li><Link className="navbar text-secondary-dark" to="/logout">Logout</Link></li> :
                        <li><Link className="navbar text-secondary-dark" to="/login">Login</Link></li>
                    }
                </ul>
            </nav>
            <img src={hamburger} className='navbar hamburger' onClick={openCloseMenu} alt='hamburger navigation icon'></img>
            <nav className="navbar phone" ref={list} onClick={closeMenu}>
                <ul>
                    <li><Link className="navbar text-secondary-dark" onclick={closeMenu} to="/home">Home</Link></li>
                    <li><Link className="navbar text-secondary-dark" onclick={closeMenu} to="/about">About</Link></li>
                    <li><Link className="navbar text-secondary-dark" onclick={closeMenu} to="/menu">Menu</Link></li>
                    <li><Link className="navbar text-secondary-dark" onclick={closeMenu} to="/reservations">Reservations</Link></li>
                    <li><Link className="navbar text-secondary-dark" onclick={closeMenu} to="/orderOnline">Order Online</Link></li>
                    {
                        loggedIn ?
                        <li><Link className="navbar text-secondary-dark" onclick={closeMenu} to="/logout">Logout</Link></li> :
                        <li><Link className="navbar text-secondary-dark" onclick={closeMenu} to="/login">Login</Link></li>
                    }
                </ul>
            </nav>
        </>
    )
}