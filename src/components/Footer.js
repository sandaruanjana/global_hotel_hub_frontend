import "./FooterStyles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
        <a href="https://www.buymeacoffee.com/app/abc" target="_blank" rel="noopener noreferrer">
      <img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
        alt="Buy Me A Coffee"
        style={{ height: '60px', width: '217px' }}
      />
    </a>
        </div>
        <div>
          <p>Choose your Flavour</p>
        </div>
      </div>
     
    </div>
  );
};

export default Footer;
