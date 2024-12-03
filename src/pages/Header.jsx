
import Logo from '../components/Logo';
import Navbar from '../components/Nav';
import '../styles/Header.scss';
import Cart from '../ui/Cart';

function Header() {

  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <Navbar />
        <Cart />
      </div>
    </header>
  );
}

export default Header;
