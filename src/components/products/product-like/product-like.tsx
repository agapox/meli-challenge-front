import { useState } from 'react';
import './product-like.css';

const ProductLike = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const toggleHeart = () => {
        setToggle(!toggle);
    }
    return (
        <a className="fav" onClick={toggleHeart}>
            <i
                className={ toggle ? 'fa-solid fa-heart' : 'fa-regular fa-heart' }></i>
        </a>
    )
}

export default ProductLike;