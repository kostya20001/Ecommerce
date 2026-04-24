import './ProductCard.css'

function ProductCard ({props}) {
    return(
        <div className="Card">
            <img 
                className="product-image"
                src="https://img.mvideo.ru/Big/10033004bb6.jpg" 
                alt="Телевизор LG"
            />
            <p className='brand'>производитель</p>
            <p className='model'>модель</p>
            <p className='price'>цена</p>
            <div className="card-content"></div>
            <button className='ButtonCard'>Add to Cart</button>
        </div>
    );

}

export default ProductCard;