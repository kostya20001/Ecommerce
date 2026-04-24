import './ProductCard.css'

function ProductCard ({props}) {
    return(
        <div className="Card">
            <img 
                className="product-image"
                src="https://ir.ozone.ru/multimedia/1012312704.jpg" 
                alt="Телевизор LG"
            />
            <p className='brand'>производитель</p>
            <p className='model'>модель</p>
            <p>цена</p>
            <button className='ButtonCard'>Add to Cart</button>
        </div>
    );

}

export default ProductCard;