import { useState } from 'react';
import './product-like.css';

const ProductLike = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const toggleHeart = () => {
        setToggle(!toggle);
    }
    return (
        <button className="fav" onClick={toggleHeart}>
            <i
                className={ toggle ? 'fa-solid fa-heart fa-lg' : 'fa-regular fa-heart fa-lg' }></i>
        </button>
    )
}

export default ProductLike;