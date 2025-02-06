import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import About from "./About"
import BookingPage from "./BookingPage"

export default function Main() {
    return (
        <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/reservations' element={ <BookingPage /> } />
            <Route path='/*' element={ <HomePage /> } />
        </Routes>
    )
}