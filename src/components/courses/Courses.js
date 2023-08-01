import { NavLink } from 'react-router-dom';
import './courses.scss';

import courseImg1 from '../../img/courses/1.png';
import courseImg2 from '../../img/courses/2.png';
import courseImg3 from '../../img/courses/3.png';
import courseImg4 from '../../img/courses/4.png';

const Courses = () => {
  return (
    <section className="courses">
      <div className="container">
        <h2 className="courses__title">Popular courses</h2>
        <div className="courses__inner">
          <div className="courses__item">
            <div className="courses__img">
              <img src={courseImg1} alt="Motion design" />
            </div>
            <p className="courses__name">Motion design</p>
          </div>

          <div className="courses__item">
            <div className="courses__img">
              <img src={courseImg2} alt="Targer on Instagram" />
            </div>
            <p className="courses__name">Target on Instagram</p>
          </div>

          <div className="courses__item">
            <div className="courses__img">
              <img
                src={courseImg3}
                alt="Spectacular presentations"
              />
            </div>
            <p className="courses__name">Spectacular presentations</p>
          </div>

          <div className="courses__item">
            <div className="courses__img">
              <img src={courseImg4} alt="SMM-strategy" />
            </div>
            <p className="courses__name">SMM strategy</p>
          </div>
        </div>

        <NavLink to='/course' className="courses__btn global-btn">All courses</NavLink>

      </div>
    </section>
  );
}

export default Courses;