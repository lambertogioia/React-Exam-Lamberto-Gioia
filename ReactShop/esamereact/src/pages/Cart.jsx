import { useSelector, useDispatch } from "react-redux"
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cart/cartActions.js"
import { submitOrder } from "../redux/cart/orderactions.js"

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)
    
    const dispatch = useDispatch()

    
    const handleSubmit = () => {
    const orderData = {
      
      products: cartItems,
      createdAt: new Date(),
    }
  
    dispatch(submitOrder(orderData)) // quando devo invocare degli action creators thunk devo sempre usare dispatch
  }
    return(
        <><div>
            <h2>YOUR CART</h2>
            {cartItems.length === 0 ? (<p>Your Cart is Empty</p>) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.image}></img>
              <strong>
                {item.title} -- {item.quantity}
              </strong>
              <button onClick={() => dispatch(increaseQuantity(item.id))}>+1</button>
              <button onClick={() => dispatch(decreaseQuantity(item.id))}>-1</button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div>Cart Total: {total}</div>
      <button onClick={handleSubmit}>Submit Order</button>
      
            </div></>
    )
}

export default Cart