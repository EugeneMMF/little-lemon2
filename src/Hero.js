import restaurantFood from './images/restauranfood.jpg';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
    return (
        <section className='hero-section back-primary-green'>
            <div className='grid-adjustable-columns'>
                <article>
                    <h1 className='display-title text-primary-yellow'>Little Lemon</h1>
                    <h2 className='sub-title text-secondary-light'>Chicago</h2>
                    <p className='lead-text text-secondary-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida porttitor tortor sed placerat.   Curabitur dapibus nulla justo, eu pellentesque diam  tincidunt eu.</p>
                </article>
                <img className='side-image' src={restaurantFood} alt="restaurant food" />
                <Link to='/make-reservation' className='call-to-action'>Reserve a Table</Link>
            </div>
        </section>
    )
}