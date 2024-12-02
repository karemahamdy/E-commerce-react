import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="header-nav">
      <Link to="/" className="header-link">
        Home
      </Link>
      <Link to="/" className="header-link">
        Product
      </Link>
    </nav>

  )
}
