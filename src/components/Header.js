import planet from '../assets/planet.png';

const Header = () => (
  <>
    <header>
      <div className="logo">
        <img src={planet} alt="Logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul>
        <li />
        <li />
        <li />
      </ul>
    </header>
    <hr />
  </>
);

export default Header;