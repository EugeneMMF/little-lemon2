import './Highlights.css';
import SpecialCard from './SpecialCard';

export default function Highlights() {
  const cards = [
    {
      title: 'Greek Salad',
      price: 12.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim elit velit, a faucibus ante fringilla non.',
      source: 'images/greek salad.jpg'
    },
    {
      title: 'Bruchecta',
      price: 12.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim elit velit, a faucibus ante fringilla non.',
      source: 'images/bruchetta.svg'
    },
    {
      title: 'Lemon Dessert',
      price: 12.95,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim elit velit, a faucibus ante fringilla non.',
      source: 'images/bruchetta.svg'
    }
  ]

  return (
    <section className="highlights-section grid-adjustable-columns">
      <h2 className="sub-title">Specials</h2>
      <button className="call-to-action">Online Menu</button>
      { cards.map(card => <SpecialCard props={{...card}} key={card.title} />) }
    </section>
  )
}