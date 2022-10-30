import './App.css';
import ProductsRow from './ProductsRow'
import productsList from './data/productsList';

function App() {



  return (
    <>
    <ProductsRow title="Still interested?" style={'big'} items={productsList} />
    <ProductsRow title="New Arrivals" style={'indented'} items={productsList} />
    <ProductsRow title="BEST OF ADIDAS" style={'indented'} items={productsList} />
    </>
  );
}

export default App;
