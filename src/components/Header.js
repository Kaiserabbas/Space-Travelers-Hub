// Header.js
import { Routes, Route, Link } from 'react-router-dom';
import planet from '../assets/planet.png';
import Rockets from './Rockets';
import Missions from './Missions';
import Profile from './Profile';

const Header = () => (
  <>
    <header>
      <div className="logo">
        <img src={planet} alt="Logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <div className="links">
        <Link to="/" className="link">
          Rockets
        </Link>
        <Link to="/missions" className="link">
          Missions
        </Link>
        <Link to="/profile" className="link">
          <span className="link-line">|</span>
          Profile
        </Link>
      </div>
    </header>
    <hr />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/missions" element={<Missions />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </>
);

export default Header;
