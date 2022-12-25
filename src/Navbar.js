import { Link } from 'react-router-dom';
import logo from './img/PM-logo.png';


const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Supplier Evaluation</h1>
        <div className="links">
            <Link to="/" >Home</Link>
            <Link to="/table">Table View</Link>
            <Link to="/card">Card View</Link>
            <Link to="/faq">FAQ</Link>
        </div>
        <div className="logo">
            <img src={logo} alt="LOGO" width="65" />
        </div>
        
        </nav>
        
    );
}
 
export default Navbar;