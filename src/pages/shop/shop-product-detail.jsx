import React,{useState} from "react";
import { Link, useParams } from "react-router-dom";
import NavbarTwo from "../../components/navbar/navbarTwo";
import Product from "../../components/product"

import image1 from "../../assets/images/shop/items/f2.png"
import image2 from "../../assets/images/shop/items/b2.png"

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import { productData,productData2 } from "../../data/data";
import ShopFooter from "../../components/footer/shopFooter";
import ScrollTop from "../../components/scrollTop";
import {AiOutlineCheckCircle} from "../../assets/icons/vander"

export default function ProductDetails(){
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    const decrementCounter = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    };
    const params = useParams();
    const id = params.id
    const data = productData.find((item)=>item.id === parseInt(id))

    const settings = {
        container: '.tiny-single-item',
        items: 1,
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
      };
      const settings2 = {
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
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <section className="bg-half-80 d-table bg-primary bg-gradient w-100">
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">Branded Hoodie</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link to="/">Starty</Link></li>
                            <li className="breadcrumb-item"><Link to="/index-fashion">Fashion</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Product Detail</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5">
                        <div className="tiny-single-item">
                            <TinySlider settings={settings}>
                                <div className="tiny-slide"><img src={data?.image1? data.image1 : image1} className="img-fluid rounded" alt=""/></div>
                                <div className="tiny-slide"><img src={data?.image2? data.image2 : image2} className="img-fluid rounded" alt=""/></div>
                            </TinySlider>   
                        </div>
                    </div>

                    <div className="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-md-4">
                            <h4 className="title">{data?.product ? data.product : 'Branded Hoodie'}</h4>
                            <h5 className="text-muted">$21.00 <del className="text-danger ms-2">$25.00</del> </h5>
                            <ul className="list-unstyled text-warning h5 mb-0">
                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                                <li className="list-inline-item"><i className="mdi mdi-star"></i></li>
                            </ul>
                            
                            <h5 className="mt-4 py-2">Overview :</h5>
                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero exercitationem, unde molestiae sint quae inventore atque minima natus fugiat nihil quisquam voluptates ea omnis. Modi laborum soluta tempore unde accusantium.</p>
                        
                            <ul className="list-unstyled text-muted">
                                <li className="mb-0"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-0"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span> Our Talented &amp; Experienced Marketing Agency</li>
                                <li className="mb-0"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span> Create your own skin to match your brand</li>
                            </ul>

                            <div className="row mt-4 pt-2">
                                <div className="col-lg-6 col-12">
                                    <div className="d-flex shop-list align-items-center">
                                        <h6 className="mb-0">Your Size:</h6>
                                        <ul className="list-unstyled shop-icons mb-0 ms-3">
                                            <li className="list-inline-item"><Link to="3" className="btn btn-icon btn-soft-primary">S</Link></li>
                                            <li className="list-inline-item ms-1"><Link to="3" className="btn btn-icon btn-soft-primary">M</Link></li>
                                            <li className="list-inline-item ms-1"><Link to="3" className="btn btn-icon btn-soft-primary">L</Link></li>
                                            <li className="list-inline-item ms-1"><Link to="3" className="btn btn-icon btn-soft-primary">XL</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-12 mt-4 mt-lg-0">
                                    <div className="d-flex shop-list align-items-center">
                                        <h6 className="mb-0">Quantity:</h6>
                                        <div className="qty-icons ms-3">
                                            <button  onClick={decrementCounter}  className="btn btn-icon btn-primary minus">-</button>
                                            <input min="0" name="quantity"  type="number" placeholder={counter} className="btn btn-icon btn-primary qty-btn quantity mx-1"/>
                                            <button  onClick={incrementCounter} className="btn btn-icon btn-primary plus">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">Shop Now</Link>
                                <Link to="/shop-cart" className="btn btn-soft-primary ms-2">Add to Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <h4>Related Products</h4>

                    <div className="row">
                        <div className="col-12 mt-4 pt-2">
                            <TinySlider settings={settings2}>
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
        </section>
        <ShopFooter/>
        <ScrollTop/>
        </>
    )
}