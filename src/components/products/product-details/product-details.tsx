import ProductLike from '../product-like/product-like';
import './product-details.css';
import ProductFreeShipping from '../product-free-shipping/product-free-shipping';
import ProductCondition from '../product-condition/product-condition';
import formatNumber from '../../../utilities/formatNumber';

const ProductDetails = () => {
    const freeShipping = true;
    return (
        <div className="product-details">
            <div className="product-details__one">
                <div className="product-details__img">
                    <img src="https://http2.mlstatic.com/D_NQ_NP_2X_641309-MLA45993881187_052021-F.webp" alt="" />
                </div>
                <div className="product-details__info">
                    <div className="product-details__info__new-sells">
                        <ProductCondition condition={'new'}/>
                        <div className="like">
                            <ProductLike />
                        </div>
                    </div>
                    <h1 className="product-details__info__name">Product Name</h1>
                    <p className="sells"><span>{formatNumber(1232)}</span> vendidos</p>
                    <p className="product-details__info__price">${formatNumber(12365156)}</p>
                    <ProductFreeShipping freeShipping={freeShipping}/>
                    <button className="andes-button">Comprar</button>
                </div>
            </div>
            <div className="product-details__description">
                <h3>Descripción del producto</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate delectus eius voluptate reprehenderit nesciunt, fugiat sed libero mollitia quidem. Voluptatum fugit perspiciatis ea, similique cupiditate maxime necessitatibus neque nobis exercitationem?
                </p>
            </div>
        </div>
    )
}

export default ProductDetails;