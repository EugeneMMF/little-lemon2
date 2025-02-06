import './About.css';
import image1 from './images/Mario and Adrian A.jpg';
import image2 from './images/Mario and Adrian A.jpg';

export default function About() {
  return (
    <section className='about-section'>
      <div className='grid-adjustable-columns'>
        <article>
          <h2 className='display-title text-primary-green'>Little Lemon</h2>
          <h3 className='sub-title'>Chicago</h3>
          <p className='lead-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida porttitor tortor sed placerat.   Curabitur dapibus nulla justo, eu pellentesque diam  tincidunt eu.</p>
        </article>
        <div className='image-combination'>
          <img className='side-image left' src={image1} alt="Adrian" />
          <img className='side-image right' src={image2} alt="Mario" />
        </div>
      </div>
    </section>
  )
}