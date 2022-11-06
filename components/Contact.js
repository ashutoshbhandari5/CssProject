import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Small Pricing Plan For Your Creative Business</h2>
      <div className="divider">
        <div>
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
          <button>Read More</button>
        </div>
        <form className="form">
          <h4>Get started with a free quotation</h4>
          <div className="input">
            <label>Name</label>
            <input type="text" placeholder="Enter your Name" />
          </div>
          <div className="input">
            <label>Email</label>
            <input type="text" placeholder="Enter a valid email address" />
          </div>
          <div className="input">
            <label>Message</label>
            <textarea placeholder="Enter your message" />
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <p>I agree the terms and condtion</p>
          </div>
          <button>Submit your request</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
