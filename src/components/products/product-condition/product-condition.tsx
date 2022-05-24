import "./product-condition.css"

const ProductCondition = ({ condition }: { condition: string }) => {
    return condition === "new" ? (
        <span className="condition new">Nuevo</span>
    ) : (
        <span className="condition used">Usado</span>
    )
}

export default ProductCondition
