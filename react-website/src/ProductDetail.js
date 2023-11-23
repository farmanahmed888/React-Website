import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";
import Review from "./Review";
const ProductDetail = () => {
    const location = useLocation();
    const data = location.state;
    const dispatch=useDispatch();
    return (
        <div className="small-container single-product">
            <div className="row">
                {/*we have created 2 columns, one for the image and other for the text
      related to an image*/}
                <div className="col-2">
                    <img src={data.Image} alt="product" width="50%" className="product" />
                </div>
                {/*column related to the text of single product*/}
                <div className="col-2">
                    <h1>{data.name}</h1>
                    <h4>Price is : ₹{data.cost}</h4>
                    {/*no of products*/}
                    <button className="btn" onClick={()=>{dispatch(addToCart(data))}}> 
                        Add To Cart
                    </button>
                    {/*add to cart button*/}
                    <h3>
                        Product Details <i className="fa fa-indent" aria-hidden="true" />
                    </h3>
                    <br />
                    <p>{data.Product_Details}</p>
                </div>
            </div>
            <Review></Review>
        </div>

    );
}

export default ProductDetail;