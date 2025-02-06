import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import About from "./About"

export default function Main() {
    return (
        <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/*' element={ <HomePage /> } />
        </Routes>
    )
}