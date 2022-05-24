import "./product-free-shipping.css"

const ProductFreeShipping = ({ freeShipping }: { freeShipping: boolean }) => {
    return freeShipping ? (
        <p className="free-shipping">
            Envío gratis <i className="fa-solid fa-truck-fast"></i>
        </p>
    ) : null
}

export default ProductFreeShipping
