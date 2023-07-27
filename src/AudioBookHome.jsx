import { useEffect, useState } from 'react';
import './App.css';
// import Arthat from '../images/Arthat.jpeg';
import { Link } from 'react-router-dom';

const imgStyle = {
  borderRadius: "20px",
  marginBottom: "10px"
}

function AudioDemo() {

  const [products, setProducts] = useState([])
  // Fetching code
  const getProducts = async () => {
    const response = await fetch('https://localhost:7264/api/ProductMasters'); 
    const data = await response.json;
    setProducts(await response.json());
    console.log(data);
  }

  useEffect ( () => {
    getProducts();
  },[])

  
 
  return (
    <div>
      <h1 class="popularBook">
        Audio
        <hr />
      </h1>
      <div class="grid-container-popular-books">
        
        
        {
            products.map((currentElement)=> {
              
              // const AuthButton = props => {
              //    let { currentElement.isRentable} = props;
              //    return isLoggedIn ? <button>Rent</button> : <button>Buy</button>;
              //   };
              return(
                  <div className="popularBook grow">
                  <img src={(`${currentElement.productImagePath}`)} style={imgStyle} alt={currentElement.productName} height="250px" width="150px" />
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

export default AudioDemo;