import { NavLink } from 'react-router-dom';
import './teachers.scss';

import teachersImg1 from '../../img/teachers/1.jpg';
import teachersImg2 from '../../img/teachers/2.jpg';
import teachersImg3 from '../../img/teachers/3.jpg';
import teachersImg4 from '../../img/teachers/4.jpg';
import teachersImg5 from '../../img/teachers/5.jpg';
import teachersImg6 from '../../img/teachers/6.jpg';

const Teachers = () => {
  return (
    <section className="teachers">
      <div className="container">
        <div className="teachers__content">
          <h2 className="teachers__title">Learn from the best</h2>
          <p className="teachers__text">
            Our teachers are professionals who have achieved success in their
            field. Lead designers of famous studios, marketers of the largest
            companies, editors of popular media: get first-hand experience,
            anytime.
          </p>
          <p className="teachers__text">
            Course tutors - our best graduates - will help and support you
            throughout the course.
          </p>
          <NavLink to='/teacher' className="teachers__btn global-btn">
            All teachers
          </NavLink>
        </div>

        <div className="teachers__gallery">
          <div className="teachers__gallery-item">
            <div className="teachers__img">
              <img src={teachersImg1} alt="Катя" />
            </div>
            <p className="teachers__name">Kate</p>
            <p className="teachers__position">Lead designer</p>
          </div>

          <div className="teachers__gallery-item">
            <div className="teachers__img">
              <img src={teachersImg2} alt="Марина" />
            </div>
            <p className="teachers__name">Megan</p>
            <p className="teachers__position">Marketer</p>
          </div>

          <div className="teachers__gallery-item">
            <div className="teachers__img">
              <img src={teachersImg3} alt="Катя" />
            </div>
            <p className="teachers__name">John</p>
            <p className="teachers__position">PR manager</p>
          </div>

          <div className="teachers__gallery-item">
            <div className="teachers__img">
              <img src={teachersImg4} alt="Катя" />
            </div>
            <p className="teachers__name">Robert</p>
            <p className="teachers__position">Company Founder</p>
          </div>

          <div className="teachers__gallery-item">
            <div className="teachers__img">
              <img src={teachersImg5} alt="Катя" />
            </div>
            <p className="teachers__name">Madison</p>
            <p className="teachers__position">Chief Editor</p>
          </div>

          <div className="teachers__gallery-item">
            <div className="teachers__img">
              <img src={teachersImg6} alt="Катя" />
            </div>
            <p className="teachers__name">William</p>
            <p className="teachers__position">Lead Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teachers;