import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const API = "http://localhost:8000/watches";
const Products = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const getApiData = async (url) => {
        try {
            const res = await axios.get(url);
            setMyData(res.data);
            setIsLoading(false);
        } catch (error) {
            setIsError(error.message);
        }
    }
    useEffect(() => {
        getApiData(`${API}`);
    }, [])
    return (
        <div className="Products">
            <div className="small container">
                {/*we have create an another row to add title and give user dropdown list with four options so they can select what they want*/}
                <div className="row row-2">
                    <h2>All Products</h2>
                </div>
                {/*experiment*/}

                {/*this time we will make 4 columns*/}
                {/*it contains 4 different products with heading h4, image, price <p> and rating star*/}
                {isLoading && <h1>Loading...</h1>}
                {isError !== "" && <h2>{isError}</h2>}
                <div className="grid">
                    {myData.map((post) => {
                        
                        const { id, name, cost } = post;
                        return (
                            <div className="card" key={id}>

                                <div className="row">
                                    <div className="col-4">
                                        <Link to={`/ProductDetail/${post.id}`} state={post}>
                                            <img src={post.Image} alt="img" />
                                            <br />
                                            <br />
                                            <h4>{name}</h4>
                                            <p>Price is : ₹{cost}</p>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>


                {/*experiment*/}
                {/*This is the same class which already have index.html consisting of 4 columns*/}


            </div>
        </div>
    );
}

export default Products;