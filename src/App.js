import './App.css';
import Row from './Row'
import productsList from './data/productsList';
import Banner from './Banner';
import { banner_adiclub, banner_thebe } from './data/images'
import categoryCards from './data/categoryCards';
import CategoryCard from './CategoryCard';

function App() {

  return (
    <>
    <Banner button={"SHOP NOW"} textColor={'white'} height={"23vw"} background={banner_adiclub} description={"adiClub members exclusive extra 20% off. Log in for discount reflected at cart. Exclusions apply. Terms and conditions apply."}/>
    <Banner button={"SHOP NOW"} title={'ADIDAS X THEBE MAGUGU'} description={"The latest collection of sporting vibrancy straight out of South Africa."} textColor={'white'} height={"43vw"} background={banner_thebe}/>
    <Row type='product' title="Still interested?" style={'big'} items={productsList.concat(productsList)} />
    <Row type='category' title={["WOMEN","MEN","KIDS"]} style={'indented'} items={[categoryCards,categoryCards,categoryCards]} />
    <Row type='product' title={["New Arrivals","What's trending","Release dates"]} style={'indented'} items={[productsList,productsList,productsList]} />
    <Row type='product' title="BEST OF ADIDAS" style={'indented'} items={productsList.concat(productsList)} />
    </>
  );
}

export default App;
