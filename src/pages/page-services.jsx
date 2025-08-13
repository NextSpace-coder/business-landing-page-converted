import React, { useState } from "react";
import { Link } from "react-router-dom";

import bg1 from "../assets/images/bg/services.jpg"
import image1 from "../assets/images/blog/10.jpg"
import image2 from "../assets/images/blog/11.jpg"
import image3 from "../assets/images/blog/12.jpg"
import cta from "../assets/images/cta02.jpg"

import NavbarTwo from "../components/navbar/navbarTwo";
import Counter from "../components/counter";
import BlogOne from "../components/blog/blogOne";
import ClientTwo from "../components/client/clientTwo";
import FooterSeven from "../components/footer/footerSeven";
import ScrollTop from "../components/scrollTop";

import {FiLayers,LuLayout, FiShoppingCart,FiAward,FiThumbsUp,} from "../assets/icons/vander"
import {HiOutlineChip} from "react-icons/hi"

export default function Service(){
    const [activeIndex, setActiveIndex] = useState(1)
    const aboutData =[
        {
            icon :FiLayers,
            title:'Pixel Perfect Design',
            desc:'This prevents repetitive patterns from and facilitates the comparison of different typefaces.' 
        },
        {
            icon :LuLayout,
            title:'Unlimited Layouts',
            desc:'This prevents repetitive patterns from and facilitates the comparison of different typefaces.' 
        },
        {
            icon :FiShoppingCart,
            title:'Online Shopping',
            desc:'This prevents repetitive patterns from and facilitates the comparison of different typefaces.' 
        },
        {
            icon :FiAward,
            title:'Simple and Secure',
            desc:'This prevents repetitive patterns from and facilitates the comparison of different typefaces.' 
        },
        {
            icon :FiThumbsUp,
            title:'Automatic Updates',
            desc:'This prevents repetitive patterns from and facilitates the comparison of different typefaces.' 
        },
        {
            icon :HiOutlineChip,
            title:'No Rocket Science',
            desc:'This prevents repetitive patterns from and facilitates the comparison of different typefaces.' 
        },
    ]

    const tabData = [
        {
            id:1,
            image:image1,
            tag:'Finance',
            title:'Developing strategy for startup business',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
        },
        {
            id:2,
            image:image2,
            tag:'Finance',
            title:'How to Get a Successful Ad for Your Business',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
        },
        {
            id:3,
            image:image3,
            tag:'Finance',
            title:'How to Get a Successful Ad for Your Business',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
        },
    ]
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>

        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">What we offer?</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">Services Agency</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link to="/">Starty</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Services</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    {aboutData.map((item,index)=>{
                        const Icon = item.icon
                        return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-4" key={index}>
                            <div className="card border-0 p-4 text-center rounded features features-classic feature-primary">
                                <Icon className="h1 mb-3 text-primary w-100"/>
                                <div className="content">
                                    <Link to="/page-single-service" className="title text-dark h5">{item.title}</Link>

                                    <p className="text-muted mb-0 mt-3">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-lg-4">
                        <ul className="nav nav-pills nav-justified flex-column bg-transparent mb-0">
                            <li className="nav-item">
                                <Link className={`${activeIndex === 1 ? 'active' : '' } nav-link rounded shadow`} to="#" onClick={()=>setActiveIndex(1)}>
                                    <div className="text-start p-4">
                                        <h5>Developing strategy</h5>
                                        <p className="mb-0 text-muted tab-para mt-3">It is advantageous when the dummy text is realistic</p>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item mt-4 pt-2">
                                <Link className={`${activeIndex === 2 ? 'active' : '' } nav-link rounded shadow`} to="#" onClick={()=>setActiveIndex(2)}>
                                    <div className="text-start p-4">
                                        <h5>Blazing performance</h5>
                                        <p className="mb-0 text-muted tab-para mt-3">It is advantageous when the dummy text is realistic</p>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item mt-4 pt-2">
                                <Link className={`${activeIndex === 3 ? 'active' : '' } nav-link rounded shadow`} to="#" onClick={()=>setActiveIndex(3)}>
                                    <div className="text-start p-4">
                                        <h5>Customer satisfaction</h5>
                                        <p className="mb-0 text-muted tab-para mt-3">It is advantageous when the dummy text is realistic</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-8 mt-4 pt-2 mt-lg-0 pt-lg-0">
                        <div className="tab-content" id="pills-tabContent">
                            {tabData.map((item,index)=>{
                                return(
                                    <div className={`${activeIndex === item.id ? 'show active' :''} tab-pane fade`} key={index}>
                                        <div className="card blog blog-image blog-primary shadow rounded overflow-hidden">
                                            <div className="card-img">
                                                <img src={item.image} className="img-fluid" alt=""/>
                                                <div className="card-overlay"></div>
        
                                                <div className="position-absolute top-0 start-0 mt-3 ms-4">
                                                    <Link to="#" className="badge text-bg-light">{item.tag}</Link>
                                                </div>
                                            </div>
                                            <div className="content px-4">
                                                <Link to="/blog-detail-one" className="h5 title d-block mb-0 text-white title-dark">{item.title}</Link>
        
                                                <div className="d-flex author align-items-center mt-3">
                                                    <p className="para-desc text-white-50 mb-0">{item.desc}</p>
                                                </div>
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

        <section className="section bg-primary">
            <div className="container">
                <Counter/>
            </div>
        </section>

        <section className="section">
            <ClientTwo/>

            <div className="container mt-100 mt-60">
                <BlogOne/>
            </div>
        </section>

        <div className="container-fluid px-0">
            <div className="py-5 position-relative" style={{backgroundImage:`url(${cta})`, backgroundPosition:'center'}}>
                <div className="bg-overlay bg-gradient-overlay"></div>
                <div className="container my-5">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-7">
                            <h4 className="display-6 h4 mb-0 text-white title-dark fw-medium">Make your website unforgettable <br/> Join the Starty community.</h4>
                        </div>

                        <div className="col-lg-4 col-md-5 text-md-end mt-4 mt-sm-0">
                            <Link to="#" className="btn btn-light">Join us Now</Link>
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