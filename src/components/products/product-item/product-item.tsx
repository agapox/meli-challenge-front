import './product-item.css';
import item from './item.json';
import { ItemOfItems } from '../../../interfaces/items.interface';
import ProductCondition from '../product-condition/product-condition';
import formatNumber from '../../../utilities/formatNumber';
import ProductLike from '../product-like/product-like';

const ProductItem = () => {

    const product: ItemOfItems = item;
    return (
        <div className="andes-card">
            <div className="ui-search-result__image">
                <img src={product.picture} alt={product.title} />
            </div>
            <div className="ui-search-result__content-wrapper">
                <div>
                    <span className="price">$ { formatNumber(product.price.amount) }</span>
                    <ProductCondition condition={'new'} />
                </div>
                <div>
                    <p className="title">{ product.title }</p>
                    { product.free_shipping && <p className="free-shipping">Envío gratis</p> }
                </div>
            </div>
            <div className="like">
                <ProductLike />
            </div>
        </div>
    )
}

export default ProductItem;