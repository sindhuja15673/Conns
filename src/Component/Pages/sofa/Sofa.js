// import React,{useContext} from 'react';

import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../saga/action/cartActions';
import "../Telivision/Television.css";
import tele1 from "../../../images/tele1.jpg";
import tele2 from "../../../images/tele2.jpg";
import tele3 from "../../../images/tele3.jpg";
import tele4 from "../../../images/tele4.jpg";
import data from "../../../products.json";
import Rating from "../../Rating";


const Sofa = () => {
    const dispatch = useDispatch();
    // const { addToCart } = useContext(CartContext);
    const [televisions, setTelevisions] = useState([]);
    const [filterName, setFilterName] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    useEffect(() => {
        console.log("Data loaded:", data);
        const televisionCategory = data.products.find(product => product.category === "Television");
        if (televisionCategory) {

            console.log("Television category found:", televisionCategory);
            
            const updatedTelevision = televisionCategory.items.map(item => ({
                ...item,
                averageRating: item.averageRating || 0,
                ratingsCount: item.ratingsCount || 0,
              }));
          setTelevisions(updatedTelevision);
        }
        else {
            console.log("No television category found");
        }
      }, []);

      const handleRateProduct = (index, newRating) => {
        const updatedTelevision = [...televisions];
        const product = updatedTelevision[index];
        product.averageRating = ((product.averageRating * product.ratingsCount) + newRating) / (product.ratingsCount + 1);
        product.ratingsCount += 1;

        setTelevisions(updatedTelevision);
        
    };
    
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
      };
      const getImagePath = (img) => {
        return require(`../../../images/${img}`);
    };

    const filteredTelevision = televisions.filter(product => {
        const matchesName = product.name.toLowerCase().includes(filterName.toLowerCase());
        const matchesMinPrice = minPrice === "" || parseFloat(product.price.replace(/[^0-9.-]+/g, "")) >= parseFloat(minPrice);
        const matchesMaxPrice = maxPrice === "" || parseFloat(product.price.replace(/[^0-9.-]+/g, "")) <= parseFloat(maxPrice);
        return matchesName && matchesMinPrice && matchesMaxPrice;
    });
    
    return (
        <div className='television'>
            <div className='tel1'>
                <div>
                    <h1>Television</h1>
                    <p>Items 1 - 24 of 118 products</p>
                </div>
                <div className='storedet'>
                        <div className='storedetail'>
                            <h3>Shop by Category</h3>
                            <li>Smart 4K TVs(78)</li>
                            <li>Samsung Neo QLED TVs(13)</li>
                            <li>Samsung QLED TVs(18)</li>
                            <li>OLED TVs(17)</li>
                            <li>Samsung Crystal UHD TVs(10)</li>
                            <li>LG QNED TVs(9)</li>
                            <a><li>Show 1 more</li></a>
                        </div>
                        <div className='storedetail'>
                            <h1>Get It Fast</h1>
                            <li>Delivery Tomorrow</li>
                            <li>Pickup Today</li>
                        </div>
                        <div className='storedetail'>
                            <h6>store</h6>
                            <div>
                                <h3>Conn's HomePlus Houston</h3>
                                <h6>0.43 miles</h6>
                            </div>
                            <a>Conn's HomePlus Houston</a>
                            <a>4446 NORTH FREEWAY</a>
                            <a>HOUSTON, Texas 77022</a>
                            <strong> (713)864-5490</strong>
                            <h4>Closes at 9:30 pm today</h4>
                        </div>

                        </div>
            </div>
            <div className='tel'>
            <div className='tele'>
                <h1>Up to 40% Off Big Screen TVs</h1>
                <h4>+Free Delivery and Installation on select LG & Samsung TVs.</h4>
                <p>Offer valid 7/1/24 to 7/7/24.<a href=''>*See Details.</a></p>
            </div>
            <div className='telimg'>
                <div><img src={tele1}></img>
                <h5>"80+"</h5></div>
                <div><img src={tele2}></img>
                <h5>70" to 79"</h5></div>
                <div><img src={tele3}></img>
                <h5>60" to 69"</h5></div>
                <div><img src={tele4}></img>
                <h5>50" to 59"</h5></div>
            </div>
            <div className='filters'>
                    <input
                        type="text"
                        placeholder="Filter by name"
                        value={filterName}
                        onChange={(e) => setFilterName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Min Price"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Max Price"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </div>
                <div className='telecart'>
                    {filteredTelevision.map((product, index) => (
                        <div key={index} className='teleimg'>
                            <img src={getImagePath(product.img)} alt={product.name}></img>
                            <div className='telecontent'>
                                <div>🔥 17 people bought in the past 30 days</div>
                                <p>4 More Options Available</p>
                                <a>{product.name}</a>
                                <h1>{product.price}</h1>
                                <p>Delivery</p>
                                <Rating
                                averageRating={product.averageRating}
                                ratingsCount={product.ratingsCount}
                                onRate={(newRating) => handleRateProduct(index, newRating)}
                            />
                            </div>
                            <div><button onClick={() => handleAddToCart(product)}>Add To Cart</button></div>
                        </div>
                    ))}
                </div>
            <br></br>
            </div>
        </div>
    );
}

export default Sofa;
