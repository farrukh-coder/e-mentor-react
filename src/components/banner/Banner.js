import { NavLink } from 'react-router-dom';
import './banner.scss';


const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__cover"></div>
      <div className="container">
        <h2 className="banner__title">Join E-Mentor Now</h2>
        <p className="banner__description">
          Choose the appropriate tariff and training format, take 2 lessons
          and we will give you additional lectures in any direction for free!
        </p>
        <div className="banner__btn-container">
          <NavLink to='/plans' className="banner__btn global-btn">Choose a plan</NavLink>
        </div>
      </div>
    </section>
  );
}

export default Banner;