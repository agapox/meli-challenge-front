import './App.css';
import Breadcrumbs from './components/breadcrumbs/breadcrumbs';

import Header from './components/header/header';

const App = () => {
  return (
    <div className="App">
		<Header />
		<div id="main-container" className="container">
			<Breadcrumbs />
		</div>

    </div>
  );
}

export default App;
