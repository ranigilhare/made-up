import React from "react";
import Avatar from '../../assets/images/shop-items/hero-one.jfif';
const testimonials = [
  {
    name: 'Vikas',
    rating: 5,
    review: `Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.`
  },
  {
    name: 'Vikas',
    rating: 5,
    review: `Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.`
  },
  {
    name: 'Vikas',
    rating: 5,
    review: `Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.`
  }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
        {/* <h2 className="px-3 text-uppercase text-center">Testimonials</h2> */}
        <div className="px-5 text-uppercase text-center">Testimonials</div>
        <div className="testimonials-grid mt-5">
            {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
                <img src={Avatar} alt={t.name} className="avatar" />
                <div className="content">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5>{t.name}</h5>
                        <div className="stars">
                            {'★'.repeat(t.rating)}<span className="inactive">{'★'.repeat(5 - t.rating)}</span>
                        </div>
                    </div>
                <p>
                    <em>{t.review.split(' the jeans ')[0]}</em> the <em>jeans I bought was worth the price.</em>
                </p>
                </div>
            </div>
            ))}
        </div>
        </section>
    )
} 

export default Testimonials