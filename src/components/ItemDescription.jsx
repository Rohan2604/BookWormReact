import { Link } from "react-router-dom";
import Footer from './Footer'

const ItemDescription = () => {
    return(
        <>
            <header>
                <div className="Navbar"> 
                    <div class="grid-container">
                        <div className="logo">BookWorm</div>
                            <div>
                                <ul className="nav-link">
                                    <li className="nav-li"><Link to={"/"}>Home</Link></li>
                                    <li className="nav-li"><Link to={"/categories"}>Categories</Link></li>
                                    <li className="nav-li"><Link to={"/about"}>About</Link></li>
                                    <li className="nav-li"><Link to={"/contact"}>Contact</Link></li>
                                </ul>
                            </div>
                        <div className="sign-up">
                            <button><Link to={"/SignUp"}>Sign Up</Link></button>
                        </div>
                    </div>
                </div>
            </header>
            <Footer />
        </>
    )
}
export default ItemDescription;