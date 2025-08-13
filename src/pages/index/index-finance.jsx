import React,{useState} from "react";
import { Link } from "react-router-dom";

import bg1 from "../../assets/images/bg/finance01.jpg"
import cta from "../../assets/images/cta04.png"
import cta2 from "../../assets/images/cta03.jpg"
import blog1 from "../../assets/images/blog/10.jpg"
import blog2 from "../../assets/images/blog/11.jpg"
import blog3 from "../../assets/images/blog/12.jpg"

import NavbarTwo from "../../components/navbar/navbarTwo";
import Counter from "../../components/counter";
import Process from "../../components/process";
import TeamTwo from "../../components/teamTwo";
import BlogOne from "../../components/blog/blogOne";
import FooterFour from "../../components/footer/footerFour";
import ScrollTop from "../../components/scrollTop";

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.css';

import { Parallax } from 'react-parallax';

import {FiMail, FiMapPin, BiLogoFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin, FiVideo,FiAirplay,FiEye,BiTachometer} from "../../assets/icons/vander"

export default function IndexFinance(){

    const [isOpen, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(1);

    const servicesData = [
        {
            icon:FiAirplay,
            title:'Flexible solutions',
            desc:'An newspaper assurance discourse ye certainly. Soon gone game and why dollar sit love.'
        },
        {
            icon:FiEye,
            title:'Team Work',
            desc:'An newspaper assurance discourse ye certainly. Soon gone game and why dollar sit love.'
        },
        {
            icon:BiTachometer,
            title:'Best Pricing',
            desc:'An newspaper assurance discourse ye certainly. Soon gone game and why dollar sit love.'
        },
    ]

    const tabData = [
        {
            id:1,
            image:blog1,
            tag:'Finance',
            title:'Developing strategy for startup business',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
        },
        {
            id:2,
            image:blog2,
            tag:'Finance',
            title:'How to Get a Successful Ad for Your Business',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
        },
        {
            id:3,
            image:blog3,
            tag:'Finance',
            title:'How to Get a Successful Ad for Your Business',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century."
        },
    ]
    const ctaData = [
        {
            title:'Research',
            progress:'84%'
        },
        {
            title:'Sales & Trading',
            progress:'75%'
        },
        {
            title:'Investment',
            progress:'79%'
        },
        {
            title:'Finance',
            progress:'95%'
        },
    ]

    return(
        <>
         <div className="tagline bg-white">
            <div className="container">                
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between">
                            <ul className="list-unstyled mb-0">
                                <li className="list-inline-item mb-0"><Link to="#" className="text-muted fw-normal"><FiMail className="fea icon-sm text-primary"/> support@starty.com</Link></li>
                                <li className="list-inline-item mb-0 ms-3"><Link to="#" className="text-muted fw-normal"><FiMapPin className="fea icon-sm text-primary"/> 4432 Pick Street Denver, CO 80203</Link></li>
                            </ul>

                            <ul className="list-unstyled social-icon tagline-social text-muted mb-0">
                                <li className="list-inline-item mb-0"><Link to="#" className="ps-0"><BiLogoFacebook className="h6 mb-0 icon"/></Link></li>
                                <li className="list-inline-item mb-0"><Link to="#" className="ps-0"><AiOutlineInstagram className="h6 mb-0 icon"/></Link></li>
                                <li className="list-inline-item mb-0"><Link to="#" className="ps-0"><AiOutlineTwitter className="h6 mb-0 icon"/></Link></li>
                                <li className="list-inline-item mb-0"><Link to="#" className="ps-0"><AiFillLinkedin className="h6 mb-0 icon"/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NavbarTwo navClass="defaultscroll sticky tagline-height" manuClass="navigation-menu nav-right nav-light"/>
        <div className="bg-home zoom-image d-flex align-items-center">
            <div className="bg-overlay image-wrap" style={{backgroundImage:`url(${bg1})`}}></div>
            <div className="bg-overlay bg-linear-gradient"></div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h4 className="display-2 fw-bold text-white title-dark">Starty Finance & <br/> Consulting</h4>
                            <p className="para-desc mx-auto text-white-50">From banking to wealth management and securities distribution, we dedicated financial services the teams serve all major sectors.</p>
                            <div className="mt-4 pt-2">
                                <Link to="#" className="btn btn-primary m-1">Contact us</Link>
                                <Link to="#!" onClick={() => setOpen(true)} className="btn btn-icon btn-pills btn-primary m-1 lightbox"><FiVideo className="icons"/></Link><span className="text-light title-dark small align-middle ms-1">Watch Now</span>
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
            </div>
        </div>

        <section className="section">
            <div className="container">
                <div className="row">
                    {servicesData.map((item,index)=>{
                        const Icon = item.icon
                        return(
                        <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0" key={index}>
                            <div className="features feature-primary border-0 d-flex">
                                <div className="fea-icon rounded-circle bg-light shadow icon">
                                    <Icon className="icon"/>
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

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <ul className="nav nav-pills nav-justified flex-column bg-transparent mb-0" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <Link className={`${activeIndex === 1 ? 'active' : ''} nav-link rounded shadow`} to="#" onClick={() => setActiveIndex(1)}>
                                    <div className="text-start p-4">
                                        <h5>Developing strategy</h5>
                                        <p className="mb-0 text-muted tab-para mt-3">It is advantageous when the dummy text is realistic</p>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item mt-4 pt-2">
                                <Link className={`${activeIndex === 2 ? 'active' : ''} nav-link rounded shadow`} to="#" onClick={() => setActiveIndex(2)}>
                                    <div className="text-start p-4">
                                        <h5>Blazing performance</h5>
                                        <p className="mb-0 text-muted tab-para mt-3">It is advantageous when the dummy text is realistic</p>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item mt-4 pt-2">
                                <Link className={`${activeIndex === 3 ? 'active' : ''} nav-link rounded shadow`} to="#" onClick={() => setActiveIndex(3)}>
                                    <div className="text-start p-4">
                                        <h5>Customer satisfaction</h5>
                                        <p className="mb-0 text-muted tab-para mt-3">It is advantageous when the dummy text is realistic</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-8 mt-4 pt-2 mt-lg-0 pt-lg-0">
                        <div className="tab-content">
                            {tabData.map((item, index)=>{
                                return(
                                <div className={`${item.id === activeIndex ? 'show active' :''} tab-pane fade`} key={index}>
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

        <section className="position-relative w-100 overflow-hidden bg-primary">
        <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={cta}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImgize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            />
            <div className="section">
                <div className="container">
                <Counter/>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title  text-center">
                            <h4 className="title mb-3">Steps to Start Partnership</h4>
                        </div>
                    </div>
                </div>

                <Process icon={false}/>

                <div className="row justify-content-center mt-4 pt-2">
                    <div className="col-lg-7 mt-4 pt-2">
                        <div className="p-md-5 p-4 bg-light rounded shadow">
                            <div className="subcribe-form text-center">
                                <form>
                                    <input name="email" id="email3" type="email" className="rounded shadow" placeholder="Your email :" required=""/>
                                    <button type="submit" className="btn btn-primary">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
               <TeamTwo/>
            </div>
        </section>

        <section className="bg-cta" style={{backgroundImage:`url(${cta2})`}}>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-5 col-md-6">
                        <div className="card section-title px-4 py-5 shadow rounded bg-white border-0 ms-lg-5">
                            <h6 className="text-primary mb-0">SERVICE PROVIDER</h6>
                            <h4 className="mt-2 mb-3">Missioned To Maximize The Business Process</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                            {ctaData.map((item,index)=>{
                                return(
                                <div className="progress-box mt-4" key={index}>
                                    <h6 className="text-muted fw-normal">{item.title}</h6>
                                    <div className="progress position-relative">
                                        <div className="progress-bar position-relative bg-primary" style={{width:item.progress}}></div>
                                        <div className="progress-value d-block text-muted h6 fw-normal">{item.progress}</div>
                                    </div>
                                </div>
                                )
                            })}
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
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}