import React from 'react'
import StyleButton from '../StyledButton/Button';
import { BigButton } from '../StyledButton/Button';
import '../../App.css';


const Imagetext = ({details,image,button, buttonright}) => {
    return (
        <div className=' row my-4'>
            <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
            <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
                <div className="row services">
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 align-self-center px-2 px-lg-0">
                    <div className="text">
                    <h2>{details.heading}</h2>
                    <div className="dash"></div>
                    <p className='my-4'>{details.paragraph}</p>
                    <StyleButton className={buttonright}>{details.button}</StyleButton>
                    <BigButton className={button}>{details.button}</BigButton>
                    </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className=' img'>
                        <img src={image} alt="header-image" className='img-fluid' />
                    </div>
                </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
        </div>
    )
}

export default Imagetext;
