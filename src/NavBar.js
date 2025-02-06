import Nav from './Nav';
import Header from './Header';
import './NavBar.css';

export default function NavBar() {
  return (
    <div class="grid-adjustable-columns">
      <Header />
      <Nav />
    </div>
  )
}