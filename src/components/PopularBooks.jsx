import './App.css';
import { useEffect, useState } from 'react';
import ItemDescription1 from './ItemDescription1';
import { Link } from 'react-router-dom';
const imgStyle = {
  borderRadius: "20px",
  marginBottom: "10px"
}
function PopularBooks() {
  

    const [products, setProducts] = useState([])
    // Fetching code
    const getProducts = async () => {
      const response = await fetch('https://localhost:7108/api/ProductsByType/2'); 
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
        Popular Books
        <hr/>
      </h1>
      
      <div class="grid-container-popular-books">
        
        
        {
            products.map((currentElement)=> {

                return(

                  <div class="popularBook grow">
                  <img src={(`${currentElement.productImagePath}`)} style={imgStyle} alt={currentElement.productName} height="200px" width="150px" />
                  <p class="text1">{currentElement.productName}</p>
                  <p class="text1">{currentElement.productAuthor}</p>
                  <p>{currentElement.productId}</p>
                  {/* <button href={ItemDescription1}>Info</button> */}
                  <button><Link to={"/ItemDescription1/"+currentElement.productId}>view</Link></button>
                  </div>

                ) ;
            })
        }
      </div>
    </div>

  );
}

export default PopularBooks;
