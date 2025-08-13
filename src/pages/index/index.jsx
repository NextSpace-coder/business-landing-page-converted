import React,{useState} from "react";
import { Link } from "react-router-dom";

import  background from "../../assets/images/bg/live.png"
import homeImg from "../../assets/images/demos/live/home.png"
import logo from "../../assets/images/logo-icon.png"
import react from "../../assets/images/demos/live/react.png"
import bootstrap from "../../assets/images/demos/live/bootstrap2.png"
import reactbootstrap from "../../assets/images/demos/live/react-bootstrap.png"
import sass from "../../assets/images/demos/live/scss2.png"
import css from "../../assets/images/demos/live/css2.png"
import js from "../../assets/images/demos/live/js.png"
import lapy from "../../assets/images/demos/live/lapy.png"
import cellPhone from "../../assets/images/demos/live/cell-phone.png"

import Navbar from "../../components/navbar/navbar";

import { TypeAnimation } from 'react-type-animation';

import { templateData, featureData, innerPagesData,  } from "../../data";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import FooterSmall from "../../components/footer/footerSmall";
import ScrollTop from "../../components/scrollTop";

import {AiOutlineFile} from "../../assets/icons/vander"

export default function Index(){
    const [selectedCategory, setSelectedCategory] = useState(null);
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? innerPagesData.filter((item) => item.category === selectedCategory)
        : innerPagesData;
    return(
        <>
        <Navbar/>
        <section className="bg-half-170 pb-0" id="home" style={{backgroundImage:`url(${background})`}}>
            <div className="container-fluid">
                <div className="row mt-5 justify-content-center">
                    <div className="col-lg-12 text-center">
                        <div className="title-heading">
                            <img src={logo} height="80" alt=""/>
                            <h4 className="display-6 fw-semibold my-4">Build amazing <b>React Applications</b> <br/> for
                            <TypeAnimation
                                sequence={[
                                    'Startup Business',
                                    1000,
                                    'Corporate Business',
                                    1000,
                                    'Finance',
                                    1000,
                                    'Application',
                                    1000,
                                    'Saas',
                                    1000,
                                    'SEO Agency',
                                    1000,
                                    'Digital Marketing',
                                    1000,
                                    'Product Launch',
                                    1000,
                                    'Restaurent',
                                    1000,
                                    'Coffee & Cafe',
                                    1000,
                                    'Personal',
                                    1000,
                                    'Minimal Portfolio',
                                    1000,
                                    'Developer',
                                    1000,
                                    'Personal Blog',
                                    1000,
                                    'Charity',
                                    1000,
                                    'Event Management',
                                    1000,
                                    'e-Commerce',
                                    1000,

                                ]}
                                wrapper="span"
                                speed={10}
                                className="fw-semibold text-primary ms-2"
                                repeat={Infinity}
                                />
                             <span id="typed" className="fw-semibold text-primary"></span></h4>
                            <p className="text-muted mx-auto para-desc">Modern design solutions that are clean and professional to help grow your business. Explore our offerings!</p>
                        
                            <div className="position-relative">
                                <div className="attach-icons-hero text-center mt-4 mb-5">
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">React Js</Tooltip>}>
                                        <Link to="#"><img src={react} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Bootstrap 5</Tooltip>}>
                                        <Link to="#"><img src={bootstrap} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">React Bootstrap</Tooltip>}>
                                        <Link to="#"><img src={reactbootstrap} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">SASS</Tooltip>}>
                                        <Link to="#"><img src={sass} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">CSS</Tooltip>}>
                                        <Link to="#"><img src={css} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Javascript</Tooltip>}>
                                        <Link to="#"><img src={js} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
                                    </OverlayTrigger>
                                </div>
                            </div>

                            <img src={homeImg} alt="" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section pb-0" id="demos">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="px-lg-5 mx-lg-5">
                            <div className="row justify-content-center mb-0">
                                <div className="col-12">
                                    <div className="section-title text-center">
                                        <h4 className="title mb-0">Template Demos</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-center">
                                {templateData.map((item, index) =>{
                                    return(
                                        <div className="col-lg-4 col-md-6 col-12 picture-item mt-100 mt-60" key={index}>
                                            <div className="card portfolio portfolio-modern portfolio-primary px-lg-4 px-md-2">
                                                <Link to={item.link} target="_blank">
                                                    <img src={item.image} className="img-fluid rounded shadow-md" alt=""/>
                                                </Link>
                                                <div className="text-center pt-4">
                                                    <Link to={item.link} target="_blank" className="text-dark fs-5 fw-medium mb-0 d-block title text-uppercase">{item.title}</Link>
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
        </section>
        <section className="section" id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <h4 className="title mb-0">Template Features</h4>
                        </div>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
                    {featureData.map((item, index) => {
                        const Icon = item.icon
                        return(
                            <div className="col mt-4 pt-2" key={index}>
                                <div className="card features feature-primary features-classic p-4 text-center rounded-md shadow border-0">
                                    <div className="fea-icon bg-soft rounded-md mx-auto">
                                        <Icon className="icon"/>
                                    </div>

                                    <div className="content mt-4">
                                        <h6 className="mb-0">{item.title}</h6>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section id="inner">
            <div className="section pt-0 pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="position-relative" style={{zIndex:'1'}}>
                                <div className="position-relative">
                                    <img src={lapy} className="img-fluid" alt=""/>
                                </div>
                                <div className="content mt-4 pt-2">
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div className="section-title my-4 py-2 text-center">
                                                <h4 className="title mb-4">Inner Pages</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feature-posts-placeholder bg-light"></div>
                </div>
            </div>
            <div className="section bg-light pt-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="px-lg-5 mx-lg-5">
                                <div className="row justify-content-center">
                                    <div className="col-12 text-center">
                                        <div className="filters-group-wrap text-center">
                                            <div className="filters-group">
                                                <ul className="container-filter mb-0 categories-filter list-unstyled filter-options">
                                                    <li className={`${selectedCategory === null ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory(null)}>All</li>
                                                    <li className={`${selectedCategory === 'about' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('about')} >About</li>
                                                    <li className={`${selectedCategory === 'service' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('service')} >Services</li>
                                                    <li className={`${selectedCategory === 'portfolio' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('portfolio')}>Portfolio</li>
                                                    <li className={`${selectedCategory === 'shop' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('shop')}>Shop</li>
                                                    <li className={`${selectedCategory === 'blog' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('blog')}>Blogs</li>
                                                    <li className={`${selectedCategory === 'contact' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('contact')}>Contact</li>
                                                    <li className={`${selectedCategory === 'special' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('special')}>Special</li>
                                                    <li className={`${selectedCategory === 'about' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('p&f')}>Pricing & FAQs</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="grid" className="row">
                                    {filteredData.map((item,index) =>{
                                        return(
                                            <div className="col-lg-3 col-md-4 col-12 picture-item mt-100 mt-60" data-groups='["about"]' key={index}>
                                                <div className="card portfolio portfolio-modern portfolio-primary px-md-2">
                                                    <Link to={item.link} target="_blank">
                                                        <img src={item.image} className="img-fluid rounded shadow-md" alt=""/>
                                                    </Link>
                                                    <div className="text-center pt-4">
                                                        <Link to={item.link} target="_blank" className="text-dark fs-6 fw-medium mb-0 d-block title text-uppercase">{item.title}</Link>
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
            </div>
        </section>
        <section className="section" id="contact">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-5 col-12">
                        <img src={cellPhone} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-7 col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h4 className="gradient-text mb-4">Fully Responsive</h4>
                            <h5 className="title mb-3">You can use <u>Starty</u> in all type of devices whether it is a tablet, mobile or desktop the size does not matter..</h5>
                            <h5 className="text-muted para-desc fw-normal">Starty is fully responsive with all devices and fully managed by boostraps latest version.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterSmall/>
        <ScrollTop/>
        <div className="position-fixed" style={{bottom:'20px', left:'20px', zIndex:'1'}}>
            <Link to="https://forms.gle/QkTueCikDGqJnbky9" className="d-flex" target="_blank">
                <span className="btn btn-pills btn-icon btn-lg btn-primary"><AiOutlineFile  className="fea icon-sm icons align-middle"/></span>
                <span className="shadow-md px-2 py-1 m-auto ms-2 rounded bg-white text-dark">Customization</span>
            </Link>
        </div>
        </>
    )
}