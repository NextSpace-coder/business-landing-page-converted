import React,{useState} from "react";
import { Link } from "react-router-dom";

import bg1 from '../../assets/images/bg/start01.jpg'
import bg2 from '../../assets/images/bg/start02.jpg'
import bg3 from '../../assets/images/bg/start03.jpg'
import logoLight from "../../assets/images/logo-icon-light.png"
import about from "../../assets/images/about.jpg"
import lapy from "../../assets/images/lapy.png"

import NavbarTwo from "../../components/navbar/navbarTwo";
import ScrollTop from "../../components/scrollTop"
import PricingOne from "../../components/pricing/pricingOne";
import BlogOne from "../../components/blog/blogOne";
import Footer from "../../components/footer/footer";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {FiAirplay, AiOutlineEye,BiTachometer,BsPalette,AiOutlineCheckCircle,FiCamera} from "../../assets/icons/vander"

import { projectsData,projectImage } from "../../data/data";

export default function Startup(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setIsOpen] = useState(false);

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + projectImage.length - 1) % projectImage.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectImage.length);
    };

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    
    const currentImage = projectImage[currentImageIndex];

    const settings = {
        container: '.tiny-five-item',
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
            1025: {
                items: 5
            },

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
    const featureData = [
        {
            icon:FiAirplay,
            title:'Responsive Design',
            desc:'This prevents repetitive impairing the overall facilitates the comparison.'
        },
        {
            icon:AiOutlineEye,
            title:'Retina Ready Graphics',
            desc:'This prevents repetitive impairing the overall facilitates the comparison.'
        },
        {
            icon:BiTachometer,
            title:'Powerful Performance',
            desc:'This prevents repetitive impairing the overall facilitates the comparison.'
        },
        {
            icon:BsPalette,
            title:'Unlimited Color Options',
            desc:'This prevents repetitive impairing the overall facilitates the comparison.'
        },
    ]
    const processData = [
        {
            title:'Concept',
            desc:'This prevents repetitive impairing the overall facilitates the comparison.'
        },
        {
            title:'Development',
            desc:'This prevents repetitive impairing the overall facilitates the comparison.'
        },
        {
            title:'Live Demo',
            desc:'This prevents repetitive impairing the overall facilitates the comparison.'
        },
    ]
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <section className="home-slider position-relative">
            <Carousel showArrows={false} selectedItem={false} infiniteLoop={true} autoPlay={true} interval={3000} showStatus={false}>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-home d-flex align-items-center" style={{backgroundImage:`url(${bg1})`}}>
                            <div className="bg-overlay"></div>
                            <div className="container">
                                <div className="row justify-content-center mt-5">
                                    <div className="col-lg-12 text-center">
                                        <div className="title-heading mt-4">
                                            <h4 className="display-3 fw-bold text-white title-dark mb-3">We Prepare Better Way <br/> For Accelerators</h4>
                                            <p className="text-white-50 mx-auto para-desc">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                                            
                                            <div className="mt-4 pt-2">
                                                <Link to="/page-aboutus" className="btn btn-lg btn-primary">Get Started</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-home d-flex align-items-center" style={{backgroundImage:`url(${bg2})`}}>
                            <div className="bg-overlay"></div>
                            <div className="container">
                                <div className="row justify-content-center mt-5">
                                    <div className="col-lg-12 text-center">
                                        <div className="title-heading mt-4">
                                            <img src={logoLight} height="260" width="235" alt=""/>
                                            <h3 className="fw-bold text-white title-dark mb-0 mt-4">Investment & Consultant</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-home d-flex align-items-center" style={{backgroundImage:`url(${bg3})`}}>
                            <div className="bg-overlay"></div>
                            <div className="container">
                                <div className="row justify-content-center mt-5">
                                    <div className="col-lg-12 text-center">
                                        <div className="title-heading mt-4">
                                            <h4 className="display-3 fw-bold text-white title-dark mb-3">We Prepare Better Way <br/> For Accelerators</h4>
                                            <p className="text-white-50 mx-auto para-desc">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                                            
                                            <div className="mt-4 pt-2">
                                                <Link to="/page-aboutus" className="btn btn-lg btn-primary">Get Started</Link>
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
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="features-absolute">
                            <div className="row">
                                {featureData.map((item,index)=>{
                                    const Icon = item.icon
                                    return(
                                    <div className="col-md-6 mt-4 pt-2" key={index}>
                                        <div className="features feature-primary rounded px-4 py-5 bg-white shadow border-0 d-flex align-items-center">
                                            <div className="fea-icon rounded-circle bg-light text-dark">
                                                <Icon className="icon text-dark"/>
                                            </div>
                
                                            <div className="content flex-1 ms-3">
                                                <Link to="/page-single-service" className="title h5 text-dark">{item.title}</Link>
                                                <p className="text-muted mt-2 mb-0">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <img src={about} className="img-fluid rounded shadow" alt=""/>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h4 className="title fw-semibold mb-3">We are a creative design studio!</h4>
                            <p className="text-muted">This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                            <ul className="list-unstyled text-muted mb-0">
                                <li className="mb-0"><span className="text-dark h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Beautiful and easy to understand animations</li>
                                <li className="mb-0"><span className="text-dark h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-0"><span className="text-dark h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Theme advantages are pixel perfect design</li>
                            </ul>                        
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-4">Latest Projects & Works</h4>
                            <p className="para-desc text-muted mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-12">
                        <div className="tiny-five-item">
                            <TinySlider settings={settings}>
                                {projectsData.map((item, index) => {
                                    return(
                                        <div className="tiny-slide" key={index}>
                                            <div className="card portfolio portfolio-classic portfolio-primary m-2 rounded overflow-hidden">
                                                <div className="card-img position-relative">
                                                    <img src={item.image} className="img-fluid" alt=""/>
                                                    <div className="card-overlay"></div>
                    
                                                    <div className="pop-icon">
                                                        <Link to="#" onClick={() => handleImageClick(index)} className="btn btn-pills btn-icon lightbox"><FiCamera/></Link>
                                                    </div>
                                                </div>
                                                <div className="content pt-3">
                                                    <Link to="/portfolio-detail-one" className="text-dark h6 mb-0 d-block title">{item.title}</Link>
                                                    <small className="text-muted fw-normal mb-0">{item.name}</small>
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
            {open && (
                <Lightbox
                    mainSrc={currentImage}
                    prevSrc={projectImage[(currentImageIndex + projectImage.length - 1) % projectImage.length]}
                    nextSrc={projectImage[(currentImageIndex + 1) % projectImage.length]}

                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-4">Pricing Plans</h4>
                            <p className="para-desc text-muted mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        </div>
                    </div>
                </div>
               <PricingOne/>
            </div>
        </section>
        <section className="section bg-light overflow-hidden">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="me-lg-5">
                            <div className="row justify-content-center">
                                <div className="col-12">
                                    <div className="section-title text-center text-md-start mb-4 pb-2">
                                        <h4 className="title fw-semibold mb-4">Work Process</h4>
                                        <p className="para-desc text-muted mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {processData.map((item,index)=>{
                                    return(
                                    <div className="col-md-12 mt-4 pt-2" key={index}>
                                        <div className="features feature-primary rounded border-0 d-flex">
                                            <div className="fea-icon rounded-circle text-white title-dark shadow avatar avatar-md-sm" style={{width:'40px', height:'40px'}}>
                                                {index+1}
                                            </div>
                
                                            <div className="content flex-1 ms-3">
                                                <Link to="/page-single-service" className="title h5 text-dark">{item.title}</Link>
                                                <p className="text-muted mt-2 mb-0">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}   
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="img-fluid-responsive position-relative">
                            <img src={lapy} className="mx-auto d-block" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <BlogOne/>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}