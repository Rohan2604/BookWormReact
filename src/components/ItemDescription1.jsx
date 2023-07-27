import { Link } from "react-router-dom";
import Footer from './Footer'
import { useEffect, useState } from 'react';
import NavBar from "./NavBar";

import { useParams } from 'react-router-dom';
//import { addToCart } from './ShoppingCart';


const imgStyle = {
    borderRadius: "20px",
    marginBottom: "10px"
  }

const ItemDescription1 = () => {

    // const [products, setProducts] = useState([])
    // // Fetching code
    // const getProducts = async () => {
    //   const response = await fetch('https://localhost:7108/api/ProductMasters/'); 
    //   const data = await response.json;
    //   setProducts(await response.json());
    //   console.log(data);
    // }

    const [isRentable, setIsRentable] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState({});
const { productId } = useParams();
useEffect(() => {
fetch("https://localhost:7108/api/ProductMasters/" + productId)
.then(res => res.json())
.then((result) => { setProducts(result);
console.log(result);


}
);
}, {});


//  const addToCart = (product) => {
    
//     const itemIndex = cartItems.findIndex((item) => item.id === product.productId);
//     if (itemIndex === -1) {
//     //   sessionStorage.setCartItems([...cartItems, { ...product, quantity: 1 }]);

//     setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     sessionStorage.setItem('cartItems',JSON.stringify(cartItems));
      
//     } else {
//       const updatedItems = [...cartItems];
//       updatedItems[itemIndex].quantity++;
//     //   sessionStorage.setCartItems(updatedItems);
//     setCartItems(updatedItems);
//     sessionStorage.setItem('cartItems',JSON.stringify(cartItems));
     
//     }
    
//   };


function AddToCartButton(props) {
    const [cart, setCart] = useState([]);

    const addToCart = () => {
        const item = {
            id: props.id,
            name: props.name,
            price: props.price,
            quantity: 1
        };
        setCart([...cart, item]);
    }

    return (
        <button onClick={addToCart}>Add to Cart</button>
    );
}

    return(
        <>
            <header>
                <NavBar />
            </header>
            
            <div class="grid-container-item">
        
        
<div class="grid-container">
  <div class="grid-item">
                  <div class="popularBook grow">
                  <img src={products.productImagePath} style={imgStyle} alt={products.productName} height="400px" width="280px" />
                  </div>              
  </div>
                <div class="grid-item">

                  <div class="popularBook">
                  <b><p className="book-title"><strong>Title:</strong>{products.productName}</p></b>
                  <p className="item-text"><strong>Description:</strong>{products.productDescriptionLong}</p>
                  <p className="item-text"><strong>Author name:</strong>~{products.productAuthor}</p>
                  <p className="item-text"><strong>Selling Price:</strong>{products.productSellingPriceCost}</p>
                  <p className="item-text "><strong className="offer-price">Offer Price:</strong>{products.productOfferPrice}</p>
                 <button className="view " onClick={() => AddToCartButton(products)}><Link to={"ShoppingCart/"+products.productId} className="link-design">Add To Cart</Link></button>
                  
                  </div>

  </div>
</div>
        
        
      </div>

            <Footer />
        </>
    )
}
export default ItemDescription1;