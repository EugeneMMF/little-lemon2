export default function BookingForm({props}) {
  const { date, time, guests, occasion, availableTimes, setDate, setTime, setGuests, setOccasion } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date, time, guests, occasion);
  }

  return (
    <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}}onSubmit={ (e) => handleSubmit(e) }>
      <label htmlFor="res-date">Choose Date</label>
      <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} required={true} />
      <label htmlFor="res-time">Choose Time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        { availableTimes.map(option => <option value={option} key={option}>{option}</option>) }
      </select>
      <label htmlFor="guests">Number of Guests</label>
      <input type="number" id="guests" placeholder="1" min={1} max={10} value={guests} onChange={(e) => setGuests(e.target.value)} />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="" key="no-occasion">Select Occasion</option>
        <option value="birthday" key="birthday">Birthday</option>
        <option value="anniversary" key="anniversary">Anniversary</option>
      </select>
      <input type="submit" className="call-to-action" style={{fontSize: '12pt'}} value="Make Your Reservation" />
    </form>
  )
}