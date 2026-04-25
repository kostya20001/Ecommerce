import './ProductCard.css'

function ProductCard ({props}) {
    return(
        <div className="Card">
            <div className='CardImage'>
            <img 
                className="product-image"
                src="https://img.mvideo.ru/Big/10033004bb6.jpg" 
                alt="Телевизор LG"
            />
            </div>
            <div className='CardBody'>
            <p className='brand'>производитель</p>
            <p className='model'>модель</p>
            <p className='price'>цена</p>
            <div className="card-content"></div>
            <button className='ButtonCard'>Add to Cart</button>
            </div>
        </div>
    );

}

export default ProductCard;