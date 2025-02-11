import './ConfirmedBooking.css';

const ConfirmedBooking = () => {
  return (
    <section className="confirmed-booking-section grid-adjustable-columns">
      <h2 className='sub-title text-primary-green'>Booking Confirmation</h2>
      <p className='lead-text'>The booking has successfully been <span className='text-primary-yellow'>confirmed</span>.</p>
    </section>
  )
};

export default ConfirmedBooking;