import React from 'react';
import './Testimonial.css';

const Testimonial = ({ name, position, quote, photo }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <p className="testimonial-quote">{quote}</p>
        <div className="testimonial-author">
          <img src={photo} alt={name} className="testimonial-photo" />
          <div>
            <p className="testimonial-name">{name}</p>
            <p className="testimonial-position">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
