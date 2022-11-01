import './App.css';
import Row from './Row'
import productsList from './data/productsList';
import Banner from './Banner';
import { banner_adiclub, banner_thebe } from './data/images'
import categoryCards from './data/categoryCards';
import { whatsHotCards, trendingCards } from './data/teaserCards';
import LinksGroup from './LinksGroup';
import { linksGroups1 } from './data/linksGroups'
import { article1, article2 } from './data/articles';
import ArticlesContainer from './ArticlesContainer'

function App() {

  return (
    <>
    <Banner button={"SHOP NOW"} textColor={'white'} height={"23vw"} background={banner_adiclub} description={"adiClub members exclusive extra 20% off. Log in for discount reflected at cart. Exclusions apply. Terms and conditions apply."}/>
    <Banner button={"SHOP NOW"} title={'ADIDAS X THEBE MAGUGU'} description={"The latest collection of sporting vibrancy straight out of South Africa."} textColor={'white'} height={"43vw"} background={banner_thebe}/>
    <Row type='product' title="Still interested?" style={'big'} items={productsList.concat(productsList)} />
    <Row type='category' title={["WOMEN","MEN","KIDS"]} style={'indented'} items={[categoryCards,categoryCards,categoryCards]} />
    <Row type='product' title={["New Arrivals","What's trending","Release dates"]} style={'indented'} items={[productsList,productsList,productsList]} />
    <Row type='teaser' title="WHAT'S HOT" style={'indented wrapped'} items={whatsHotCards} />
    <Row type='product' title="BEST OF ADIDAS" style={'indented'} items={productsList.concat(productsList)} />
    <Row type='teaser' title="TRENDING" style={'indented wrapped'} items={trendingCards} />
    <LinksGroup title="NOW POPULAR IN MEN'S" items={linksGroups1} />
    <ArticlesContainer items={[article1,article2]} />
    </>
  );
}

export default App;
