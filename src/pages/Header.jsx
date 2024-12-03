
import Logo from '../components/Logo';
import '../styles/Header.scss';
import Cart from '../ui/Cart';

function Header() {

  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <Cart />
      </div>
    </header>
  );
}

export default Header;
