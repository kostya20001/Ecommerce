import './Banner.css'

function Banner () {
    return (
        <div className='banner'> 
            <button className='close'>✕</button>
            <h3 className='title text'>Special Deal!</h3>
            <p className='text'>Register now to unlock exclusive offers and discounts</p>
            <p className='text  timer'>Offer expires in: </p>
        </div>
    );
}

export default Banner;