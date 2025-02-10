import { Route, Routes } from "react-router-dom";
import { useReducer } from "react";
import HomePage from "./HomePage";
import About from "./About";
import BookingPage from "./BookingPage";

export default function Main() {
    const updateTimes = (state, action) => {
        return state;
    }

    const initializeTimes = () => {
        return [
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
        ]
    }

    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes())

    return (
        <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/reservations' element={ <BookingPage props={{availableTimes, dispatchAvailableTimes}} /> } />
            <Route path='/*' element={ <HomePage /> } />
        </Routes>
    )
}