// import { useState, useEffect, useContext } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
// import { CartContext } from "../contexts";
// import Cart from "../Cart";
// import Pizza from "../Pizza";

// feel free to change en-US / USD to your locale
// const intl = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
// });

export const Route = createLazyFileRoute("/media")({
  component: Order,
});

function Order() {
//   const [pizzaType, setPizzaType] = useState("pepperoni");
//   const [pizzaSize, setPizzaSize] = useState("M");
//   const [pizzaTypes, setPizzaTypes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [cart, setCart] = useContext(CartContext);

//   async function checkout() {
//     setLoading(true);

//     await fetch("/api/order", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         cart,
//       }),
//     });

//     setCart([]);
//     setLoading(false);
//   }

//   let price, selectedPizza;
//   if (!loading) {
//     selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
//     price = intl.format(
//       selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
//     );
//   }

//   useEffect(() => {
//     fetchPizzaTypes();
//   }, []);

//   async function fetchPizzaTypes() {
//     const pizzasRes = await fetch("/api/pizzas");
//     const pizzasJson = await pizzasRes.json();
//     setPizzaTypes(pizzasJson);
//     setLoading(false);
//   }

  return (
    <div className="order-page">
      <div className="order">
        <h2>Create Order</h2>
        
      </div>
      {/* {loading ? <h2>LOADING …</h2> : "merp"} */}
    </div>
  );
}