import { useLocation } from "react-router-dom";
const Cart = () => {
    const location=useLocation();
    const shopped=location.state;
    console.log({shopped});
    return (
        
        <div className="Cart">
            <div className="small container cart-page">
                <table>
                    <tbody>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                        <tr>
                            <td>
                                <div className="cart-info">
                                    <img src={shopped.Image} alt="buy-1" />
                                    <div>
                                        <p>{shopped.name}</p>
                                        <small>Price: ₹{shopped.cost}</small>
                                        <a href="/">Remove</a>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <input type="number" defaultValue={1} />
                            </td>
                            <td>₹{shopped.cost}</td>
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