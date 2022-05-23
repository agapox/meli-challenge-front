import './App.css';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs';

import Header from './components/header/header';
import ProductItem from './components/products/product-item/product-item';

const App = () => {
  return (
    <div className="App">
		<Header />
		<main id="main-container" role="main">
			<div className="ui-search">
				<div className="container">
					<section>
						<Breadcrumbs />
					</section>
					<section className="products-list">
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
				</div>
			</div>
		</main>

    </div>
  );
}

export default App;
