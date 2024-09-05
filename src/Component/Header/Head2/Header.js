import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Head2/Header.css";
import { GrLocation } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { BiDollarCircle } from "react-icons/bi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { RiHome5Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { TbMessageCircle } from "react-icons/tb";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';  // Import useSelector to access the Redux state

const Header = () => {
    const [storeDropdownVisible, setStoreDropdownVisible] = useState(false);
    const [accountDropdownVisible, setAccountDropdownVisible] = useState(false);
    const storeDropdownRef = useRef(null);
    const accountDropdownRef = useRef(null);
    
    const cart = useSelector((state) => state.cart.cart);

    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const toggleStoreDropdown = () => {
        setStoreDropdownVisible(!storeDropdownVisible);
        setAccountDropdownVisible(false); 
    };

    const toggleAccountDropdown = () => {
        setAccountDropdownVisible(!accountDropdownVisible);
        setStoreDropdownVisible(false); 
    };

    const handleClickOutside = (event) => {
        if (storeDropdownRef.current && !storeDropdownRef.current.contains(event.target)) {
            setStoreDropdownVisible(false);
        }
        if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target)) {
            setAccountDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const searchRoutes = {
        television: '/television',
        tv: '/television',
        electronics:'/television',
        appliances: '/appliances1',
        refridge: '/appliances1',
        washing: '/appliances1',
        dry: '/appliances1',
        computer: '/laptop',
        laptop:'/laptop',
        furniture:'/sofa',
        sofa:'/sofa',
        matress:'/matress2',
        bed:'/matress2',
        patio:'/patio',
        outdoor:'/patio',
        chair:'/patio',
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const query = searchQuery.toLowerCase();
        const matchedRoute = Object.keys(searchRoutes).find(key => query.includes(key));

        if (matchedRoute) {
            navigate(searchRoutes[matchedRoute]);
        } else {
            alert('No results found');
        }
    };

    return (
        <div className='header'>
           <Link to='/'> <div className='logo' ></div></Link>
            <div className='store' ref={storeDropdownRef}>
                <div>
                    <span className='img'><GrLocation /></span>
                    <span>My Store</span><strong>77022</strong>
                    <span className='img' onClick={toggleStoreDropdown}><IoIosArrowDown /></span>
                    <div className={`storedown ${storeDropdownVisible ? 'visible' : ''}`}>
                        <div className='storetitle'>
                            <strong>Find Your Nearby Stores</strong>
                            <span><IoMdClose onClick={toggleStoreDropdown} /></span>
                            <div className='code'>Your ZIP Code helps us to provide the most up-to-date product prices and delivery information.</div>
                        </div>
                        <div className="use">
                            <input className='int' placeholder='    7702'></input>
                            <br></br>
                            <a>use my location</a>
                        </div>
                        <div className='storedet'>
                            <div className='storedetail'>
                                <h6>store</h6>
                                <div>
                                    <h3>Conn's HomePlus Houston</h3>
                                    <h6>0.43 miles</h6>
                                </div>
                                <a>Conn's HomePlus Houston</a>
                                <a>4446 NORTH FREEWAY</a><br></br>
                                <a>HOUSTON, Texas 77022</a>
                                <strong> (713)864-5490</strong>
                                <h4>Closes at 9:30 pm today</h4>
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
                </div>
                <div className='time'><strong>Closes at 9:30pm</strong></div>
            </div>
            <form className='input' onSubmit={handleSearch}>
                <input 
                    className='input1' 
                    placeholder='Search (e.g., Sofa under $800)' 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className='button' type='submit'><IoSearch /></button>
            </form>
            <div className='titlecls'>
                <div className='title'>
                    <BiDollarCircle /><br></br>
                    <span className='title1'>Prequalify Now</span>
                </div>
                <div className='title'>
                    <RiMoneyDollarBoxFill /><br></br>
                    <span className='title1'><Link to="/bill">Pay My Bill</Link></span>
                </div>
                <div className='title' ref={accountDropdownRef} onClick={toggleAccountDropdown}>
                    <LuUser2 /><br></br>
                    <span className='title1'>My Account</span>
                    <div className={`dropdown ${accountDropdownVisible ? 'visible' : ''}`}>
                        <div className='dashtitle'>
                            My Account
                            <span><IoMdClose onClick={toggleAccountDropdown} /></span>
                        </div>
                        <div className='dash'>
                            <a className='dash1'>Sign in</a>
                            <a className='dash2'>Create Account</a>
                        </div>
                        <ul>
                            <li><Link to="/profile"><RiUserLine />Account Dashboard</Link></li>
                            <li><Link to="/profile"><RiHome5Line />My Shipping Addresses</Link></li>
                            <li><Link to="/profile">My Orders & Tracking</Link></li>
                            <li><Link to="/profile"><RiMoneyDollarCircleLine />Pay My Bill</Link></li>
                            <li><Link to="/profile"><FaRegHeart />My Lists</Link></li>
                            <li><Link to="/orders"><FaTools />Service Request</Link></li>
                            <li><Link to="/logout"><TbMessageCircle />Customer Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='title'>
                    <RiShoppingCartLine /><br></br>
                    <span className='title1'><Link to="/cart">Cart</Link></span>
                    {cart.length > 0 && <span className='cart-count'>{cart.length}</span>}
                </div>
            </div>
        </div>
    );
};

export default Header;
