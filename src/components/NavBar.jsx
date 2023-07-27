import { Link } from "react-router-dom";


const NavBar = () => {
    
return (
<div className="Navbar"> 
                    <div class="grid-container">
                        <div className="logo">BookWorm</div>
                            <div>
                                <ul className="nav-link">
                                    <li className="nav-li"><Link to={"/"} className="link-design">Home</Link></li>
                                    <li className="nav-li"><Link to={"/categories"} className="link-design">Categories</Link></li>
                                    <li className="nav-li"><Link to={"/about"} className="link-design">About</Link></li>
                                    <li className="nav-li"><Link to={"/contact"} className="link-design">Contact</Link></li>
                                </ul>
                            </div>
                        <div className="sign-up">
                            <button className="nav-btn"><Link to={"/login"} className="link-design">Login</Link></button>
                            
                            <button className="nav-btn"><Link to={"/signup"} className="link-design">Sign Up</Link></button>    
                            <button className="nav-btn"><Link to={"/shoppingcart"} className="link-design">Shopping Cart</Link></button>
                        </div>
                        
                    </div>
                </div>   
);            
}
export default NavBar;