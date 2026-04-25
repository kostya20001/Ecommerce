import React, { useState } from 'react';
import './Counter.css'

function Counter ({props}) {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p className='count-products'>{count} products</p>
        </div>
    );
}

export default Counter;