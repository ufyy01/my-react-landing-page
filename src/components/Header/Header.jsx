import Imagetext from '../Imagetext/Imagetext';
import { header} from '../../asset';
import '../Header/header.css';


const Header = () => {
    const headerText = {
        heading: "Virtual healthcare for you",
        paragraph: "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone",
        button: "Consult today"
    }
    return ( 
        <div className='hero'>
            <Imagetext details={headerText} image={header} button="d-none" buttonright="d-block"/>
        </div>
     );
}
 
export default Header;