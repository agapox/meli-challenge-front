import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs';
import ProductDetails from './components/products/product-details/product-details';
import ProductItem from './components/products/product-item/product-item';
import PageNotFound from './views/404';

const App = () => {
  return (
    <div className="App">
		<Header />
		<main id="main-container" role="main">
			<div className="ui-search">
				<div className="container">
					<Routes>

						<Route path="/" element={
							<h4>Busca tu producto en la barra de búsqueda</h4>
						} />

						<Route path="items/:itemId" element={
							[<Breadcrumbs />, <ProductDetails />].map(el => (
								<>
									<section>
										{el}
									</section>
								</>
							))
						} />

						<Route path="/search" element={
							<>
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
								
							</>
						} />
						<Route path="*" element={
							<PageNotFound />
						} />
					</Routes>
				</div>
			</div>
		</main>

    </div>
  );
}

export default App;
