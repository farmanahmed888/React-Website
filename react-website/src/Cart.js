import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./redux/cartSlice";
const Cart = () => {
    const cartitems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    const totalCost = cartitems.reduce((acc, item) => acc + item.cost, 0);
    console.log(totalCost);
    return (

        <div className="Cart">
            <div className="small container cart-page">
                <table>
                    <tbody>
                        <tr>
                            <th>Product</th>
                            <th>Subtotal</th>
                        </tr>
                        <tr>
                            <td>
                                <div className="cart-info">
                                    {
                                        cartitems.map(item => {
                                            return (
                                                <div className="cart-entries">
                                                    <h4>{item.name}</h4>
                                                    <button onClick={() => dispatch(removeFromCart({ id: item.id }))} className="cartButton">Remove</button>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </td>
                            <td className="price-in-cart">
                                <div className="cart-info">
                                    {
                                        cartitems.map(item => {
                                            return (
                                                <div className="cart-entries">
                                                    <h4>Price: ₹{item.cost}</h4>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </td>
                        </tr>


                    </tbody>
                </table>
                <div className="total-price">
                    <table>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>₹{totalCost}</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>₹{0.3 * totalCost}</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>₹{totalCost * 1.3}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default Cart;