import { useCallback, useState } from "react";

export default function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date, time, guests, occasion);
  }

  const isValid = useCallback(() => {
    return (date !== "" && time !== "")
  }, [date, time])

  return (
    <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}}onSubmit={ (e) => handleSubmit(e) }>
      <label htmlFor="res-date">Choose Date</label>
      <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
      <label htmlFor="res-time">Choose Time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="17:00" key="17:00">17:00</option>
        <option value="18:00" key="18:00">18:00</option>
        <option value="19:00" key="19:00">19:00</option>
        <option value="20:00" key="20:00">20:00</option>
        <option value="21:00" key="21:00">21:00</option>
        <option value="22:00" key="22:00">22:00</option>
      </select>
      <label htmlFor="guests">Number of Guests</label>
      <input type="number" id="guests" placeholder="1" min={1} max={10} value={guests} onChange={(e) => setGuests(e.target.value)} />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="" key="no-occasion">Select Occasion</option>
        <option value="birthday" key="birthday">Birthday</option>
        <option value="anniversary" key="anniversary">Anniversary</option>
      </select>
      <input type="submit" className={ isValid() ? "call-to-action" : "call-to-action disabled"} style={{fontSize: '12pt'}} value="Make Your Reservation" disabled={!isValid()}/>
    </form>
  )
}