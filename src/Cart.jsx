import React, { useContext } from "react";
import CartContext from "./CartContext";

const Cart = () => {
  const { cart, setcart } = useContext(CartContext);

  const removefromccart = (id) => {
    setcart(cart.filter((e) => e.id != id));
  };

  const decrease = (id) => {
    setcart(
      cart.map((e) =>
        e.id === id && e.amount > 0 ? { ...e, amount: e.amount - 1 } : e
      )
    );
  };

  const increase = (id) => {
    setcart(cart.map((e) => (e.id == id ? { ...e, amount: e.amount + 1 } : e)));
  };

  const clearCart = () => {
    setcart([]);
  };

  // Total price calculation
  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price.slice(1)) * item.amount,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart">
        {cart.length === 0 ? (
          <h1>Cart is empty</h1>
        ) : (
          cart.map((ele) => (
            <div className="cartitem" key={ele.id}>
              <img src={ele.image}height="100px" width="100px" alt={ele.title} />
              <h5>{ele.title}</h5>
              <h6>
                amount:
                <span className="amount-control">
                  <button onClick={() => decrease(ele.id)}>-</button>
                  <span>{ele.amount}</span>
                  <button onClick={() => increase(ele.id)}>+</button>
                </span>
              </h6>
              <button
                className="remove-button"
                onClick={() => removefromccart(ele.id)}
              >
                <i className="nf nf-md-delete"></i>
              </button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="checkout-section">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button className="checkout-button">Proceed to Checkout</button>
          <button className="clear-cart-button" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
