import './about.scss';

import aboutImg from '../../img/about/1.png'

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__content">
          <h2 className="about__title">About Us</h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            libero earum eligendi temporibus officia. Nihil magnam eaque
            accusantium voluptatum. Quas ea provident vitae aliquam fugiat vel,
            reprehenderit impedit dicta sequi eaque asperiores itaque
            consectetur voluptatibus laboriosam explicabo ullam corporis
            repudiandae voluptatum obcaecati, eius velit beatae est id.
          </p>
          <p className="about__primary-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            corrupti repellendus cum! Est voluptas obcaecati ducimus fugiat
            voluptatem dicta consequuntur?
          </p>
        </div>

        <div className="about__img">
          <img src={aboutImg} alt="О нас" />
        </div>
      </div>
    </section>
  );
}

export default About;