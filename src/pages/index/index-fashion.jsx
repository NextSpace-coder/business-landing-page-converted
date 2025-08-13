import React,{useEffect} from "react";
import { Link } from "react-router-dom";

import bg1 from "../../assets/images/shop/01.jpg"
import bg2 from "../../assets/images/shop/02.jpg"
import shape from "../../assets/images/shop/rounded-shape.png"
import image1 from "../../assets/images/shop/items/f1.png"
import image2 from "../../assets/images/shop/items/bag.png"

import NavbarTwo from "../../components/navbar/navbarTwo";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { productData,productData2 } from "../../data/data";

// import { WOW } from 'wowjs'
// import "../../../node_modules/wowjs/css/libs/animate.css"
import BlogOne from "../../components/blog/blogOne";
import Product from "../../components/product";

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import ShopFooter from "../../components/footer/shopFooter";
import ScrollTop from "../../components/scrollTop";

const settings = {
    container: '.tiny-four-item',
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
    responsive: {
        992: {
            items: 4
        },

        767: {
            items: 2
        },

        320: {
            items: 1
        },
    },
  };

export default function IndexFashion(){

    useEffect(()=>{
        const wow = new WOW.WOW({live: false});
        wow.init({
        duration: 1000
        });
    })

    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu " navDark={true}/>

        <section className="home-slider position-relative">
            <Carousel showArrows={false} selectedItem={false} infiniteLoop={true} autoPlay={true} interval={3000} showStatus={false}>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-home d-flex align-items-center" style={{backgroundImage:`url(${bg1})`}}>
                            <div className="bg-overlay bg-gradient-white-overlay"></div>
                            <div className="container">
                                <div className="row mt-5 mt-sm-0 align-items-center">
                                    <div className="col-lg-6 offset-lg-6 col-md-8 offset-md-4">
                                        <div className="title-heading mt-4 position-relative">
                                            <h4 className="heading fw-bold mb-3 animated fadeInUpBig animation-delay-1">Simple <span className="position-relative text-type-element">Cotton</span> <br/> T-Shirts</h4>
                                            <p className="text-muted title-dark mx-auto para-desc animated fadeInUpBig animation-delay-2">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                                            
                                            <div className="mt-4 pt-2">
                                                <Link to="#" className="btn btn-primary animated fadeInUpBig animation-delay-3">Explore Now</Link>
                                            </div>

                                            <div className="position-absolute top-0 start-50 translate-middle">
                                                <img src={shape} className="mover" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-home d-flex align-items-center" style={{backgroundImage:`url(${bg2})`}}>
                            <div className="bg-overlay bg-gradient-white-overlay"></div>
                            <div className="container">
                                <div className="row mt-5 mt-sm-0 align-items-center">
                                    <div className="col-lg-6 col-md-8">
                                        <div className="title-heading mt-4 position-relative">
                                            <h4 className="heading fw-bold mb-3 animated fadeInUpBig animation-delay-1">Biggest <br/> <span className="position-relative text-type-element">Collection</span> Ever</h4>
                                            <p className="text-muted title-dark mx-auto para-desc animated fadeInUpBig animation-delay-2">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                                            
                                            <div className="mt-4 pt-2">
                                                <Link to="#" className="btn btn-primary animated fadeInUpBig animation-delay-3">Shop Now</Link>
                                            </div>

                                            <div className="position-absolute top-0 start-0 translate-middle">
                                                <img src={shape} className="mover" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Carousel>
        </section>

        <section className="section pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5 className="mb-0">Most Viewed Products</h5>
                    </div>
                </div>

                <div className="row">
                    {productData.map((item,index)=>{
                        return(
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                                <Product item={item}/>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row g-4">
                    <div className="col-lg-6 col-md-6">
                        <div className="bg-soft-secondary shop-advertise rounded p-4 py-md-5 px-lg-5">
                            <div className="border border-2 rounded p-4 py-md-5 px-lg-4 me-lg-5">
                                <ul className="card list-unstyled mb-0">
                                    <li><Link to="#" className="h4 text-dark">Mid Season Sale <br/> Up To 50% Off</Link></li>
    
                                    <li className="mt-4"><Link to="#" className="text-secondary border-bottom">Shop now</Link></li>
                                </ul>
                                <img src={image1} className="img-fluid ad-image" alt=""/>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-lg-6 col-md-6">
                        <div className="bg-soft-info shop-advertise rounded p-4 py-md-5 px-lg-5">
                            <div className="border border-2 rounded p-4 py-md-5 px-lg-4 me-lg-5">
                                <ul className="card list-unstyled mb-0">
                                    <li><Link to="#" className="h4 text-dark">Summer Sale <br/> Up To 30% Off</Link></li>
    
                                    <li className="mt-4"><Link to="#" className="text-secondary border-bottom">Shop now</Link></li>
                                </ul>
    
                                <img src={image2} className="img-fluid ad-image" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-12">
                        <h5 className="mb-0">Popular Products</h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-4 pt-2">
                        <div className="tiny-four-item">
                            <TinySlider settings={settings}>
                                {productData2.map((item,index)=>{
                                    return(
                                    <div className="tiny-slide" key={index}>
                                        <Product item={item}/>
                                    </div>
                                    )
                                })}
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
              <BlogOne/>
            </div>
        </section>
        <ShopFooter/>
        <ScrollTop/>
        </>
    )
}