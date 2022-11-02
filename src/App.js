import './App.css';
import Row from './Row'
import productsList from './data/productsList';
import Banner from './Banner';
import { banner_adiclub, banner_thebe } from './data/banners'
import categoryCards from './data/categoryCards';
import { whatsHotCards, trendingCards } from './data/teaserCards';
import LinksGroup from './LinksGroup';
import { linksGroups1 } from './data/linksGroups'
import { article1, article2 } from './data/articles';
import ArticlesContainer from './ArticlesContainer'
import CallToAction from './CallToAction';
import BigFooter from './BigFooter';
import { bigFooter, bottomFooter } from './data/footer'
import BottomFooter from './BottomFooter';
import Header from './Header';
import { mainMenu, topRow, logo } from './data/header';

function App() {

  return (
    <>
    <Header topRow={topRow} mainMenu={mainMenu} logo={logo} />
    <Banner button={"SHOP NOW"} textColor={'white'} height={"23vw"} background={banner_adiclub.background} description={banner_adiclub.description}/>
    <Banner button={"SHOP NOW"} title={banner_thebe.title} description={banner_thebe.description} textColor={'white'} height={"43vw"} background={banner_thebe.background}/>
    {/* <Row type='product' title="Still interested?" style={'big'} items={productsList.concat(productsList)} />
    <Row type='category' title={["WOMEN","MEN","KIDS"]} style={'indented'} items={[categoryCards,categoryCards,categoryCards]} />
    <Row type='product' title={["New Arrivals","What's trending","Release dates"]} style={'indented'} items={[productsList,productsList,productsList]} />
    <Row type='teaser' title="WHAT'S HOT" style={'indented wrapped'} items={whatsHotCards} />
    <Row type='product' title="BEST OF ADIDAS" style={'indented'} items={productsList.concat(productsList)} />
    <Row type='teaser' title="TRENDING" style={'indented wrapped'} items={trendingCards} />
    <LinksGroup title="NOW POPULAR IN MEN'S" items={linksGroups1} />
    <ArticlesContainer items={[article1,article2]} />
    <CallToAction text={"BECOME A MEMBER & GET 15% OFF"} />
    <BigFooter items={bigFooter} />
    <BottomFooter items={bottomFooter} /> */}
    </>
  );
}

export default App;
