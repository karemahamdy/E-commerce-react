import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="header-logo">
      <img src="src/assets/images/logo.png.webp" alt="logo" />
    </Link>
  )
}
