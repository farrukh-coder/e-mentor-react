import { NavLink } from 'react-router-dom';
import './footer.scss';

import footerLogo from '../../img/footer/logotype.svg';
import facebook from '../../img/footer/facebook.svg';
import instagram from '../../img/footer/instagram.svg';
import vk from '../../img/footer/vk.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <NavLink to='/' className="footer__logo">
            <img src={footerLogo} alt="E-Mentor" />
          </NavLink>

          <p className="footer__description">
            Образовательная онлайн-платформа для развития и тренировки навыков в
            сфере информационных технологий
          </p>
          <div className="footer__social">
            <a href="https://facebook.com" className="footer__social-link">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://vk.com" className="footer__social-link">
              <img src={vk} alt="vk" />
            </a>
            <a href="https://instagram.com" className="footer__social-link">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>

        <div className="footer__inner">
          <NavLink to='/about' className="footer__link">About us</NavLink>
          <NavLink to='/teacher' className="footer__link">Teachers</NavLink>
          <NavLink to='/course' className="footer__link">Courses</NavLink>
          <NavLink to='/plans' className="footer__link">Plans</NavLink>
        </div>



        <div className="footer__inner">
          <a className="footer__link" href="./contact.html">Contacts</a>
          <a href="mailto:education@ementor.info" className="footer__mail">
            Write to us at education@ementor.info
          </a>
          <a href="tel:+998909990000" className="footer__link">+9989 90 999 00 00</a>
        </div>
      </div>
      <div className="footer__copy">
        <a href="https://example.com" className="footer__copy-link">
          E-Mentor © 2021 All rights reserved
        </a>
        <a href="https://example.com" className="footer__copy-link footer__copy-link_right">
          Personal data processing policy
        </a>
        <a href="https://example.com" className="footer__copy-link">
          Public offer
        </a>
      </div>
    </footer>
  );
}

export default Footer;