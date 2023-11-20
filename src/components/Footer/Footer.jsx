import './Footer.css';
import {Logo} from '../../asset';

const Footer = () => {
    return ( 
        <div className="footer">
            <footer className=' footer text-center w-100 py-5 mt-5'>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
                    <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
                        <div className="row gx-5">
                            <div className="col-sm-12 col-md-12 col-lg-5 col-xl-5">
                                <div className='ms-5'>
                                    <div className=' logo'>
                                    <img src={Logo} alt="logo" className='img-fluid mb-2' />
                                    </div>
                                    <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                                    <p className='copy'>&copy; Trafalgar PTY LTD 2020. All rights reserved</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12  offset-lg-1 col-lg-2 col-xl-2">
                                <div>
                                    <h6 className='mt-3'>Company</h6>
                                    <ul>
                                        <li><a href="/">About</a></li>
                                        <li><a href="/">Testimonials</a></li>
                                        <li><a href="/">Find a doctor</a></li>
                                        <li><a href="/">Apps</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2">
                                <div>
                                    <h6 className='mt-3' >Region</h6>
                                    <ul>
                                        <li><a href="/">Indonesia</a></li>
                                        <li><a href="/">Signapore</a></li>
                                        <li><a href="/">HongKong</a></li>
                                        <li><a href="/">Canada</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2">
                                <div>
                                    <h6 className='mt-3'>Help</h6>
                                    <ul>
                                        <li><a href="/">Help center</a></li>
                                        <li><a href="/">Contact support</a></li>
                                        <li><a href="/">Instructions</a></li>
                                        <li><a href="/">How it works</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;