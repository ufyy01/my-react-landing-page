import './blog.css';
import {Blog1, Blog2, Blog3} from '../../asset'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                                    <img src={blog.image} alt="image rounded-3" />
                                </div>
                                <div className="card-body">
                                    <h6>{blog.heading}</h6>
                                    <p className='mt-3'>{blog.paragraph}</p>
                                </div>
                                <a className='link ms-3 mb-3'>Read more
                                <FontAwesomeIcon icon="fa-solid fa-arrow-right" style={{color: "#4089ed",}} />
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