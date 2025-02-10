import './BookingPage.css'
import BookingForm from "./BookingForm";
import { useState } from "react";

export default function BookingPage({ props }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  return (
    <section className="booking-section grid-adjustable-columns">
      <BookingForm props={{...props, date, time, guests, occasion, setDate, setTime, setGuests, setOccasion}} />
    </section>
  )
}