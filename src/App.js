import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  let cart_val = ["Nothing here just yet!"]
  const [cart, setCart] = useState(cart_val)

  return (
    <div className="App">
      <div className="Main">
        <h1>Earth's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

        <div className="Grid">
          {bakeryData.map((bakeryData, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem name = {bakeryData.name} description={bakeryData.description} price={bakeryData.price} image={bakeryData.image} setCart={setCart} cart={cart}/> // replace with BakeryItem component
          ))}
        </div>
      </div>

      <div className="Cart">
        <h2>My Cart</h2>
        <div className="Items">
          {cart.map((cart,index) => (<p>{cart}</p>))}
        </div>
      </div>
    </div>
  );
}

export default App;
