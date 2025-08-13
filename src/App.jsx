import React from "react";
import { Route, Routes} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/style.scss'
import './assets/css/materialdesignicons.min.css'
import Index from "./pages/index";
import Startup from "./pages/index/index-startup";
import IndexApplication from "./pages/index/index-application";
import Event from "./pages/index/index-event";
import IndexPersonal from "./pages/index/index-personal";
import IndexCharity from "./pages/index/index-charity";
import IndexBusiness from "./pages/index/index-business";
import IndexSaas from "./pages/index/index-saas";
import IndexCrypto from "./pages/index/index-crypto";
import IndexPortfolio from "./pages/index/index-portfolio";
import IndexPersonalBlog from "./pages/index/index-personal-blog";
import BlogGrid from "./pages/blog/blog-grid";
import BlogMasonry from "./pages/blog/blog-masonry";
import BlogList from "./pages/blog/blog-list";
import BlogGridSidebar from "./pages/blog/blog-grid-sidebar";
import BlogMasonrySidebar from "./pages/blog/blog-masonry-sidebar";
import BlogListSidebar from "./pages/blog/blog-list-sidebar";
import BlogImageGrid from "./pages/blog/blog-image-grid";
import BlogImageMasonry from "./pages/blog/blog-image-masonry";
import BlogImageGridSidebar from "./pages/blog/blog-image-grid-sidebar";
import BlogImageMasonrySidebar from "./pages/blog/blog-image-masonry-sidebar";
import BlogDetailOne from "./pages/blog/blog-detail-one";
import BlogDetailTwo from "./pages/blog/blog-detail-two";
import BlogDetailThree from "./pages/blog/blog-detail-three";
import BlogDetailFour from "./pages/blog/blog-detail-four";
import BlogDetailFive from "./pages/blog/blog-detail-five";
import BlogStandardPost from "./pages/blog/blog-standard-post";
import BlogSliderPost from "./pages/blog/blog-slider-post";
import BlogYoutubePost from "./pages/blog/blog-youtube-post";
import BlogVimeoPost from "./pages/blog/blog-vimeo-post";
import BlogHtmlVideoPost from "./pages/blog/blog-html-video-post";
import BlogAudioPost from "./pages/blog/blog-audio-post";
import BlogHtamAudioPost from "./pages/blog/blog-html-audio-post";
import BlogBlockquotePost from "./pages/blog/blog-blockquote-post";
import BlogAuthor from "./pages/blog/blog-author";
import IndexCorporate from "./pages/index/index-corporate";
import IndexSeo from "./pages/index/index-seo";
import IndexRestaurant from "./pages/index/index-restaurant";
import IndexFreelancer from "./pages/index/index-freelancer";
import IndexFashion from "./pages/index/index-fashion";
import ShopGrid from "./pages/shop/shop-grids";
import ProductDetails from "./pages/shop/shop-product-detail";
import ShopCart from "./pages/shop/shop-cart";
import ShopCheckout from "./pages/shop/shop-checkout";
import IndexFinance from "./pages/index/index-finance";
import IndexMarketing from "./pages/index/index-marketing";
import IndexCafe from "./pages/index/index-cafe";
import OnePage from "./pages/index/index-onepage";
import AboutUs from "./pages/page-aboutus";
import Service from "./pages/page-services";
import ServiceTwo from "./pages/page-services-two";
import SingleService from "./pages/page-single-service";
import Faqs from "./pages/page-faqs";
import Pricing from "./pages/page-pricing";
import PageTeam from "./pages/page-team";
import Comingsoon from "./pages/spcial/page-comingsoon";
import Maintenance from "./pages/spcial/page-maintenance";
import Error from "./pages/spcial/page-error";
import ClassicTwo from "./pages/portfolio/classic-two";
import ClassicThree from "./pages/portfolio/classic-three";
import ClassicFour from "./pages/portfolio/classic-four";
import ClassicFive from "./pages/portfolio/classic-five";
import ClassicSix from "./pages/portfolio/classic-six";
import ClassicSidebar from "./pages/portfolio/classic-sidebar";
import CreativeTwo from "./pages/portfolio/creative-two";
import CreativeThree from "./pages/portfolio/creative-three";
import CreativeFour from "./pages/portfolio/creative-four";
import CreativeFive from "./pages/portfolio/creative-five";
import CreativeSix from "./pages/portfolio/portfolio-creative-six";
import CreativeSidebar from "./pages/portfolio/creative-sidebar";
import ModernTwo from "./pages/portfolio/modern-two";
import ModernThree from "./pages/portfolio/modern-three";
import ModernFour from "./pages/portfolio/modern-four";
import ModernFive from "./pages/portfolio/modern-five";
import ModernSix from "./pages/portfolio/modern-six";
import ModernSidebar from "./pages/portfolio/modern-sidebar";
import MasonryTwo from "./pages/portfolio/masonry-two";
import MasonryThree from "./pages/portfolio/masonry-three";
import MasonryFour from "./pages/portfolio/masonry-four";
import MasonryFive from "./pages/portfolio/masonry-five";
import MasonrySix from "./pages/portfolio/masonry-six";
import MasonrySidebar from "./pages/portfolio/masonry-sidebar";
import PortfolioDetailOne from "./pages/portfolio/portfolio-detail-one";
import PortfolioDetailTwo from "./pages/portfolio/portfolio-detail-two";
import PortfolioDetailFour from "./pages/portfolio/portfolio-detail-four";
import PortfolioDetailThree from "./pages/portfolio/portfolio-detail-three";
import Contact from "./pages/page-contact";

