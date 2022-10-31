import './App.css';
import ProductsRow from './ProductsRow'
import productsList from './data/productsList';
import Banner from './Banner';
import { banner_adiclub, banner_thebe } from './data/images'

function App() {

  return (
    <>
    <Banner button={"SHOP NOW"} textColor={'white'} height={"23vw"} background={banner_adiclub} description={"adiClub members exclusive extra 20% off. Log in for discount reflected at cart. Exclusions apply. Terms and conditions apply."}/>
    <Banner button={"SHOP NOW"} title={'ADIDAS X THEBE MAGUGU'} description={"The latest collection of sporting vibrancy straight out of South Africa."} textColor={'white'} height={"43vw"} background={banner_thebe}/>
    <ProductsRow title="Still interested?" style={'big'} items={productsList.concat(productsList)} />
    <ProductsRow title="New Arrivals" style={'indented'} items={productsList.concat(productsList)} />
    <ProductsRow title="BEST OF ADIDAS" style={'indented'} items={productsList.concat(productsList)} />
    </>
  );
}

export default App;
