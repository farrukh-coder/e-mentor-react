import './plans.scss';

import plansImg1 from '../../img/plans/1.png';
import plansImg2 from '../../img/plans/2.png';
import plansImg3 from '../../img/plans/3.png';

const Plans = () => {
  return (
    <section className="plans">
      <div className="container">
        <h2 className="plans__title">Current plans</h2>
        <div className="plans__inner">
          <div className="plans__card">
            <div className="plans__header">
              <img src={plansImg1} alt='Standart Plan' />
              <span>Standart Plan</span>
            </div>
            <div className="plans__content">
              <p className="plans__price">45 $</p>
              <p className="plans__info">5 contacts per client</p>
              <p className="plans__info">5 contacts per client</p>
              <button className="plans__btn global-btn">Purchase</button>
            </div>
          </div>

          <div className="plans__card">
            <div className="plans__header">
              <img src={plansImg2} alt='Business Plan' />
              <span> Business Plan </span>
            </div>
            <div className="plans__content">
              <p className="plans__price">180 $</p>
              <p className="plans__info">5 contacts per client</p>
              <p className="plans__info">5 contacts per client</p>
              <button className="plans__btn global-btn">Purchase</button>
            </div>
          </div>

          <div className="plans__card">
            <div className="plans__header">
              <img src={plansImg3} alt='Full Plan' />
              <span> Full Plan </span>
            </div>
            <div className="plans__content">
              <p className="plans__price">900 $</p>
              <p className="plans__info">5 contacts per client</p>
              <p className="plans__info">5 contacts per client</p>
              <button className="plans__btn global-btn">Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;