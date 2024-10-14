import menu1 from "../Images/menu1.jpg";
import menu2 from "../Images/menu2.jpg";
import menu3 from "../Images/menu3.jpg";
import menu4 from "../Images/menu4.jpg";

// Array of Menu Items
export const data = [
    {
      id: 1,
      title: "Neapolitan Pizza",
      price: 12.99,
      originalPrice: 15.99,
      image: menu1,
      badge: "Best Seller",
    },
    {
      id: 2,
      title: "Pepperoni Pizza",
      price: 10.99,
      originalPrice: null,
      image: menu2,
    },
    {
      id: 3,
      title: "Cheese Pizza",
      price: 9.99,
      originalPrice: 12.99,
      image: menu3,
    },
    {
      id: 4,
      title: "Veggie Pizza",
      price: 11.99,
      originalPrice: 14.99,
      image: menu4,
      badge: "New",
    },
  ];

  export default data;