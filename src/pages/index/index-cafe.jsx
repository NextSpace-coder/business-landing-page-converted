import React,{useEffect} from "react";
import { Link } from "react-router-dom";

import bg1 from "../../assets/images/bg/cafe02.jpg"
import bg2 from "../../assets/images/bg/cafe-cta01.jpg"
import bg3 from "../../assets/images/bg/cafe01.jpg"
import about1 from "../../assets/images/icon/cafe/coffee-time.svg"
import about2 from "../../assets/images/icon/cafe/pot.svg"
import about3 from "../../assets/images/icon/cafe/coffee-beans.svg"
import about4 from "../../assets/images/icon/cafe/coffee.svg"
import about5 from "../../assets/images/icon/cafe/drip-glass.svg"
import about6 from "../../assets/images/icon/cafe/coffee-cup.svg"
import services from "../../assets/images/cafe-services.png"
import cafe1 from "../../assets/images/portfolio/cafe/01.jpg"
import cafe2 from "../../assets/images/portfolio/cafe/02.jpg"
import cafe3 from "../../assets/images/portfolio/cafe/03.jpg"
import cafe4 from "../../assets/images/portfolio/cafe/04.jpg"
import cafe5 from "../../assets/images/portfolio/cafe/05.jpg"
import cafe6 from "../../assets/images/portfolio/cafe/06.jpg"
import cafe7 from "../../assets/images/portfolio/cafe/01.jpg"
import cafe8 from "../../assets/images/portfolio/cafe/02.jpg"
import cafe9 from "../../assets/images/portfolio/cafe/03.jpg"
import cafe10 from "../../assets/images/portfolio/cafe/04.jpg"
import client1 from "../../assets/images/client/01.jpg"
import client2 from "../../assets/images/client/02.jpg"
import client3 from "../../assets/images/client/03.jpg"
import image1 from "../../assets/images/cafe/02.jpg"
import image2 from "../../assets/images/cafe/03.jpg"
import image3 from "../../assets/images/cafe/01.jpg"
import sign from "../../assets/images/cafe/sign.png"
import NavbarTwo from "../../components/navbar/navbarTwo";

import { Parallax } from 'react-parallax';

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import CafeFooter from "../../components/footer/cafeFooter";
import ScrollTop from "../../components/scrollTop";

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

