export default function Nav() {
    const loggedIn = false;

    return (
        <nav>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/orderOnline">Order Online</a></li>
                { loggedIn ? <li><a href="/logout">Logout</a></li> : <li><a href="/login">Login</a></li> }
            </ul>
        </nav>
    )
}