import { useContext, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { ProductsContext } from "../../context/productsContext"
import "./header.css"

const Header = () => {
    const [searchItem, setSearchItem] = useState<string>("")
    const navitage = useNavigate()
    const [searchParams] = useSearchParams()

    const productsContext = useContext(ProductsContext)

    const textPattern = "^[a-z,A-Z,0-9,' ']+$"
    const textRegex = new RegExp(textPattern)

    const handleChange = (val: string) => {
        if (textRegex.test(val) || val === "") {
            setSearchItem(val)
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (searchItem !== "" && searchItem !== searchParams.get("q")) {
            navitage("search?" + new URLSearchParams([["q", searchItem]]))
            productsContext.setSearchTerm(searchItem)
        }
    }

    return (
        <header>
            <div className="container">
                <div className="logo col">
                    <Link to="/">
                        <img
                            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__small@2x.png"
                            alt="Meli Logo"
                        />
                    </Link>
                </div>
                <div className="search-bar col">
                    <form
                        className="nav-search"
                        role="search"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            className="nav-search-input"
                            aria-label="Ingresa lo que quieras encontrar"
                            name="q"
                            placeholder="Buscar productos, marcas y más…"
                            maxLength={120}
                            autoFocus
                            autoCapitalize="off"
                            autoCorrect="off"
                            spellCheck={false}
                            autoComplete="off"
                            value={searchItem}
                            onChange={(ev) => handleChange(ev.target.value)}
                            aria-activedescendant=""
                            aria-controls="cb1-list"
                            aria-autocomplete="list"
                            id="cb1-edit"
                            aria-expanded="false"
                            role="combobox"
                        />
                        <div className="vertical-divider"></div>
                        <button type="submit" className="nav-search-btn">
                            <div
                                role="img"
                                aria-label="Buscar"
                                className="nav-icon-search"
                            >
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </div>
                        </button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header
