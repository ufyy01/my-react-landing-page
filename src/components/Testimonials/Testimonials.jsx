import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Review } from "../../asset";
import './testimonial.css';
import '../../App.css';

const Testimonals = () => {
    const reviews = [
        {
            id: 1,
            heading: "What our customers are saying",
            image: Review,
            name: "Edward Newgate",
            company: "Founder Circle",
            review: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"'
        },
        {
            id: 2,
            heading: "What our customers are saying",
            image: Review,
            name: "Mich Stew",
            company: "Founder Circle",
            review: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"'
        },
        {
            id: 3,
            heading: "What our customers are saying",
            image: Review,
            name: "Bill Gates",
            company: "Founder Circle",
            review: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"'
        },
        {
            id: 4,
            heading: "What our customers are saying",
            image: Review,
            name: "John Wick",
            company: "Founder Circle",
            review: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"'
        },
        {
            id: 5,
            heading: "What our customers are saying",
            image: Review,
            name: "Samuel Ajayi",
            company: "Founder Circle",
            review: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"'
        },
        {
            id: 6,
            heading: "What our customers are saying",
            image: Review,
            name: "Hassan Jinadu",
            company: "Founder Circle",
            review: '“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"'
        }
    ]
    return ( 
        <div className="row my-5">
            <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2"></div>
            <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
            <Carousel showArrows={false} className="carousel" autoPlay infiniteLoop>
                {
                    reviews.map((reviews) => 
                        <div className="test-card py-5" key={reviews.id}>
                            <div className="header">
                                <h4>{reviews.heading}</h4>
                                <div className="test-dash mx-auto my-3"></div>
                            </div>
                            <div className="details d-flex justify-content-around align-items-end mt-5">
                                <div className="profile d-flex align-items-center">
                                    <div className="img">
                                    <img src={reviews.image} alt="reviewer" className="img-fluid"/>
                                    </div>
                                    <div className="name ms-3 mt-3">
                                        <h6>{reviews.name}</h6>
                                        <p className="">{reviews.company}</p>
                                    </div>
                                </div>
                                <div className="review">
                                    <p>{reviews.review}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Carousel>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
        </div>
    );
}
 
export default Testimonals;