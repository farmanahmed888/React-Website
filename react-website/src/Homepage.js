import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
const API = "http://localhost:8000/watches";
const Homepage = () => {
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
    console.log(myData[0]);
    return (
        <div className="combineall">
            <div className="row">
                {isLoading && <h1>Loading...</h1>}
                {isError !== "" && <h2>{isError}</h2>}
                <div className="col-2">
                    <h1>The Openworked Sandblasted</h1>
                    <p>
                        Speake-Marins One &amp; Two Openworked Sandblasted for 2023
                        <br />
                        brings to the forefront the concepts of harmony and balance in watch
                        design.
                    </p>
                    <Link to={`/ProductDetail/0`} state={myData[0]} >
                        <div className="btn">
                            Explore Now →
                        </div>
                    </Link>
                </div>
                <div className="col-2">
                    <img src={require("./img/image1.png")} alt="header" />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
