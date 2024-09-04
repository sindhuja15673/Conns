import React, { useState, useEffect, useRef } from 'react';
import "../Brand/Brand.css";
import brand1 from '../../images/brand1.webp';
import brand2 from '../../images/brand2.webp';
import brand3 from '../../images/brand3.webp';
import brand4 from '../../images/brand4.webp';
import brand5 from '../../images/brand5.webp';
import brand6 from '../../images/brand6.webp';
import brand7 from '../../images/brand7.webp';
import brand8 from '../../images/brand8.jpg';
import brand9 from '../../images/brand9.webp';
import brand10 from '../../images/brand10.webp';
import brand11 from '../../images/brand11.webp';
import brand12 from '../../images/brand12.webp';
import brand13 from '../../images/brand13.webp';
import brand14 from '../../images/brand14.webp';
import brand15 from '../../images/brand15.webp';
import brand16 from '../../images/brand16.webp';

const images = [
    { src: brand1, name: "Samsung" },
    { src: brand2, name: "LG" },
    { src: brand3, name: "GE" },
    { src: brand4, name: "Hisense" },
    { src: brand5, name: "Villa Hill" },
    { src: brand6, name: "Dreamspot" },
    { src: brand7, name: "Tempur-Pedic" },
    { src: brand8, name: "Nectar" },
    { src: brand9, name: "Casper" },
    { src: brand10, name: "Purple" },
    { src: brand11, name: "Frigidaire" },
    { src: brand12, name: "Sony" },
    { src: brand13, name: "Bose" },
    { src: brand14, name: "HP" },
    { src: brand15, name: "Acer" },
    { src: brand16, name: "Stearns & Foster" }
];

const Brand = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);
    const intervalRef = useRef(null);
    const brandRef = useRef(null);

    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;
            if (width >= 1200) {
                setVisibleCount(4);
            } else if (width >= 992) {
                setVisibleCount(3);
            } else if (width >= 768) {
                setVisibleCount(2);
            } else {
                setVisibleCount(1);
            }
        };

        updateVisibleCount();
        window.addEventListener('resize', updateVisibleCount);

        return () => {
            window.removeEventListener('resize', updateVisibleCount);
        };
    }, []);

    useEffect(() => {
        startAutoScroll();
        return () => stopAutoScroll();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setCurrentIndex(0);
                    stopAutoScroll();
                    startAutoScroll();
                }
            },
            { threshold: 0.5 } 
        );

        if (brandRef.current) {
            observer.observe(brandRef.current);
        }

        return () => {
            if (brandRef.current) {
                observer.unobserve(brandRef.current);
            }
        };
    }, []);

    const startAutoScroll = () => {
        intervalRef.current = setInterval(() => {
            handleNextClick();
        }, 2000); 
    };

    const stopAutoScroll = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - visibleCount + images.length) % images.length);
        stopAutoScroll();
        startAutoScroll();
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + visibleCount) % images.length);
        stopAutoScroll();
        startAutoScroll();
    };

    const visibleImages = images.slice(currentIndex, currentIndex + visibleCount).concat(
        images.slice(0, (currentIndex + visibleCount) % images.length)
    ).slice(0, visibleCount);

    return (
        <div className='brand' ref={brandRef}>
            <h1>Brands We Love</h1>
            <div className='brandcontent'>
                <button className="prev2" onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll} onClick={handlePrevClick}>&#10094;</button>
                <div className="brand-items">
                    {visibleImages.map((image, index) => (
                        <div key={index}>
                            <a>
                                <img className='brandimg' src={image.src} alt={image.name} />
                                <h4>{image.name}</h4>
                            </a>
                        </div>
                    ))}
                </div>
                <button className="next2" onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll} onClick={handleNextClick}>&#10095;</button>
            </div>
        </div>
    );
}

export default Brand;
