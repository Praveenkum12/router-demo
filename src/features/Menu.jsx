import { Link, Outlet } from 'react-router-dom';

function Menu() {
  return (
    <div>
      <div>This is Menu Box</div>
      <div className="menu-cover">
        <Link to="login">Log In</Link>
        <Link to="signup">Sign Up</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Menu;
