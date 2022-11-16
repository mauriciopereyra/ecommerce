import './App.css';
import Row from './Row'
import productsList from './data/productsList';
import Banner from './Banner';
import { banner_11, banner_adiclub, banner_members, banner_thebe } from './data/banners'
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
import BlackRow from './BlackRow';
import { homePromo } from './data/promos';
import {Route, Routes, useParams} from 'react-router-dom'
import ProductDetail from './ProductDetail';
import NotFound from './NotFound';
import Category from './Category';
import Wishlist from './Wishlist';
import { useSelector } from 'react-redux';
import Cart from './Cart';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={
        <>
          <Header topRow={topRow} mainMenu={mainMenu} logo={logo} fixed={true} />
          <BlackRow promo={homePromo} closable={true} style="body-black-row" />
          <Banner banner={banner_adiclub} textColor={'white'} style='banner-small' link="/category/men+featured+adiclub member exclusives" />
          <Banner banner={banner_11} textColor={'white'} link="/category/outlet" />
          <Banner button='black' banner={banner_members} style='banner-with-video' link="/category/men+featured+adiclub member exclusives" />
          <Row type='product' title="Still interested?" style={'big'} items={productsList.concat(productsList)} />
          <Row type='category' title={["WOMEN","MEN","KIDS"]} style={'indented'} items={[categoryCards,categoryCards,categoryCards]} />
          <Row type='product' title={["New Arrivals","What's trending","Release dates"]} style={'indented'} items={[productsList.concat(productsList,productsList,productsList),productsList,productsList]} />
          <Row type='teaser' title="WHAT'S HOT" style={'indented wrapped'} items={whatsHotCards} />
          <Row type='product' title="BEST OF ADIDAS" style={'indented'} items={productsList.concat(productsList)} />
          <Row type='teaser' title="TRENDING" style={'indented wrapped'} items={trendingCards} />
          <LinksGroup title="NOW POPULAR IN MEN'S" items={linksGroups1} />
          <ArticlesContainer items={[article1,article2]} />
        </>
      }></Route>
      <Route path="/product/:productId" element={
        <>
          <Header topRow={topRow} mainMenu={mainMenu} logo={logo} fixed={true} />
          <ProductDetail />
        </>
      }></Route>
      <Route path="/category/:categoryName" element={
        <>
          <Header topRow={topRow} mainMenu={mainMenu} logo={logo} fixed={true} />
          <Category />
        </>
      }></Route>
      <Route path="/wishlist" element={
        <>
          <Header topRow={topRow} mainMenu={mainMenu} logo={logo} fixed={true} />
          <Wishlist />
        </>
      }></Route>
      <Route path="/cart" element={
        <>
          <Header topRow={topRow} mainMenu={mainMenu} logo={logo} fixed={true} />
          <Cart />
        </>
      }></Route>
      <Route path='*' element={
        <>
          <Header topRow={topRow} mainMenu={mainMenu} logo={logo} fixed={true} />
          <NotFound />
        </>
      }></Route>
    </Routes>
    <CallToAction text={"BECOME A MEMBER & GET 15% OFF"} link="/category/men+featured+adiclub%20member%20exclusives" />
    <BigFooter items={bigFooter} />
    <BottomFooter items={bottomFooter} />
    </>
  );
}

export default App;
