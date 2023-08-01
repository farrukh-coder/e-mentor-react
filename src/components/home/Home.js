import { NavLink } from 'react-router-dom';
import './home.scss';

import logo from '../../img/logo.svg';
import facebook from '../../img/social/facebook.svg';
import instagram from '../../img/social/instagram.svg';
import vk from '../../img/social/vk.svg';
import homeImg1 from '../../img/home/1.png';
import homeImg2 from '../../img/home/2.png';
import arrow from '../../img/home/arrow.svg';


const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home__aside home__aside_left">
          <div className="home__social">
            <a href="https://facebook.com" className="home__link">
              <img src={facebook} alt="Facebbok" />
            </a>
            <a href="https://vk.com" className="home__link">
              <img src={vk} alt="VK" />
            </a>
            <a href="https://instagram.com" className="home__link">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
          <div className="home__img">
            <img src={homeImg1} alt="" />
          </div>
        </div>
        <div className="home__main">
          <NavLink className="home__logo" to="/">
            <img src={logo} alt="E-mentor" />
          </NavLink>
          <h2 className="home__title">Educational online platform</h2>
          <p className="home__description">
            Courses and video lectures on design, copywriting, SMM, targeting
            and many other topics
          </p>
          <a className="home__btn global-btn" href="./course.html">All courses</a>
        </div>
        <div className="home__aside home__aside_right">
          <div className="home__img">
            <img src={homeImg2} alt="" />
          </div>
          <div className="home__scroll">
            <span>scroll down</span>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;