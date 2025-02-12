import { Route, Routes, useNavigate } from "react-router-dom";
import { useReducer, useState, useEffect } from "react";
import HomePage from "./HomePage";
import About from "./About";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import Reservations from "./Reservations";

export default function Main() {

    const [reservations, setReservations] = useState([]);
    const [formData, setFormData] = useState({});

    const seededRandom = function (seed) {
        var m = 2**35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return (s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };

    const submitAPI = function(formData) {
        return true;
    };

    const submitForm = (formData) => {
        setFormData(formData);
    }

    useEffect(() => {
        if (Object.keys(formData).length == 0) return;
        if (submitAPI(formData)) {
            setReservations([...reservations, formData]);
            navigate('/submission-confirmed');
        }
    }, [formData])

    const dropReservation = (index) => {
        setReservations([...reservations.slice(0, index), ...reservations.slice(index+1)])
    }

    const updateTimes = (state, action) => {
        return fetchAPI(new Date(action.date));
    }

    const initializeTimes = () => {
        return fetchAPI(new Date());
    }

    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    return (
        <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/make-reservation' element={ <BookingPage props={{availableTimes, dispatchAvailableTimes, submitForm}} /> } />
            <Route path='/submission-confirmed' element={ <ConfirmedBooking /> } />
            <Route path='/reservations' element={ <Reservations props={{reservations, dropReservation}}/> } />
            <Route path='/*' element={ <HomePage /> } />
        </Routes>
    )
}