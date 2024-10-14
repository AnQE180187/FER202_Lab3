import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./styles/styles.css";

import Header from "./component/Header";
import CarouselItem from "./component/Carousel";
import CardList from "./component/CardList";
import CartModal from "./component/CartModal"; 

const App = () => {
  const [showCart, setShowCart] = useState(false); // Cart modal state
  const [cart, setCart] = useState([]); // Cart state
  const [count, setCount] = useState(0); // Cart item count

 
  const handleShowCartModal = () => {
    setShowCart(true); // Show the cart modal
  };

  
  const handleCloseCart = () => setShowCart(false);

 
  const handleAddToCart = (item, quantity) => {
   
    const existingItem = cart.find((cartItem) => cartItem.title === item.title);

    if (existingItem) {
      
      const updatedCart = cart.map((cartItem) =>
        cartItem.title === item.title
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
      setCart(updatedCart);
    } else {
   
      const newItem = { ...item, quantity };
      setCart([...cart, newItem]);
    }

   
    setCount((prevCount) => prevCount + quantity);
  };

 
  const updateCart = (index, newQuantity) => {
    const updatedCart = [...cart];
    if (newQuantity === 0) {
      updatedCart.splice(index, 1); 
    } else {
      updatedCart[index].quantity = newQuantity; 
    }
    setCart(updatedCart);

    
    const newCount = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
    setCount(newCount);
  };

  return (
    <Container>
      
      <Header handleShow={handleShowCartModal} count={count} />
      
      
      <CarouselItem />

      
      <Row className="justify-content-center">
        <CardList
          apiUrl="https://api-demo-4gqb.onrender.com/products&#39"
          handleAddToCart={handleAddToCart}
        />
      </Row>

      
      <CartModal
        show={showCart}
        handleClose={handleCloseCart}
        cart={cart} 
        updateCart={updateCart} 
      />
    </Container>
  );
};

export default App;