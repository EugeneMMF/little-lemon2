import './Reservations.css';
import { GiTrashCan } from 'react-icons/gi';

const Reservations = ({ props }) => {
  return (
    <section className="reservations-section grid-adjustable-columns">
      <h2 className='sub-title text-primary-green'>Your Reservations</h2>
      <table>
        <thead>
          <th className='highlight-text text-primary-green'>Date</th>
          <th className='highlight-text text-primary-green'>Time</th>
          <th className='highlight-text text-primary-green'>Number of Guests</th>
          <th className='highlight-text text-primary-green'>Occasion</th>
        </thead>
        <tbody>
          { props.reservations.map((reservation,index) => (<tr key={JSON.stringify(reservation)+index.toString()}>
            <td className='paragraph-text'>{reservation.date}</td>
            <td className='paragraph-text'>{reservation.time}</td>
            <td className='paragraph-text'>{reservation.guests}</td>
            <td className='paragraph-text'>{reservation.occasion}</td>
            <GiTrashCan className='call-to-action' onClick={() => props.dropReservation(index)}/>
          </tr>)) }
        </tbody>
      </table>
    </section>
  )
};

export default Reservations;