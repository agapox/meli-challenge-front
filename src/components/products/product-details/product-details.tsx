import { useParams } from 'react-router-dom';

import ProductLike from '../product-like/product-like';
import './product-details.css';
import ProductFreeShipping from '../product-free-shipping/product-free-shipping';
import ProductCondition from '../product-condition/product-condition';
import formatNumber from '../../../utilities/formatNumber';
import { Item } from '../../../interfaces/items.interface';

const ProductDetails = ({product}: {product: Item}) => {
    const freeShipping = true;
    const { itemId } = useParams();

    return (
        <div className="product-details">
            <div className="product-details__one">
                <div className="product-details__img">
                    <img src={product.item.picture} alt={product.item.title} />
                </div>
                <div className="product-details__info">
                    <div className="product-details__info__new-sells">
                        <ProductCondition condition={product.item.condition}/>
                        <div className="like">
                            <ProductLike />
                        </div>
                    </div>
                    <h1 className="product-details__info__name">{product.item.title}</h1>
                    <p className="sells"><span>{formatNumber(product.item.sold_quantity)}</span> vendidos</p>
                    <p className="product-details__info__price">${formatNumber(product.item.price.amount)}</p>
                    <ProductFreeShipping freeShipping={product.item.free_shipping}/>
                    <button className="andes-button">Comprar</button>
                </div>
            </div>
            <div className="product-details__description">
                <h3>Descripción del producto</h3>
                <p>
                    { product.item.description }
                </p>
            </div>
        </div>
    )
}

export default ProductDetails;