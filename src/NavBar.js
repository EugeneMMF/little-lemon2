import Nav from './Nav';
import Header from './Header';
import './NavBar.css';

export default function NavBar() {
  return (
    <div className="grid-adjustable-columns">
      <Header />
      <Nav />
    </div>
  )
}