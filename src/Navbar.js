import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Supplier Evaluation</h1>
        <div className="links">
            <Link to="/" >Home</Link>
            <Link to="/table">Table View</Link>
            <Link to="/card">Card View</Link>
        </div>
        </nav>
        
    );
}
 
export default Navbar;