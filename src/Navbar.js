import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Supplier Evaluation</h1>
        <div className="links">
            <Link to="/" >Home</Link>
            {/* <Link to="/tableview">Table View</Link> */}
        </div>
        </nav>
        
    );
}
 
export default Navbar;