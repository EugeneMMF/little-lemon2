import './BookingPage.css'
import BookingForm from "./BookingForm";
import { useState } from "react";

export default function BookingPage() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ]);

  return (
    <section className="booking-section grid-adjustable-columns">
      <BookingForm props={{date, time, guests, occasion, availableTimes, setDate, setTime, setGuests, setOccasion}} />
    </section>
  )
}