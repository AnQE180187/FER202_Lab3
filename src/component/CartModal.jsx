import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CartModal = ({ show, handleClose, cart, updateCart }) => {
  const cartItems = cart || [];

  // Calculate the total price of the items in the cart
  const totalCartPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ).toFixed(3);

  // Handle the change in quantity
  const handleQuantityChange = (index, e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 0) {
      updateCart(index, newQuantity); // Call parent function to update the cart
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Your cart is empty, Please add some.</p>
        ) : (
          <ul className="list-unstyled">
            {cartItems.map((item, index) => (
              <li key={index} className="d-flex mb-3 align-items-center justify-content-between">
                <div className="cart-item-left d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="modal-image me-3"
                  />
                  <div className="cart-item-details">
                    <h6>{item.title}</h6>
                    <p className="mb-1">
                      Price: ${item.price}
                    </p>
                    <Form.Control
                      type="number"
                      min="0"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(index, e)}
                      className="quantity-input"
                    />
                  </div>
                </div>
                <div className="cart-item-total">
                  ${(item.quantity * item.price).toFixed(3)}
                </div>
              </li>
            ))}
          </ul>
        )}
        <h5 className="mt-3">Total Price: ${totalCartPrice}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Proceed to Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
