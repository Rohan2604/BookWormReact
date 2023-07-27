import { Link } from "react-router-dom";
import PopularBooks from "./PopularBooks";
import AddContainer1 from "./AddContainer1";
import AddContainer2 from "./AddContainer2";
import AddContainer3 from "./AddContainer3";
import AudioBookHome from "./AudioBookHome";
import EBookHome from "./EBookHome";
import VideoBookHome from "./VideoBookHome";
import Banner from './Banner';
import Footer from './Footer';
import { Cart2 } from "react-bootstrap-icons";
//import Home from "./Home";

const Home1 = () =>{

    return(
        <div>
            <>
                
                <div className="Navbar"> 
                    <div class="grid-container">
                        <div className="logo">BookWorm</div>
                            <div>
                                <ul className="nav-link">
                                    <li className="nav-li"><Link to={"/"} className="link-design">Home</Link></li>
                                    <li className="nav-li"><Link to={"/categories"} className="link-design">Categories</Link></li>
                                    <li className="nav-li"><Link to={"/about"} className="link-design">About</Link></li>
                                    <li className="nav-li"><Link to={"/contact"} className="link-design">Contact</Link></li>
                                    <li className="nav-li"><Link to={"/itemdescription1"} className="link-design">Item</Link></li>
                                </ul>
                            </div>
                        <div className="sign-up">
                            <button className="nav-btn"><Link to={"/"} className="link-design signup-btn">Logout</Link></button>   
                            <button className="nav-btn"><Link to={"/ShoppingCart"} className="link-design"><Cart2 /></Link></button>
                        </div>
                        
                    </div>
                </div>
                <Banner />
                <AddContainer2 />
                <PopularBooks />
                <AddContainer1 />
                <AudioBookHome />
                <EBookHome />
                <AddContainer3 />
                <VideoBookHome />
                
                
                <Footer />
            </>
        </div>
    )
}

export default Home1;
