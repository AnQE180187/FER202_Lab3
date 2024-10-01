import { useState } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Handle when user clicks "Buy"
  const handleBuyClick = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item);
    
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.name === item ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { name: item, quantity: 1 }]);
    }
  };

  // Handle quantity change (+ or -)
  const handleQuantityChange = (itemName, increment) => {
    setCartItems(cartItems.map(item => {
      if (item.name === itemName) {
        const updatedQuantity = item.quantity + increment;
        return { ...item, quantity: updatedQuantity > 0 ? updatedQuantity : 0 };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  // Calculate total items in the cart
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return { cartItems, handleBuyClick, handleQuantityChange, totalItemsInCart };
};