import './Testimonials.css'
import TestimonyCard from './TestimonyCard';

export default function Testimonials() {
  const testimonies = [
    {
      name: "Jordan Wesley",
      source: "images/portrait_male_0.jpg",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida  porttitor tortor sed placerat. Curabitur dapibus nulla justo, eu  pellentesque diam tincidunt eu.",
      rating: 4
    },
    {
      name: "Brian Wayne",
      source: "images/portrait_male_1.jpg",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida  porttitor tortor sed placerat. Curabitur dapibus nulla justo, eu  pellentesque diam tincidunt eu.",
      rating: 2
    },
    {
      name: "Kate Jules",
      source: "images/portrait_female_0.jpg",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida  porttitor tortor sed placerat. Curabitur dapibus nulla justo, eu  pellentesque diam tincidunt eu.",
      rating: 3
    },
    {
      name: "Jenny Johnson",
      source: "images/portrait_female_1.jpg",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida  porttitor tortor sed placerat. Curabitur dapibus nulla justo, eu  pellentesque diam tincidunt eu.",
      rating: 5
    },
  ]

  return (
    <section className='testimonials-section back-primary-green'>
      <div className='grid-adjustable-columns'>
        <h2 className="sub-title text-secondary-light">Testimonials</h2>
        { testimonies.map(testimony => <TestimonyCard props={{...testimony}}/>) }
      </div>
    </section>
  )
}