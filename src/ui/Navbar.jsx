import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/" className="logo">
        LOGO
      </NavLink>
      <div className="nav-box">
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/contact">Contact us</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
