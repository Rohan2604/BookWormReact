import { Link } from "react-router-dom";
import Footer from './Footer'
import { useEffect, useState } from 'react';

const imgStyle = {
    borderRadius: "20px",
    marginBottom: "10px"
  }

const Categories = () => {

const [products, setProducts] = useState([])
// Fetching code
const getProducts = async () => {
  const response = await fetch('https://localhost:7108/api/ProductMasters'); 
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
                                    <li className="nav-li"><Link to={"/"} className="link-design">Home</Link></li>
                                    <li className="nav-li"><Link to={"/categories"} className="link-design">Categories</Link></li>
                                    <li className="nav-li"><Link to={"/about"} className="link-design">About</Link></li>
                                    <li className="nav-li"><Link to={"/contact"} className="link-design">Contact</Link></li>
                                </ul>
                            </div>
                        <div className="sign-up">
                            <button><Link to={"/SignUp"} className="link-design">Sign Up</Link></button>
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
                    <div className="popularBook grow">
                    <img src={(`${currentElement.productImagePath}`)} style={imgStyle} alt={currentElement.productName} height="150px" width="130px" />
                    <p className="book-title"><table><tr><td><strong>Title</strong></td><td>{currentElement.productName}</td></tr></table></p>
                    <p className="item-text"><strong>Description</strong>{currentElement.productDescriptionShort}</p>
                    <p className="item-text"><strong>Author Name</strong>{currentElement.productAuthor}</p>
                    <button className="buy-btn"><Link to={"/ShoppingCart/"+currentElement.productId}></Link>Buy</button>
                    <button className="view"><Link to={"/ItemDescription1/"+currentElement.productId} className="link-design">View</Link></button>
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
export default Categories;