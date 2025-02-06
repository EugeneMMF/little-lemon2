import founders from './images/Mario and Adrian A.jpg';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className='back-primary-green'>
            <div className='grid-adjustable-columns'>
                <img src={founders} alt="founders" />
                <nav>
                    <h3 className='card-title text-secondary-light'>Doormat Navigation</h3>
                    <ul>
                        <li><Link className="doormat secondary-dark paragraph-text text-secondary-light" to="/home">Home</Link></li>
                        <li><Link className="doormat secondary-dark paragraph-text text-secondary-light" to="/about">About</Link></li>
                        <li><Link className="doormat secondary-dark paragraph-text text-secondary-light" to="/menu">Menu</Link></li>
                        <li><Link className="doormat secondary-dark paragraph-text text-secondary-light" to="/reservations">Reservations</Link></li>
                        <li><Link className="doormat secondary-dark paragraph-text text-secondary-light" to="/orderOnline">Order Online</Link></li>
                    </ul>
                </nav>
                <address>
                    <h3 className='card-title text-secondary-light'>Contacts</h3>
                    <ul>
                    <li><a href="" className="paragraph-text text-secondary-light">Address</a></li>
                    <li><a href="" className="paragraph-text text-secondary-light">Phone number</a></li>
                    <li><a href="" className="paragraph-text text-secondary-light">Email</a></li>
                    </ul>
                </address>
                <address>
                    <h3 className='card-title text-secondary-light'>Social Media Links</h3>
                    <ul>
                    <li><a href="" className="paragraph-text text-secondary-light">FaceBook</a></li>
                    <li><a href="" className="paragraph-text text-secondary-light">Twitter</a></li>
                    <li><a href="" className="paragraph-text text-secondary-light">Instagram</a></li>
                    </ul>
                </address>
            </div>
        </footer>
    )
}