export default function IndexCafe(){
    useEffect(()=>{
        document.body.classList.add('cafe-css');
    },[])

    const aboutData = [
        {
            image:about1,
            title:'High Quality',
            desc:'Composed in a pseudo-Latin language which more or less pseudo-Latin.'
        },
        {
            image:about2,
            title:'Pure Grades',
            desc:'Composed in a pseudo-Latin language which more or less pseudo-Latin.'
        },
        {
            image:about3,
            title:'Proper Roasting',
            desc:'Composed in a pseudo-Latin language which more or less pseudo-Latin.'
        },
        {
            image:about4,
            title:'The Perfect Cup',
            desc:'Composed in a pseudo-Latin language which more or less pseudo-Latin.'
        },
        {
            image:about5,
            title:'Coffee Machine',
            desc:'Composed in a pseudo-Latin language which more or less pseudo-Latin.'
        },
        {
            image:about6,
            title:'Coffee to Go',
            desc:'Composed in a pseudo-Latin language which more or less pseudo-Latin.'
        },
    ]
    const menuData = [
        {
            image:cafe1,
            title:'Cafe Latte',
            desc:'A reader will be distracted by the readable',
            amount:'$13.79'
        },
        {
            image:cafe2,
            title:'Ice Coffee',
            desc:'A reader will be distracted by the readable',
            amount:'$12.49'
        },
        {
            image:cafe3,
            title:'Mocha',
            desc:'A reader will be distracted by the readable',
            amount:'$10.99'
        },
        {
            image:cafe4,
            title:'Espresso',
            desc:'A reader will be distracted by the readable',
            amount:'$19.99'
        },
        {
            image:cafe5,
            title:'Americano',
            desc:'A reader will be distracted by the readable',
            amount:'$17.79'
        },
        {
            image:cafe6,
            title:'Boerewors',
            desc:'A reader will be distracted by the readable',
            amount:'$57.79'
        },
        {
            image:cafe7,
            title:'Cafe Latte',
            desc:'A reader will be distracted by the readable',
            amount:'$13.79'
        },
        {
            image:cafe8,
            title:'Ice Coffee',
            desc:'A reader will be distracted by the readable',
            amount:'$12.49'
        },
        {
            image:cafe9,
            title:'Mocha',
            desc:'A reader will be distracted by the readable',
            amount:'$10.99'
        },
        {
            image:cafe10,
            title:'Espresso',
            desc:'A reader will be distracted by the readable',
            amount:'$19.99'
        },
    ]
    const clientData = [
        {
            image:client1,
            name:'Johnny Rosario',
            title:'C.E.O',
            desc:'" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout. "'
        },
        {
            image:client2,
            name:'Gale Larose',
            title:'Manager',
            desc:'" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout. "'
        },
        {
            image:client3,
            name:'Shelly Goodman',
            title:'Manager',
            desc:'" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout. "'
        },
    ]
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>

        <section className="bg-half-260 d-table w-100 overflow-hidden" id="home" style={{backgroundImage:`url(${bg1})`}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center" style={{transform:'rotate(-15deg)'}}>
                            <span className="title fw-semibold text-white title-dark mb-3 d-block">The Coffee <br/> Masters</span>
                            <span className="text-white-50 fw-normal">Since 1996</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Welcome to Starty Cafe</h4>
                            <p className="text-muted para-desc mx-auto">The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier. Once the beans are roasted each participant is given an opportunity to sample the aromatic smoke by wafting it towards them.</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="row text-md-end text-center">
                            {aboutData.slice(0,3).map((item,index)=>{
                                return(
                                <div className="col-12 mt-4 pt-2" key={index}>
                                    <div className="card features feature-primary border-0">
                                        <div className="ms-md-auto me-md-0 mx-auto">
                                            <img src={item.image} className="avatar avatar-small rounded-circle p-3 shadow-md bg-white title-bg-dark" alt=""/>
                                        </div>
                                        <div className="card-body p-0 mt-3">
                                            <Link to="#" className="title text-dark h5">{item.title}</Link>
                                            <p className="text-muted mb-0 mt-2">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="col-lg-4 order-md-0 order-2 d-md-none d-lg-block mt-4 pt-2">
                        <img src={services} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="row text-md-start text-center">
                            {aboutData.slice(3,6).map((item,index)=>{
                                return(
                                <div className="col-12 mt-4 pt-2" key={index}>
                                    <div className="card features feature-primary border-0">
                                        <div className="me-md-auto ms-md-0 mx-auto">
                                            <img src={item.image} className="avatar avatar-small rounded-circle p-3 shadow-md bg-white title-bg-dark" alt=""/>
                                        </div>
                                        <div className="card-body p-0 mt-3">
                                            <Link to="#" className="title text-dark h5">{item.title}</Link>
                                            <p className="text-muted mb-0 mt-2">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="position-relative w-100 overflow-hidden ">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={bg2}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImgize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            />
            <div className="container pt-sm-150 ">
                <div className="row justify-content-end">
                    <div className="col-md-6 px-0">
                        <div className="bg-white  bg-cta px-3 px-md-4 px-lg-5">
                            <div className="section-title text-center">
                                <img src={about4} className="avatar avatar-md-sm" alt=""/>
                                <h4 className="title mt-2">Happy Hour</h4>
                                <h6 className="text-primary">Starts at 3pm</h6>

                                <p className="text-muted my-4 px-lg-4">The restaurant will open at 3pm for happy hour and dinner service starting at 5pm. We will continue to offer brunch on weekends from 10am-3pm with bottomless mimosas. We will also continue with our late night lounge on Friday and Saturdays until 2am.</p>
                            
                                <Link to="tel:+152534-468-854" className="text-primary h6">+152 534-468-854</Link>

                                <div className="mt-4 pt-2">
                                    <Link to="#" className="btn btn-font-sm btn-lg btn-primary text-uppercase mt-2">Book Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Explore Our Menu</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs</p>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 pt-2">
                    {menuData.map((item, index)=>{
                        return(
                            <div className="col-lg-6 col-md-6" key={index}>
                                <div className="portfolio portfolio-primary d-flex align-items-center p-2 pt-3 pb-3">
                                    <img src={item.image} className="img-fluid shadow rounded-pill avatar avatar-md-md shadow-md" alt="img"/>
                                    <div className="flex-1 ms-4">
                                        <div className="d-flex justify-content-between border-bottom pb-2">
                                            <Link to="#" className="text-dark title h6 mb-0 fw-semibold">{item.title}</Link>
                                            <span className="float-end fw-semibold">{item.amount}</span>
                                        </div>
                                        <p className="text-muted mb-0 mt-2">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Customers</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-4 pt-2">
                    <div className="col-lg-9">
                        <div className="tiny-single-item">
                            <TinySlider settings={settings}>
                                {clientData.map((item,index)=>{
                                    return(
                                        <div className="tiny-slide px-md-5" key={index}>
                                            <div className="card client-testi text-center">
                                                <img src={item.image} className="avatar avatar-small rounded-pill mx-auto" alt=""/>
            
                                                <div className="card-body pb-0 content">
                                                    <p className="h6 fw-normal text-muted fst-italic">{item.desc}</p>
            
                                                    <div className="name mt-4">
                                                        <small className="text-uppercase h6 d-block">{item.name}</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </TinySlider>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="bg-cta position-relative" style={{backgroundImage:`url(${bg3})`, backgroundPosition:'center'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row align-items-center">                    
                    <div className="col-lg-6 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0 order-lg-1 order-2">
                        <div className="section-title ms-lg-4 text-center text-lg-start">
                            <h4 className="title text-white title-dark text-uppercase mb-4">Coffee at its the best</h4>
                            <p className="text-white-50 mb-0">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                            <div className="mt-4">
                                <Link to="#" className="btn btn-font-sm btn-lg btn-light text-uppercase mt-2">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-12 order-lg-2 order-1">
                        <img src={image1} className="img-fluid rounded" alt=""/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0 order-lg-2 order-1">
                        <img src={image2} className="img-fluid rounded" alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6 col-12">
                        <img src={image3} className="img-fluid rounded shadow-md" alt=""/>
                    </div>

                    <div className="col-lg-7 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h5 className="fw-semibold mb-3">Jamie Hodge</h5>

                            <p className="text-muted">Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod.</p>
                            
                            <p className="text-muted mb-0">Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. </p>
                            <img src={sign} className="avatar avatar-medium mt-3" style={{height:'auto'}} alt=""/>

                            <div className="mt-3">
                                <small className="text-uppercase fw-medium">CEO & Founder Starty Coffee</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <CafeFooter/>
        <ScrollTop/>
        </>
    )
}