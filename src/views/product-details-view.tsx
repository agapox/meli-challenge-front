import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs"
import ProductDetails from "../components/products/product-details/product-details"
import { ProductsContext } from "../context/productsContext"
import { Item } from "../interfaces/items.interface"

const ProductDetailsView = () => {
    const params = useParams()
    const [product, setProduct] = useState<Item | undefined>()

    const productsContext = useContext(ProductsContext)

    useEffect(() => {
        const getProduct = async () => {
            const item = await productsContext.getProductDetails(params.itemId)
            setProduct(item)
        }
        getProduct()
    })

    return (
        <div className="ui-search">
            <div className="container">
                {product?.item.category && (
                    <section>
                        <Breadcrumbs categories={product?.item.category} />
                    </section>
                )}
                {product && (
                    <section>
                        <ProductDetails product={product} />
                    </section>
                )}
            </div>
        </div>
    )
}

export default ProductDetailsView
