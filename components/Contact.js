import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact-header">
        Small Pricing Plan For Your Creative Business
      </h2>
      <div className="contact-content">
        <article className="content-info">
          <p>
            Article evident arrived express highest men did boy. Mistress
            sensible entirely am so. Quick can manor smart money hopes worth
            too. Comfort produce husband boy her had hearing. Law others theirs
            passed but wishes. You day real less till dear read. Considered use
            dispatched melancholy sympathize discretion led.
          </p>
          <p>
            Oh feel if up to till like. He an thing rapid these after going
            drawn or. Timed she his law the spoil round defer. In surprise
            concerns informed betrayed he learning is ye.
          </p>
          <button className="contact-btn">Read More</button>
        </article>
        <form className="form">
          <h4 className="form-header">Get started with a free quotation</h4>
          <div className="form-element">
            <label className="form-element_label">Name</label>
            <input
              className="form-element_input"
              type="text"
              placeholder="Enter your Name"
            />
          </div>
          <div className="form-element">
            <label className="form-element_label">Email</label>
            <input
              className="form-element_input"
              type="text"
              placeholder="Enter a valid email address"
            />
          </div>
          <div className="form-element">
            <label className="form-element_label">Message</label>
            <textarea
              className="form-element_input"
              placeholder="Enter your message"
            />
          </div>
          <div className="form-element_checkbox">
            <input type="checkbox" />
            <p>I agree the terms and condtion</p>
          </div>
          <button className="form_submit-btn">Submit your request</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