function App() {
  return (
   <>
   <Routes>
     <Route path="/" element={<Index/>}/>
     <Route path="/index-startup" element={<Startup/>}/>
     <Route path="/index-application" element={<IndexApplication/>}/>
     <Route path="/index-event" element={<Event/>}/>
     <Route path="/index-personal" element={<IndexPersonal/>}/>
     <Route path="/index-charity" element={<IndexCharity/>}/>
     <Route path="/index-business" element={<IndexBusiness/>}/>
     <Route path="/index-saas" element={<IndexSaas/>}/>
     <Route path="/index-crypto" element={<IndexCrypto/>}/>
     <Route path="/index-portfolio" element={<IndexPortfolio/>}/>
     <Route path="/index-personal-blog" element={<IndexPersonalBlog/>}/>
     <Route path="/blog-grid" element={<BlogGrid/>}/>
     <Route path="/blog-masonry" element={<BlogMasonry/>}/>
     <Route path="/blog-list" element={<BlogList/>}/>
     <Route path="/blog-grid-sidebar" element={<BlogGridSidebar/>}/>
     <Route path="/blog-masonry-sidebar" element={<BlogMasonrySidebar/>}/>
     <Route path="/blog-list-sidebar" element={<BlogListSidebar/>}/>
     <Route path="/blog-image-grid" element={<BlogImageGrid/>}/>
     <Route path="/blog-image-masonry" element={<BlogImageMasonry/>}/>
     <Route path="/blog-image-grid-sidebar" element={<BlogImageGridSidebar/>}/>
     <Route path="/blog-image-masonry-sidebar" element={<BlogImageMasonrySidebar/>}/>
     <Route path="/blog-detail-one" element={<BlogDetailOne/>}/>
     <Route path="/blog-detail-two" element={<BlogDetailTwo/>}/>
     <Route path="/blog-detail-two/:id" element={<BlogDetailTwo/>}/>
     <Route path="/blog-detail-three" element={<BlogDetailThree/>}/>
     <Route path="/blog-detail-three/:id" element={<BlogDetailThree/>}/>
     <Route path="/blog-detail-four" element={<BlogDetailFour/>}/>
     <Route path="/blog-detail-five" element={<BlogDetailFive/>}/>
     <Route path="/blog-standard-post" element={<BlogStandardPost/>}/>
     <Route path="/blog-slider-post" element={<BlogSliderPost/>}/>
     <Route path="/blog-youtube-post" element={<BlogYoutubePost/>}/>
     <Route path="/blog-vimeo-post" element={<BlogVimeoPost/>}/>
     <Route path="/blog-html-video-post" element={<BlogHtmlVideoPost/>}/>
     <Route path="/blog-audio-post" element={<BlogAudioPost/>}/>
     <Route path="/blog-html-audio-post" element={<BlogHtamAudioPost/>}/>
     <Route path="/blog-blockquote-post" element={<BlogBlockquotePost/>}/>
     <Route path="/blog-author" element={<BlogAuthor/>}/>
     <Route path="/index-corporate" element={<IndexCorporate/>}/>
     <Route path="/index-seo" element={<IndexSeo/>}/>
     <Route path="/index-restaurant" element={<IndexRestaurant/>}/>
     <Route path="/index-freelancer" element={<IndexFreelancer/>}/>
     <Route path="/index-fashion" element={<IndexFashion/>}/>
     <Route path="/shop-grids" element={<ShopGrid/>}/>
     <Route path="/shop-product-detail" element={<ProductDetails/>}/>
     <Route path="/shop-product-detail/:id" element={<ProductDetails/>}/>
     <Route path="/shop-cart" element={<ShopCart/>}/>
     <Route path="/shop-checkout" element={<ShopCheckout/>}/>
     <Route path="/index-finance" element={<IndexFinance/>}/>
     <Route path="/index-marketing" element={<IndexMarketing/>}/>
     <Route path="/index-cafe" element={<IndexCafe/>}/>
     <Route path="/index-onepage" element={<OnePage/>}/>
     <Route path="/page-aboutus" element={<AboutUs/>}/>
     <Route path="/page-services" element={<Service/>}/>
     <Route path="/page-services-two" element={<ServiceTwo/>}/>
     <Route path="/page-single-service" element={<SingleService/>}/>
     <Route path="/page-faqs" element={<Faqs/>}/>
     <Route path="/page-pricing" element={<Pricing/>}/>
     <Route path="/page-team" element={<PageTeam/>}/>
     <Route path="/page-comingsoon" element={<Comingsoon/>}/>
     <Route path="/page-maintenance" element={<Maintenance/>}/>
     <Route path="/page-error" element={<Error/>}/>
     <Route path="*" element={<Error/>}/>
     <Route path="/portfolio-classic-two" element={<ClassicTwo/>}/>
     <Route path="/portfolio-classic-three" element={<ClassicThree/>}/>
     <Route path="/portfolio-classic-four" element={<ClassicFour/>}/>
     <Route path="/portfolio-classic-five" element={<ClassicFive/>}/>
     <Route path="/portfolio-classic-six" element={<ClassicSix/>}/>
     <Route path="/portfolio-classic-sidebar" element={<ClassicSidebar/>}/>
     <Route path="/portfolio-creative-two" element={<CreativeTwo/>}/>
     <Route path="/portfolio-creative-three" element={<CreativeThree/>}/>
     <Route path="/portfolio-creative-four" element={<CreativeFour/>}/>
     <Route path="/portfolio-creative-five" element={<CreativeFive/>}/>
     <Route path="/portfolio-creative-six" element={<CreativeSix/>}/>
     <Route path="/portfolio-creative-sidebar" element={<CreativeSidebar/>}/>
     <Route path="/portfolio-modern-two" element={<ModernTwo/>}/>
     <Route path="/portfolio-modern-three" element={<ModernThree/>}/>
     <Route path="/portfolio-modern-four" element={<ModernFour/>}/>
     <Route path="/portfolio-modern-five" element={<ModernFive/>}/>
     <Route path="/portfolio-modern-six" element={<ModernSix/>}/>
     <Route path="/portfolio-modern-sidebar" element={<ModernSidebar/>}/>
     <Route path="/portfolio-masonry-two" element={<MasonryTwo/>}/>
     <Route path="/portfolio-masonry-three" element={<MasonryThree/>}/>
     <Route path="/portfolio-masonry-four" element={<MasonryFour/>}/>
     <Route path="/portfolio-masonry-five" element={<MasonryFive/>}/>
     <Route path="/portfolio-masonry-Six" element={<MasonrySix/>}/>
     <Route path="/portfolio-masonry-sidebar" element={<MasonrySidebar/>}/>
     <Route path="/portfolio-detail-one" element={<PortfolioDetailOne/>}/>
     <Route path="/portfolio-detail-two" element={<PortfolioDetailTwo/>}/>
     <Route path="/portfolio-detail-three" element={<PortfolioDetailThree/>}/>
     <Route path="/portfolio-detail-four" element={<PortfolioDetailFour/>}/>
     <Route path="/page-contact" element={<Contact/>}/>
   </Routes>
   </>
  );
}

export default App;
