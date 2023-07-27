import { Link } from "react-router-dom";
import Footer from './Footer'
import category from '../images/img3.jpg'
import { useEffect, useState } from 'react';
import ItemDescription1 from "./ItemDescription1";

const imgStyle = {
    borderRadius: "20px",
    marginBottom: "10px"
  }

const Suspense = () => {

const [products, setProducts] = useState([])
// Fetching code
const getProducts = async () => {
  const response = await fetch('https://localhost:7108/api/ProductsByGenre/5'); 
  setProducts(await response.json());
  // console.log(data);
}

useEffect ( () => {
  getProducts();
},[])
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

    <div class="grid-container-category">

        <div class="Menu">
        <ul>
            <li><Link to={"/Comedy"}>Comedy</Link></li>
            <li><Link to={"/Suspense"}>Suspense</Link></li>
            <li><Link to={"/Romance"}>Romance</Link></li>
            <li><Link to={"/Biography"}>Biography</Link></li>
           
        </ul>
        </div> 
        <div class="Main">
        <div class="grid-container-popular-books">
            {
            products.map((currentElement)=> {

                return(

                  <div class="popularBook grow">
                  <img src={currentElement.productImagePath} style={imgStyle} alt={currentElement.productImagePath} height="200px" width="150px" />
                  <p class="text1">{currentElement.productName}</p>
                  <p class="text1">{currentElement.productAuthor}</p>
                  <button><Link to={"/ItemDescription1/"+currentElement.productId}>view</Link></button>
                  </div>

                ) ;
            })
        }
            </div>
        </div>
        </div>

        <Footer />
        </>
    )
}
export default Suspense;