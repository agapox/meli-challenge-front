import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo col">
          <Link to="/">
            <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__small@2x.png" alt="Meli Logo" />
          </Link>
        </div>
        <div className="search-bar col">
          <form className="nav-search" action="https://www.mercadolibre.cl/jm/search" method="GET" role="search">
            <input
              type="text"
              className="nav-search-input"
              aria-label="Ingresa lo que quieras encontrar"
              name="as_word"
              placeholder="Buscar productos, marcas y más…"
              maxLength={120}
              autoFocus
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              autoComplete="off"
              value=""
              onChange={(ev) => console.log(ev.target.value)}
              aria-activedescendant=""
              aria-controls="cb1-list"
              aria-autocomplete="list"
              id="cb1-edit"
              aria-expanded="false"
              role="combobox" />
            <div className="vertical-divider"></div>
            <button type="submit" className="nav-search-btn">
              <div role="img" aria-label="Buscar" className="nav-icon-search"><i className="fa-solid fa-magnifying-glass"></i></div>
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
