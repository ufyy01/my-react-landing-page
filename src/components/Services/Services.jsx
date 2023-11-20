import { Search, Jar, Record, Record2, Record3, First } from "../../asset";
import { StyleButton } from "../StyledButton/Button.styles";
import './services.css';
import '../../App.css';
import { BigButton } from "../StyledButton/Button.styles";

const Services = () => {
    const serviceItem = [
        {
            "id": 0,
            "image": Search,
            "heading": "Search doctor",
            "paragraph": "Choose your doctor from thousands of specialist, general, and trusted hospitals"
        },
        {
            "id": 1,
            "image": Jar,
            "heading": "Online pharmacy",
            "paragraph": "Buy  your medicines with our mobile application with a simple delivery system"
        },
        {
            "id": 2,
            "image": Record,
            "heading": "Consultation",
            "paragraph": "Free consultation with our trusted doctors and get the best recomendations"
        },
        {
            "id": 3,
            "image": Record2,
            "heading": "Detailed info",
            "paragraph": "Free consultation with our trusted doctors and get the best recomendations"
        },
        {
            "id": 4,
            "image": First,
            "heading": "Emergency care",
            "paragraph": "You can get 24/7 urgent care for yourself or your children and your lovely family"
        },
        {
            "id": 5,
            "image": Record3,
            "heading": "Tracking",
            "paragraph": "Track and save your medical history and health data "
        },
    ]

    const getItem = serviceItem.map((item) =>
        <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4">
            <div className="service-card px-3 py-4 my-2">
            <div key={item.id}>
                <div className="card-head">
                    <img src={item.image} alt="" className="img-fluid" />
                </div>
                <div className="cardItem-body mt-4">
                    <h4>{item.heading}</h4>
                    <p>{item.paragraph}</p>
                </div>
            </div>
        </div>
        </div>
        
        
    )

    return ( 
        <div className="services">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2"></div>
                <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
                    <div className="service-header text-center">
                    <h3>Our services</h3>
                    <div className="dash mx-auto"></div>
                    <p className="mt-3 px-5 mb-5">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
                    </div>
                    <div className="row gy-5 px-3 mt-2">
                        {getItem}
                    </div>
                    <div className="my-5 text-center">
                        <BigButton>Learn more</BigButton>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
            </div>
    
        </div>
    );
}
 
export default Services;