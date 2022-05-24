import { useNavigate, useSearchParams } from "react-router-dom"
import "./breadcrumbs.css"

const Breadcrumbs = ({ categories }: { categories: string[] }) => {
    const [searchParams] = useSearchParams()
    const isDetailsProductView = typeof searchParams.get("q") !== "string"
    const navigate = useNavigate()

    return (
        <ol className="andes-breadcrumb">
            {isDetailsProductView && (
                <li className="andes-breadcrumb__item">
                    <button onClick={() => navigate(-1)}>
                        Volver al listado
                    </button>
                    <span>|</span>
                </li>
            )}
            {categories.map((breadcrumbName: string, i: number) => (
                <li className="andes-breadcrumb__item" key={breadcrumbName}>
                    {breadcrumbName}
                    {i !== 0 && (
                        <div className="andes-breadcrumb__chevron">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="8"
                            >
                                <path
                                    fill="none"
                                    stroke="#727272"
                                    d="M1 0l4 4-4 4"
                                ></path>
                            </svg>
                        </div>
                    )}
                </li>
            ))}
        </ol>
    )
}

export default Breadcrumbs
