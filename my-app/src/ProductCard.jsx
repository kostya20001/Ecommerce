import React, { useState } from 'react';
import './ProductCard.css'

const ProductCard = ({props}) => {

    const images = [
        "https://img.mvideo.ru/Big/10033004bb6.jpg",
        "https://img.mvideo.ru/Big/10033004bb1.jpg",
        "https://img.mvideo.ru/Big/10033004bb2.jpg",
        "https://img.mvideo.ru/Big/10033004bb3.jpg",
        "https://img.mvideo.ru/Big/10033004bb4.jpg"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const toggleLike = (e) => {
        e.stopPropagation(); // Чтобы событие не всплывало
        setIsLiked(!isLiked);
    };

    return(
        <div className="Card">
            <div className='CardImage'>
                <button 
                    className={`like-button ${isLiked ? 'liked' : ''}`}
                    onClick={toggleLike}
                    aria-label="Добавить в избранное"
                >
                    {isLiked ? '❤️' : '🤍'}
                </button>

                <img 
                    className="product-image"
                    src={images[currentImageIndex]} 
                    alt="Телевизор LG"
                />

                {images.length > 1 && (
                    <>
                        <button 
                            className="nav-button nav-button-left"
                            onClick={prevImage}
                            aria-label="Предыдущее изображение"
                        >
                            ‹
                        </button>
                        <button 
                            className="nav-button nav-button-right"
                            onClick={nextImage}
                            aria-label="Следующее изображение"
                        >
                            ›
                        </button>
                    </>
                )}

                {images.length > 1 && (
                    <div className="image-counter">
                        {currentImageIndex + 1} / {images.length}
                    </div>
                )}
            </div>

            <div className='CardBody'>
                <p className='brand'>производитель</p>
                <p className='model'>модель</p>
                <p className='price'>цена</p>
            <button className='ButtonCard'>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;