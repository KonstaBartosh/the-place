import './Footer.css';

const Footer = (): React.ReactElement => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">{year} The Place</p>
    </footer>
  );
};

export default Footer;