import { useContext, useEffect, useState } from "react"
import Breadcrumbs from "../components/breadcrumbs/breadcrumbs"
import ProductItem from "../components/products/product-item/product-item"
import { ProductsContext } from "../context/productsContext"
import { Items } from "../interfaces/items.interface"

const ProductListView = () => {
    const productsContext = useContext(ProductsContext)

    const [term, setTerm] = useState("")

    const [products, setProducts] = useState<Items | undefined>(undefined)

    useEffect(() => {
        const getProducts = async () => {
            const prod = await productsContext.getProductsList(term)
            setProducts(prod)
        }
        const getNavTerm = () => {
            const newTerm = productsContext.getSearchTerm()
            setTerm(newTerm)
        }
        getNavTerm()
        getProducts()
    }, [term, productsContext])

    return (
        <div className="ui-search">
            <div className="container">
                {products?.categories && (
                    <section>
                        <Breadcrumbs categories={products?.categories} />
                    </section>
                )}
                {products?.items && (
                    <section className="products-list">
                        <ol>
                            {products?.items.map((product) => (
                                <li key={product.id}>
                                    <ProductItem product={product} />
                                </li>
                            ))}
                        </ol>
                    </section>
                )}
            </div>
        </div>
    )
}

export default ProductListView
