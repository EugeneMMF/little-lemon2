import './SpecialCard.css';

export default function SpecialCard({ props }) {
  return (
    <article className="special-card back-secondary-light">
      <div className='image-frame'>
        <img src={ props.source } alt={ props.title } />
      </div>
      <h3 className="special-title">{ props.title }</h3>
      <h4 className="special-title text-secondary-orange">${ props.price }</h4>
      <p className="paragraph-text">{ props.description }</p>
      <a className="highlight-text" href='/'>Order a delivery 🚴</a>
    </article>
  )
}