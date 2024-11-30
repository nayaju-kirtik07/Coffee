import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useCart } from "../../Context/CartContext";
import { useFilter } from "../../Context/FilterContext";
import "./Menu.css";

const Menu = () => {
  const { addToCart } = useCart();
  const { filterItems } = useFilter();

  const menuItems = [
    {
      id: 1,
      name: "Signature Espresso",
      description: "Our signature blend featuring rich, bold flavors with hints of chocolate and caramel. Perfect for those seeking an authentic coffee experience.",
      price: 200,
      image: "https://flightsquadelitef.eu/images/6e5a1770.png",
    },
    {
      id: 2,
      name: "Caramel Macchiato",
      description: "Smooth espresso layered with vanilla-flavored syrup, topped with caramel drizzle. A perfect balance of sweetness and coffee.",
      price: 350,
      image: "https://portfoliocoffee.ca/cdn/shop/articles/A_Guide_to_Caramel_Macchiato_-_Facts_Variations_and_Recipe.jpg?v=1657026128",
    },
    {
      id: 3,
      name: "Hazelnut Latte",
      description: "Creamy steamed milk and rich espresso blended with hazelnut flavor, topped with light foam. A nutty twist on a classic.",
      price: 350,
      image: "https://ik.imagekit.io/jq1luxum6oz/https://s3-ap-southeast-1.amazonaws.com/v3-live.image.oddle.me/product/HazelnutLatteHot62629b.jpg?tr=,h-1000",
    },
    {
      id: 4,
      name: "Cold Brew",
      description: "Slow-steeped for 20 hours, our cold brew is smooth and naturally sweet. Served over ice for a refreshing coffee experience.",
      price: 300,
      image: "https://wellnessmama.com/wp-content/uploads/cold-brew-coffee.jpg",
    },
    {
      id: 5,
      name: "Mocha Frappuccino",
      description: "A delightful blend of rich chocolate, fresh espresso, and creamy milk, topped with whipped cream and chocolate drizzle.",
      price: 400,
      image: "https://seasonedsprinkles.com/wp-content/uploads/2016/07/Mocha-Frappuccino-3.jpg",
    },
    {
      id: 6,
      name: "Vanilla Bean Latte",
      description: "Smooth espresso combined with natural vanilla bean paste and steamed milk, creating a luxuriously sweet and creamy experience.",
      price: 380,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRcN15r9t2VYq8Q99b9yyHXuabFHv-X3wPlg&s",
    }
  ];

  const filteredMenuItems = filterItems(menuItems);

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
  };

  return (
    <>
      <Navbar />
      <div className="menu-hero">
        <div className="menu-hero-content">
          <h1>Discover Our Coffee</h1>
          <p>Expertly crafted beverages made with love and passion</p>
        </div>
      </div>
      <div className="menu-page">
        <h2>Our Coffee Selection</h2>
        <div className="menu-container">
          {filteredMenuItems.map((item, index) => (
            <div
              key={item.id}
              className={`menu-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="menu-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="menu-content">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <div className="menu-footer">
                  <span className="price">Rs. {item.price}</span>
                  <button 
                    className="menu-order-button"
                    onClick={() => handleAddToCart(item)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
