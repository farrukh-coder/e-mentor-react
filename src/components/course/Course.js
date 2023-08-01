import './course.scss';

import courseImg1 from '../../img/courses/1.png';
import courseImg2 from '../../img/courses/2.png';
import courseImg3 from '../../img/courses/3.png';
import courseImg4 from '../../img/courses/4.png';


const Course = () => {
  return (
    <section className="course">
      <div className="container">
        <h2 className="course__title">All courses</h2>
        <div className="course__inner">
          <div className="course__item">
            <div className="course__img">
              <img src={courseImg1} alt="Motion design" />
            </div>
            <p className="course__name">Motion design</p>
          </div>

          <div className="course__item">
            <div className="course__img">
              <img src={courseImg2} alt="Targer on Instagram" />
            </div>
            <p className="course__name">Target on Instagram</p>
          </div>

          <div className="course__item">
            <div className="course__img">
              <img src={courseImg3} alt="Spectacular presentations" />
            </div>
            <p className="course__name">Spectacular presentations</p>
          </div>

          <div className="course__item">
            <div className="course__img">
              <img src={courseImg4} alt="SMM-strategy" />
            </div>
            <p className="course__name">SMM strategy</p>
          </div>

          <div className="course__item">
            <div className="course__img">
              <img src={courseImg1} alt="Motion design" />
            </div>
            <p className="course__name">Motion design</p>
          </div>

          <div className="course__item">
            <div className="course__img">
              <img src={courseImg2} alt="Targer on Instagram" />
            </div>
            <p className="course__name">Target on Instagram</p>
          </div>

          <div className="course__item">
            <div className="course__img">
              <img src={courseImg3} alt="Spectacular presentations" />
            </div>
            <p className="course__name">Spectacular presentations</p>
          </div>

          <div className="course__item">
            <div className="course__img">
              <img src={courseImg4} alt="SMM-strategy" />
            </div>
            <p className="course__name">SMM strategy</p>
          </div>

          <div className="course__item">
            <div className="course__img">
              <img src={courseImg1} alt="Motion design" />
            </div>
            <p className="course__name">Motion design</p>
          </div>

          <div className="course__item">
            <div className="course__img">
              <img src={courseImg2} alt="Targer on Instagram" />
            </div>
            <p className="course__name">Target on Instagram</p>
          </div>

          <div className="course__item">
            <div className="course__img">
              <img src={courseImg3} alt="Spectacular presentations" />
            </div>
            <p className="course__name">Spectacular presentations</p>
          </div>

          <div className="course__item">
            <div className="course__img">
              <img src={courseImg4} alt="SMM-strategy" />
            </div>
            <p className="course__name">SMM strategy</p>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Course;