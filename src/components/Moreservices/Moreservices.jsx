import Imagetext from "../Imagetext/Imagetext";
import { header2, header3 } from "../../asset";
import './moreservices.css';
import '../../App.css';

const Moreservices = () => {
    const services1 = {
        heading: "Leading healthcare providers",
        paragraph: "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver",
        button: "Learn more"
    }
    const services2 = {
        heading: "Download our mobile apps",
        paragraph: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
        button: "Download "
    }

    return ( 
        <div className="moreservices">
            <div className="first">
            <Imagetext details={services1} image={header2} buttonright="d-none" />
            </div>
            <div className="second">
            <Imagetext details={services2} image={header3} buttonright="d-none" />
            </div>
        </div>
    );
}

export default Moreservices;