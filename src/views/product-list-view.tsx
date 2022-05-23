import Breadcrumbs from "../components/breadcrumbs/breadcrumbs";
import ProductItem from "../components/products/product-item/product-item";

const ProductListView = () => {
    return (
        <div className="ui-search">
            <div className="container">
            <section>
                <Breadcrumbs />
            </section>
            {
                true && <section className="products-list">
                    <ol>
                        {
                            [0,1,2,3,4,5,6,7,8].map(product => (
                                <li key={product}>
                                    <ProductItem />
                                </li>
                            ))	
                        }
                    </ol>
                </section>
            }
            </div>
        </div>
    )
}

export default ProductListView;