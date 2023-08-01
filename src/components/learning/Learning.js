import { NavLink } from 'react-router-dom';
import './learning.scss';

import learning from '../../img/learning/1.png'

const Learning = () => {
  return (
    <section className="learning">
      <div className="container">
        <div className="learning__img">
          <img src={learning} alt="Learning" />
        </div>
        <div className="learning__content">
          <div className="learning__title">Choose your learning format</div>
          <div className="learning__text">
            Watch video lectures at your convenience, train on a simulator,
            participate in intensive workshops with a team, or take a course
            with a flexible schedule. On our platform, everyone will find a
            suitable format.
          </div>
          <NavLink to='/plans' className="learning__btn global-btn">
            All plans
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Learning;