import './Header.css'
import reactLogo from '../../assets/react.svg'

const Header = () => {
  return (
    <header className="header">
      <img
        className="logo"
        src={reactLogo}
        alt="Логотип проекта место"
        />
      <h1>The Place</h1>
    </header>
  );
};

export default Header;
