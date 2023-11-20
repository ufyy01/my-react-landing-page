import './blog.css';
import {Blog1, Blog2, Blog3} from '../../asset'
import { BigButton } from '../StyledButton/Button.styles';

const Blog = () => {
    const blog = [
        {
            id: 1,
            image: Blog1,
            heading: "Disease detection, check up in the laboratory",
            paragraph: "In this case, the role of the health laboratory is very important to do a disease detection..."
        },
        {
            id: 2,
            image: Blog2,
            heading: "Herbal medicines that are safe for consumption",
            paragraph: "Herbal medicine is very widely used at this time because of its very good for your health..."
        },
        {
            id: 1,
            image: Blog3,
            heading: "Natural care for healthy facial skin",
            paragraph: "A healthy lifestyle should start from now and also for your skin health.There are some..."
        }
    ]
    return ( 
        <div className="blog my-5">
            <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-2 col-xl-2"></div>
            <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
                <div className="heading text-center my-5">
                    <h4>Check out our lastest article</h4>
                    <div className="dash mx-auto mt-3"></div>
                </div>
                <div className="row gx-4">
                    {blog.map((blog) =>
                        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 ">
                            <div className="card rounded-top rounded-3"  key={blog.id}>
                                <div className="card-img img-fluid">
                                    <img src={blog.image} alt="pic rounded-3" />
                                </div>
                                <div className="card-body">
                                    <h6>{blog.heading}</h6>
                                    <p className='mt-3'>{blog.paragraph}</p>
                                </div>
                                <a className='link ms-3 mb-3' href='/'>Read more
                                <svg xmlns="http://www.w3.org/2000/svg" height="15px" width="15px" className='ms-2' viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                                </a>
                            </div>
                        </div>
                    )}
                    <div className="button text-center my-5">
                        <BigButton>View all</BigButton>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
            </div>
        </div>
    );
}
 
export default Blog;