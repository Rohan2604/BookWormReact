import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [product, setProduct] = useState([]);
//   fetch("https://localhost:7032/api/ProductMasters")
//   .then(res => res.json())
//   .then((result) => { setProduct(result); })
  useEffect(() => {
    const items = JSON.parse(sessionStorage.getItem('cartItems') || '[]');
    setCartItems(items);
    
  }, []);


  // const addToCart = (product) => {

  //   const itemIndex = cartItems.findIndex((item) => item.id === product.productId);
  //   if (itemIndex === -1) {
  //     setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //   } else {
  //     const updatedItems = [...cartItems];
  //     updatedItems[itemIndex].quantity++;
  //     setCartItems(updatedItems);
  //   }
    
  // };
 
  const removeFromCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item.id === product.id);
    if (itemIndex !== -1) {
      const updatedItems = [...cartItems];
      if (updatedItems[itemIndex].quantity > 1) {
        updatedItems[itemIndex].quantity--;
      } 
      else {
        updatedItems.splice(itemIndex, 1);
      }
      setCartItems(updatedItems);
    }
  };

  useEffect(() => {
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.productSellingPriceCost,
    0
  );


  return (
    <Container>
      <Row>
        <Col>
          <Table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.productId}>
                  <td>{item.productImagePath}</td>
                  <td>{item.productName}</td>
                  <td>{item.productSellingPriceCost}</td>
                  
                   {/*<td>{item.quantity}</td>*/} 
                  <td>
                    <Button variant="danger" onClick={() => removeFromCart(item)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p>Total price: {totalPrice}</p>
        </Col>
      </Row>
      <Button variant="primary">
                      Buy
                    </Button>
    </Container> 
  );
};

export default ShoppingCart;