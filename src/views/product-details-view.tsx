import Breadcrumbs from "../components/breadcrumbs/breadcrumbs"
import ProductDetails from "../components/products/product-details/product-details"

const ProductDetailsView = () => {
    return (
        <div className="ui-search">
            <div className="container">
            <section>
                <Breadcrumbs categories={[]}/>
            </section>
            <section>
                <ProductDetails />
            </section>
            </div>
        </div>
    )
}

export default ProductDetailsView;