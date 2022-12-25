import { Link } from 'react-router-dom';

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
            <img src="./src/data/PM-logo.png" alt="LOGO" width="73" />
        </div>
        
        </nav>
        
    );
}
 
export default Navbar;