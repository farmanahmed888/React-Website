import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./redux/cartSlice";
const Cart = () => {
    const cartitems = useSelector(state => state.cart.cart)
    const dispatch = useDispatch()
    console.log(cartitems);
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
                                                    <p>{item.name}</p>
                                                    <h4>Price: ₹{item.cost}</h4>
                                                    <button onClick={()=>dispatch(removeFromCart({id: item.id}))}>Remove</button>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </td>
                            <td>
                                
                            </td>
                            <td>₹abc</td>
                        </tr>


                    </tbody>
                </table>
                <div className="total-price">
                    <table>
                        <tbody>
                            <tr>
                                <td>Subtotal</td>
                                <td>$200.00</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>$30.00</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>$230.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default Cart;