import './stats.scss';

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__item">
          <p className="stats__num" data-statistics="100">100+</p>
          <p className="stats__description">
            theoretical and practical courses for different levels
          </p>
        </div>
        <div className="stats__item">
          <p className="stats__num" data-statistics="3000">3000</p>
          <p className="stats__description">
            hours of video lectures and webinars from the best teachers
          </p>
        </div>
        <div className="stats__item">
          <p className="stats__num" data-statistics="15">15</p>
          <p className="stats__description">
            areas of training for in-demand professions
          </p>
        </div>
        <div className="stats__item">
          <p className="stats__num" data-statistics="2000">2000</p>
          <p className="stats__description">
            students are already engaged on our platform
          </p>
        </div>
      </div>
    </section>
  );
}

export default Stats;