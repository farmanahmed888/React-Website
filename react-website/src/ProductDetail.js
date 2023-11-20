import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const ProductDetail = () => {
    const location = useLocation();
    const data = location.state;
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
                    <input type="number" defaultValue={1} />
                    <Link to="/Cart" className="btn" state ={data}> 
                        Add To Cart
                    </Link>
                    {/*add to cart button*/}
                    <h3>
                        Product Details <i className="fa fa-indent" aria-hidden="true" />
                    </h3>
                    <br />
                    <p>{data.Product_Details}</p>
                </div>
            </div>
        </div>

    );
}

export default ProductDetail;