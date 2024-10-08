import React, { useState, useEffect, useRef } from 'react';
import furniture from "../../images/furniture.jpg";
import prequalify from "../../images/prequal.jpg";
import tvs from "../../images/best-new-tvs.png";
import "../Baner/Baner.css";
import { Link } from 'react-router-dom';

const Baner = () => {
    const images = [furniture, tvs];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animationClass, setAnimationClass] = useState('');
    const intervalRef = useRef(null);

    const startAutoScroll = () => {
        intervalRef.current = setInterval(() => {
            handleNextClick();
        }, 3000);
    };

    const handlePrevClick = () => {
        setAnimationClass('slide-out-right');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setAnimationClass('slide-in-left');
        }, 0); 
        resetAutoScroll();
    };

    const handleNextClick = () => {
        setAnimationClass('slide-out-left');
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setAnimationClass('slide-in-right');
        }, 0); 
        resetAutoScroll();
    };

    const resetAutoScroll = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        startAutoScroll();
    };

    useEffect(() => {
        startAutoScroll();
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div className='baner'>
            <div id='imgslideshow' className='slideshow'>
                {images.map((image, index) => (
                    <div
                        className={`slide ${index === currentIndex ? 'active' : ''} ${animationClass}`}
                        key={index}
                    >
                        <a>
                            <Link to="/television"><img className='img' src={image} alt={`slide ${index + 1}`} /></Link> 
                        </a>
                        {index === 0 && (
                            <div>
                                <a className='detail'>See Details</a>
                            </div>
                        )}
                    </div>
                ))}
                <button className="prev1" onClick={handlePrevClick}>&#10094;</button>
                <button className="next1" onClick={handleNextClick}>&#10095;</button>
            </div>
            <div className='slid'>
                <a>
                    <img className='qualify' src={prequalify} alt="prequalify" />
                </a>
            </div>
        </div>
    );
}

export default Baner;
