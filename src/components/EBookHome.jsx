import './App.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
//import ItemDescription1 from './ItemDescription1';
const imgStyle = {
  borderRadius: "20px",
  marginBottom: "10px"
}
function EBookHome() {

  const [products, setProducts] = useState([])
  // Fetching code
  const getProducts = async () => {
    const response = await fetch('https://localhost:7108/api/ProductsByType/1'); 
    const data = await response.json;
    setProducts(await response.json());
    console.log(data);
  }
  


  useEffect ( () => {
    getProducts();
  },[])

  return (
    <div>
      <h1 class="popularBook" name="h1ebook">
        E-Book
        <hr />
      </h1>
      <div class="grid-container-popular-books">
        
        
        {
            products.map((currentElement)=> {

                return(

                  <div className="popularBook grow">
                  <img src={(`${currentElement.productImagePath}`)} style={imgStyle} alt={currentElement.productName} height="150px" width="100px" />
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

  );
}
// export function RentButton(currentElement) {
//   if(currentElement.isRentable)
//   return (
    
//     <button >
//       Buy
//     </button>
//   );
// }


export default EBookHome;
