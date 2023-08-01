import './contact.scss';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact__content">
          <div className="contact__form">
            <p className="contact__title">Feedback form</p>

            <form id="contactForm">
              <div className="contact__field">
                <input
                  className="contact__input"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact__field">
                <input
                  className="contact__input"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="contact__field">
                <input
                  className="contact__input"
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="contact__field">
                <textarea
                  className="contact__textarea"
                  id="message"
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </div>

              <button className="contact__button global-btn" type="submit">
                Send message
              </button>
            </form>
          </div>
          <div className="contact__info">
            <p className="contact__title">Contacts</p>
            <p className="contact__p"><b>Address:</b> Lorem ipsum dolor sit amet.</p>
            <a href="tel:+998901234567" className="contact__p">
              <b>Phone:</b> +998 (90) 123-45-67
            </a>
            <a href="mailto:test@example.com" className="contact__p">
              <b>Email:</b> yourmail@example.com
            </a>
            <a href="https://farrukhweb.ru" className="contact__p">
              <b>Web site:</b> yoursite.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;