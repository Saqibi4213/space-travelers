import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Navbar() {
  return (
    <header className="bg-light py-2">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex align-items-center flex-shrink-0">
            <img src={logo} className="logo me-2" alt="header logo" />
            <h1 className="header-title mb-0">Space Travelers Hub</h1>
          </div>
          <nav className="flex-grow-1">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Rockets</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="missions" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Missions</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="dragons" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Dragons</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="myprofile" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>My Profile</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
