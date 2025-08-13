import React from "react";
import { Link } from "react-router-dom";

import bg1 from '../../assets/images/bg/marketing.jpg'
import cta from "../../assets/images/cta04.png"
import cta2 from "../../assets/images/cta06.png"
import about from "../../assets/images/about03.png"
import shape from "../../assets/images/bg-shape.png"
import contact from "../../assets/images/svg/contact.svg"

import NavbarTwo from "../../components/navbar/navbarTwo";
import Counter from "../../components/counter";

import {FiMail, FiMapPin, BiLogoFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillLinkedin, LuPalette,FiAirplay,FiEye,BiTachometer,FiFastForward, FiArrowRight} from "../../assets/icons/vander"

import { Parallax } from 'react-parallax';

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';
import { blogData } from "../../data/data";
import FooterLight from "../../components/footer/footerLight";
import ScrollTop from "../../components/scrollTop";

export default function IndexMarketing(){
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
    const featureData = [
        {
            icon:FiAirplay,
            title:'Responsive Design',
            desc:'This prevents repetitive impairing the overall facilitates the comparison.'
        },
        {
            icon:FiEye,
            title:'Retina Ready Graphics',
            desc:'This prevents repetitive impairing the overall facilitates the comparison.'
        },
        {
            icon:BiTachometer,
            title:'Powerful Performance',
            desc:'This prevents repetitive impairing the overall facilitates the comparison.'
        },
        {
            icon:LuPalette,
            title:'Unlimited Color Options',
            desc:'This prevents repetitive impairing the overall facilitates the comparison.'
        },
    ]
    return(
        <>
         <div className="tagline bg-white-blur">
            <div className="container">                
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex align-items-center justify-content-between">
                            <ul className="list-unstyled mb-0">
                                <li className="list-inline-item mb-0"><Link to="#" className="text-dark fw-normal"><FiMail className="fea icon-sm text-primary"/> support@starty.com</Link></li>
                                <li className="list-inline-item mb-0 ms-3"><Link to="#" className="text-dark fw-normal"><FiMapPin className="fea icon-sm text-primary"/> 4432 Pick Street Denver, CO 80203</Link></li>
                            </ul>

                            <ul className="list-unstyled social-icon tagline-social text-dark social-dark mb-0">
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

        <section className="bg-half-260 d-table w-100" style={{backgroundImage:`url(${bg1})` , backgroundPosition:'center'}}>
            <div className="bg-overlay bg-dark bg-white-dark opacity-7"></div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="title-heading">
                            <h4 className="display-3 fw-semibold text-white title-dark mb-4">An Expert Digital <br/> Marketing Agency.</h4>
                            <p className="para-desc text-white-50">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                            
                            <div className="mt-4 pt-2">
                                <Link to="/page-services-two" className="btn btn-primary">See Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section" style={{backgroundImage:`url(${shape})`, backgroundRepeat:'no-repeat', backgroundPosition:'right'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <span className="badge bg-soft-primary rounded-pill">Features</span>
                            <h4 className="title mb-3 mt-2">Our Featured Services</h4>
                            <p className="para-desc mx-auto text-muted mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="row">
                            {featureData.map((item,index)=>{
                                const Icon = item.icon
                                return(
                                <div className="col-md-6 mt-4 pt-2" key={index}>
                                    <div className="features feature-primary rounded px-4 py-5 bg-white shadow border-0 d-flex align-items-center">
                                        <div className="fea-icon rounded-circle bg-soft">
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
                </div>
            </div>
            
            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src={about} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <span className="badge bg-soft-primary rounded-pill">Our Company</span>
                            <h4 className="title fw-semibold mb-3 mt-2">Bringing New IT <br/> Business Solutions And Ideas</h4>
                            <p className="text-muted para-desc mb-0">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                        
                            <div className="d-flex mt-4">
                                <FiFastForward className="h4 text-primary mb-0 mt-1"/>
                                <div className="flex-1 ms-2">
                                    <h5>Ability to customize Title Tags</h5>
                                    <p className="text-muted para-desc mb-0">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                                </div>
                            </div>

                            <div className="d-flex mt-4">
                                <FiFastForward className="h4 text-primary mb-0 mt-1"/>
                                <div className="flex-1 ms-2">
                                    <h5>A well-optimized URL structure</h5>
                                    <p className="text-muted para-desc mb-0">Create, collaborate, and turn your ideas into incredible products with the definitive platform for digital design.</p>
                                </div>
                            </div>

                            <div className="mt-4">
                                <Link to="#" className="btn btn-primary">Read More <FiArrowRight className="align-middle"/></Link>
                            </div>
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

        <section className="section" style={{backgroundImage:`url(${cta2})`, backgroundPositionX:'right', backgroundPositionY:'bottom'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <span className="badge bg-soft-primary rounded-pill">Featured Product</span>                            
                            <h4 className="title fw-semibold mb-3 mt-2">Our Case Studies</h4>
                            <p className="para-desc text-muted mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-4 pt-2">
                <div className="row">
                    <div className="col-12">
                        <div className="tiny-four-item">
                            <TinySlider settings={settings}>
                               {blogData.map((item,index)=>{
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="card blog blog-image blog-primary shadow rounded overflow-hidden mx-2">
                                            <div className="card-img">
                                                <img src={item.image} className="img-fluid" alt=""/>
                                                <div className="card-overlay"></div>
                
                                                <div className="position-absolute top-0 start-0 mt-3 ms-4">
                                                    <Link to="#" className="badge text-bg-light">{item.tag}</Link>
                                                </div>
                                            </div>
                                            <div className="content px-4">
                                                <Link to="/blog-detail-one" className="h5 title d-block mb-0 text-white title-dark">{item.title}</Link>
                
                                                <div className="d-flex author align-items-center mt-2">
                                                    <img src={item.client} className="avatar avatar-md-sm rounded-pill" alt=""/>
                                                    <div className="ms-2">
                                                        <small className="text-white-50 user d-block">{item.name}</small>
                                                        <small className="text-white-50 date"> {item.date}</small>
                                                    </div>
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

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-6">
                        <div className="card border-0">
                            <div className="card-body p-0">
                                <img src={contact} className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6 pt-2 pt-sm-0">
                        <div className="card bg-white shadow rounded border-0">
                            <div className="card-body">
                                <h4 className="card-title">Get In Touch !</h4>
                                <div className="custom-form mt-4">
                                    <form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                                    <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                                                </div>
                                            </div>
        
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                    <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                                                </div> 
                                            </div>
        
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Subject</label>
                                                    <input name="subject" id="subject" className="form-control" placeholder="Subject :"/>
                                                </div>
                                            </div>
        
                                            <div className="col-12">
                                                <div className="mb-3">
                                                    <label className="form-label">Comments <span className="text-danger">*</span></label>
                                                    <textarea name="comments" id="comments" rows="3" className="form-control" placeholder="Message :"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button className="btn btn-primary">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterLight/>
        <ScrollTop/>
        </>
    )
}