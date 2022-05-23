import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import PageNotFound from './views/404';
import ProductListView from './views/product-list-view';
import ProductDetailsView from './views/product-details-view';

const App = () => {
  return (
    <div className="App">
		<Header />
		<main id="main-container" role="main">
			<Routes>

				<Route path="/" element={
					<div className="container no-search">
						<h4>Busca tu producto en la barra de búsqueda</h4>
					</div>
				} />

				<Route path="items/:itemId" element={<ProductDetailsView />} />

				<Route path="/search" element={<ProductListView />}/>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</main>
    </div>
  );
}

export default App;
