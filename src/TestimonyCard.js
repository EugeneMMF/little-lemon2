import './TestimonyCard.css'
import Rating from './Rating';

export default function TestimonyCard({ props }) {
  return (
    <article className="testimony-card back-secondary-light">
      <Rating props={{ maxRating: 5, rating: props.rating, width: 100, height: 25 }}/>
      <div className='image-frame'>
        <img src={ props.source } alt={ props.name } />
      </div>
      <p className='testimony-name highlight-text'>{ props.name }</p>
      <p className='testimony-review paragraph-text'>{ props.review }</p>
    </article>
  )
}