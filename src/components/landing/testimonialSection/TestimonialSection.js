import React from "react";
import Slider from "react-slick";
import Testimonial from "./testimonial/Testimonial";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import "./TestimonialSection.css";

const testimonials = [
    {
        name: 'John Doe',
        position: 'CEO, XYZ Healthcare',
        quote: 'The appointment scheduling platform revolutionized our clinic\'s operations. It streamlined the process, allowing us to focus more on patient care.',
        photo: 'https://thumbs.dreamstime.com/b/young-man-smiling-standing-outdoors-32387074.jpg'
    },
    {
        name: 'Jane Smith',
        position: 'Patient',
        quote: 'Using this platform made scheduling appointments a breeze. I no longer have to wait on hold or worry about missing appointments. Highly recommend!',
        photo: 'https://thumbs.dreamstime.com/b/smiling-black-female-patient-showing-thumb-up-dental-treatment-portrait-beautiful-happy-young-woman-sitting-chair-221126929.jpg'
    },
    {
        name: 'Emily Johnson',
        position: 'Physician Assistant',
        quote: 'As a healthcare provider, I appreciate the simplicity and efficiency of this scheduling platform. It has improved communication with patients and streamlined our workflow significantly.',
        photo: 'https://intermountainhealthcare.org/-/media/images/global/1-1/nurse-smiling-female-portrait.jpg?mw=1600'
    },
    {
        name: 'David Martinez',
        position: 'Patient',
        quote: 'I love how easy it is to schedule appointments using this platform. The interface is intuitive, and I appreciate the reminders before my appointments. It has made managing my healthcare much more convenient.',
        photo: "https://www.hulendental.com/blog/wp-content/uploads/2019/08/man-dental-checkup.jpeg"
    },
    {
        name: 'Sarah Adams',
        position: 'Nurse Practitioner',
        quote: 'This scheduling platform has been a game-changer for our clinic. It has reduced no-shows, improved patient satisfaction, and allowed us to optimize our scheduling processes. I highly recommend it to other healthcare providers.',
        photo: 'https://media.licdn.com/dms/image/C4E03AQGwPcnKsiBZyg/profile-displayphoto-shrink_800_800/0/1517079962887?e=2147483647&v=beta&t=u6imQdM91EJvATjai1VIUw5B1csrpI4OqABim9DO-Wk'
    }
];

const TestimonialSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "200px"
      };

    return (
      <section className="testimonial-section">
        <div className="testimonial-container">
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <Testimonial key={index} {...testimonial} />
                ))}
            </Slider>
        </div>
      </section>
    );
  };
  
  export default TestimonialSection;