import React,{useState} from "react";
import { Link } from "react-router-dom";

import bg1 from '../../assets/images/bg/busi01.jpg'
import bg2 from '../../assets/images/bg/busi02.jpg'
import bg3 from '../../assets/images/bg/busi03.jpg'
import bg4 from '../../assets/images/bg/busi04.jpg'
import image1 from "../../assets/images/01.jpg"

import NavbarTwo from "../../components/navbar/navbarTwo";
import Partners from "../../components/partners";
import Team from "../../components/team";
import PricingThree from "../../components/pricing/pricingThree";
import ClientTwo from "../../components/client/clientTwo";
import FooterFour from "../../components/footer/footerFour";
import ScrollTop from "../../components/scrollTop";
import BlogTwo from "../../components/blog/blogTwo";


import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.css';

import CountUp from 'react-countup';
import { Parallax } from 'react-parallax';

import {RiBarChartLine,BiReceipt,TbCurrencyBitcoin, BiBriefcaseAlt2, } from '../../assets/icons/vander' 

export default function IndexBusiness(){
    const [isOpen, setOpen] = useState(false);
    const aboutData = [
        {
            icon:RiBarChartLine,
            title:'Business Analysis',
            desc:'Due to its widespread use as filler text for layouts, non-readability is of great importance'
        },
        {
            icon:BiReceipt,
            title:'Estate Planning',
            desc:'Due to its widespread use as filler text for layouts, non-readability is of great importance'
        },
        {
            icon:TbCurrencyBitcoin,
            title:'Cryptocurrency',
            desc:'Due to its widespread use as filler text for layouts, non-readability is of great importance'
        },
        {
            icon:BiBriefcaseAlt2,
            title:'Security Enhanced',
            desc:'Due to its widespread use as filler text for layouts, non-readability is of great importance'
        },
    ]
    const counterData = [
        {
            start:'0',
            end:'5458',
            title:'Investment Projects'
        },
        {
            start:'0',
            end:'15',
            title:'Years of Experience'
        },
        {
            start:'0',
            end:'54',
            title:'Offices in the World'
        },
        {
            start:'0',
            end:'214',
            title:'Successful Cases'
        },
    ]
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <section className="home-slider position-relative">
            <Carousel showArrows={false} selectedItem={false} infiniteLoop={true} autoPlay={true} interval={3000} showStatus={false}>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-home d-flex align-items-center" style={{backgroundImage:`url(${bg1})`}}>
                            <div className="bg-overlay bg-linear-gradient"></div>
                            <div className="container">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div className="title-heading text-center">
                                                <h1 className="fw-semibold display-3 text-white title-dark mb-4">Build and Grow Your Business</h1>
                                                <p className="para-desc mx-auto text-white-50">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                                                
                                                <div className="mt-4 pt-2">
                                                    <Link to="/page-services" className="btn btn-primary">See Services</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-home d-flex align-items-center" style={{backgroundImage:`url(${bg2})`}}>
                            <div className="bg-overlay bg-linear-gradient"></div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <div className="title-heading text-center">
                                            <h1 className="fw-semibold display-3 text-white title-dark mb-4">Build and Grow Your Business</h1>
                                            <p className="para-desc mx-auto text-white-50">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                                            
                                            <div className="mt-4 pt-2">
                                                <Link to="/page-services" className="btn btn-primary">See Services</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-home d-flex align-items-center" style={{backgroundImage:`url(${bg3})`}}>
                            <div className="bg-overlay bg-linear-gradient"></div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-12">
                                        <div className="title-heading text-center">
                                            <h1 className="fw-semibold display-3 text-white title-dark mb-4">Take Care of Your Future</h1>
                                            <p className="para-desc mx-auto text-white-50">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                                            
                                            <div className="mt-4 pt-2">
                                                <Link to="/page-aboutus" className="btn btn-primary">Get Started</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Carousel>
        </section>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6 order-1 order-md-2">
                        <div className="features-absoluteTwo">
                            <div className="position-relative">
                                <img src={image1} className="img-fluid rounded shadow" alt=""/>
                                <div className="play-icon">
                                    <Link to="" onClick={() => setOpen(true)} className="play-btn lightbox">
                                        <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                                    </Link>
                                </div>
                                <ModalVideo
                                    channel="youtube"
                                    youtube={{ mute: 0, autoplay: 0 }}
                                    isOpen={isOpen}
                                    videoId="yba7hPeTSjk"
                                    onClose={() => setOpen(false)} 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 order-2 order-md-1">
                        <div className="row">
                            {aboutData.map((item,index)=>{
                                const Icon = item.icon
                                return(
                                <div className="col-lg-6 col-12 mb-4 pt-2" key={index}>
                                    <div className="card features feature-primary">
                                        <Icon className="icon h1 d-block mb-3"/>
                                        <Link to="/page-single-service" className="h5 title text-dark">{item.title}</Link>
                                        <p className="text-muted mt-2 mb-0">{item.desc}</p>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <Partners/>
            </div>
        </section>
        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mb-4 pb-2">
                        <div className="section-title text-center">
                            <h6 className="text-primary">Our Skills</h6>
                            <h4 className="title fw-semibold mt-2 mb-3">We are a team of talented business & investment experts</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="progress-box mt-4">
                            <h6 className="text-muted fw-normal">Research</h6>
                            <div className="progress position-relative">
                                <div className="progress-bar position-relative bg-primary" style={{width:'84%'}}></div>
                                <div className="progress-value d-block text-muted h6 fw-normal">84%</div>
                            </div>
                        </div>

                        <div className="progress-box mt-4">
                            <h6 className="text-muted fw-normal">Sales & Trading</h6>
                            <div className="progress position-relative">
                                <div className="progress-bar position-relative bg-primary" style={{width:'74%'}}></div>
                                <div className="progress-value d-block text-muted h6 fw-normal">75%</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="progress-box mt-4">
                            <h6 className="text-muted fw-normal">Investment</h6>
                            <div className="progress position-relative">
                                <div className="progress-bar position-relative bg-primary" style={{width:'79%'}}></div>
                                <div className="progress-value d-block text-muted h6 fw-normal">79%</div>
                            </div>
                        </div>

                        <div className="progress-box mt-4">
                            <h6 className="text-muted fw-normal">Finance</h6>
                            <div className="progress position-relative">
                                <div className="progress-bar position-relative bg-primary" style={{width:'95%'}}></div>
                                <div className="progress-value d-block text-muted h6 fw-normal">95%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-100 mt-60">
                <Team/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    {counterData.map((item,index)=>{
                        return(
                        <div className="col-md-3 col-6" key={index}>
                            <div className="counter-box position-relative text-center">
                                <h2 className="mb-0 display-1 fw-bold title-dark mt-2 opacity-05"><CountUp start={item.start} end={item.end}/></h2>
                                <span className="counter-head fw-semibold title-dark position-absolute top-50 start-50 translate-middle">{item.title}</span>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="section">
           <PricingThree/>
        </section>
        <section className="position-relative overflow-hidden w-100">
        <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={bg4}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImgize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            />
            <div className="bg-half-170">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="play-icon">
                                <Link to="#" onClick={() => setOpen(true)} className="play-btn lightbox">
                                    <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
           <ClientTwo/>
            <div className="container mt-100 mt-60">
               <BlogTwo/>
            </div>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}