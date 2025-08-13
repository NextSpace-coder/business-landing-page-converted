import React from "react";
import { Link } from "react-router-dom";

import bg1 from '../assets/images/bg/services.jpg'
import blog1 from "../assets/images/blog/05.jpg"
import blog2 from "../assets/images/blog/06.jpg"
import blog3 from "../assets/images/blog/07.jpg"
import blog4 from "../assets/images/blog/08.jpg"
import blog5 from "../assets/images/blog/09.jpg"
import cta from "../assets/images/cta02.jpg"

import NavbarTwo from "../components/navbar/navbarTwo";
import Partners from "../components/partners";
import FooterSeven from "../components/footer/footerSeven";
import ScrollTop from "../components/scrollTop";

import {FiArrowRight, FiAirplay, FiEye,BiTachometer,LuPalette,FaFont,FiUpload} from "../assets/icons/vander"

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import PricingFive from "../components/pricing/pricingFive";

export default function ServiceTwo(){
    const settings = {
        container: '.tiny-three-item',
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
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
      };

    const aboutData = [
        {
            image:blog1,
            title:'Our Vision',
            desc:'It contains a series of real Latin words. This ancient dummy text is also incomprehensible.'
        },
        {
            image:blog2,
            title:'Our Mission',
            desc:'It contains a series of real Latin words. This ancient dummy text is also incomprehensible.'
        },
        {
            image:blog3,
            title:'Design and Development',
            desc:'It contains a series of real Latin words. This ancient dummy text is also incomprehensible.'
        },
        {
            image:blog4,
            title:'Consultations',
            desc:'It contains a series of real Latin words. This ancient dummy text is also incomprehensible.'
        },
        {
            image:blog5,
            title:'Digital Solutions',
            desc:'It contains a series of real Latin words. This ancient dummy text is also incomprehensible.'
        },
    ]
    const services = [
        {
            icon:FiAirplay,
            iconClass :'feature-primary',
            title:'Responsive Design',
            desc:'This prevents repetitive patterns from impairing the overall facilitates the comparison.'
        },
        {
            icon:FiEye,
            iconClass :'feature-success',
            title:'Retina Ready Graphics',
            desc:'This prevents repetitive patterns from impairing the overall facilitates the comparison.'
        },
        {
            icon:BiTachometer,
            iconClass :'feature-danger',
            title:'Powerful Performance',
            desc:'This prevents repetitive patterns from impairing the overall facilitates the comparison.'
        },
        {
            icon:LuPalette,
            iconClass :'feature-info',
            title:'Unlimited Color Options',
            desc:'This prevents repetitive patterns from impairing the overall facilitates the comparison.'
        },
        {
            icon:FaFont,
            iconClass :'feature-warning',
            title:'Customizable Fonts',
            desc:'This prevents repetitive patterns from impairing the overall facilitates the comparison.'
        },
        {
            icon:FiUpload,
            iconClass :'feature-secondary',
            title:'Free Updates',
            desc:'This prevents repetitive patterns from impairing the overall facilitates the comparison.'
        },
    ]
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>

        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row g-0 align-items-center mt-5">
                    <div className="col-lg-8 col-md-6">
                        <div className="title-heading text-md-start text-center">
                            <h5 className="heading fw-semibold page-heading text-white title-dark">Our Services</h5>
                            <p className="text-white-50 mb-0">We Are Here To Help You</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 mt-sm-0">
                        <div className="text-md-end text-center">
                            <nav aria-label="breadcrumb" className="d-inline-block">
                                <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                    <li className="breadcrumb-item"><Link to="/">Starty</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Page</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Services</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="tiny-three-item">
                            <TinySlider settings={settings}>
                                {aboutData.map((item,index)=>{
                                    return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="card features features-modern feature-primary m-2">
                                            <div className="card-img position-relative overflow-hidden">
                                                <img src={item.image} className="img-fluid rounded" alt=""/>
                                                <div className="overlay rounded"></div>
                                                <div className="content bg-transparent">
                                                    <Link to="/page-single-service" className="text-white small mb-0 d-block title">Read More <FiArrowRight className="align-middle"/></Link>
                                                </div>
                                            </div>
                
                                            <div className="px-2 pt-4">
                                                <Link to="/page-single-service" className="title text-dark h5">{item.title}</Link>
                
                                                <p className="text-muted mt-2 mb-0">{item.desc}</p>
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

            <div className="container mt-100 mt-60">
                <div className="row">
                    {services.map((item,index)=>{
                        const Icon = item.icon
                        return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                            <div className={`${item.iconClass} features border-0 d-flex`}>
                                <div className="fea-icon rounded-circle text-white title-dark">
                                    <Icon style={{width:'24px', height:'24px'}} />
                                </div>

                                <div className="content flex-1 ms-3">
                                    <Link to="/page-single-service" className="title h5 text-dark">{item.title}</Link>
                                    <p className="text-muted mt-2">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            
            <div className="container mt-100 mt-60">
                <PricingFive/>
            </div>

            <div className="container mt-5">
                <Partners/>
            </div>
        </section>

        <div className="container-fluid px-0">
            <div className="py-5 position-relative" style={{backgroundImage:`url(${cta})`, backgroundPosition:'center'}}>
                <div className="bg-overlay bg-gradient-overlay"></div>
                <div className="container my-5">
                    <div className="row align-items-center">
                        <div className="col-lg-9 col-md-8">
                            <h4 className="display-6 h4 mb-0 text-white title-dark fw-medium">We create digital ideas that are bigger, bolder, braver and better.</h4>
                        </div>

                        <div className="col-lg-3 col-md-4 mt-4 mt-sm-0 text-md-center">
                            <Link to="#" className="btn btn-light">Join us Now</Link>
                            <p className="text-white-50 mb-0 mt-2">or free trial</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FooterSeven/>
        <ScrollTop/>
        </>
    )
}