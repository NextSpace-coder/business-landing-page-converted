import React,{useState} from "react";
import { Link, } from "react-router-dom";

import freelancer from "../../assets/images/svg/freelancer.svg"
import portfolio1 from "../../assets/images/portfolio/02.jpg"
import portfolio2 from "../../assets/images/portfolio/03.jpg"
import portfolio3 from "../../assets/images/portfolio/04.jpg"
import portfolio4 from "../../assets/images/portfolio/05.jpg"
import portfolio5 from "../../assets/images/portfolio/06.jpg"
import portfolio6 from "../../assets/images/portfolio/07.jpg"
import cta from '../../assets/images/cta05.png'

import NavbarTwo from "../../components/navbar/navbarTwo";
import Partners from "../../components/partners";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {BsPhone, FiArrowRight, PiCubeBold,FiAirplay, BsVectorPen, AiOutlineDribbble, PiBracketsCurlyBold,PiPuzzlePieceBold, AiOutlineCheckCircle} from "../../assets/icons/vander"
import ClientOne from "../../components/client/clientOne";
import Footer from "../../components/footer/footer";
import ScrollTop from "../../components/scrollTop";

export default function IndexFreelancer(){
    const [activeIndex, setActiveIndex] = useState(1)
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setIsOpen] = useState(false);

    const workImage = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6]

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + workImage.length - 1) % workImage.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % workImage.length);
    };

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    
    const currentImage = workImage[currentImageIndex];

    const serviceData = [
        {
            icon:BsPhone,
            title1:'Web & Mobile',
            title2:'App Development',
            iconClass:'feature-primary',
        },
        {
            icon:PiCubeBold,
            title1:'Blockchain',
            title2:'Development',
            iconClass:'feature-success',
        },
        {
            icon:FiAirplay,
            title1:'Ui/Ux Design',
            title2:'For Mobile & Web',
            iconClass:'feature-warning',
        },
        {
            icon:BsVectorPen,
            title1:'Illustration Design',
            title2:'(Flat, 3D & More)',
            iconClass:'feature-danger',
        },
        {
            icon:AiOutlineDribbble,
            title1:'Branding Design',
            title2:'(Logo, Packaging)',
            iconClass:'feature-warning',
        },
        {
            icon:FiAirplay,
            title1:'Digital Marketing',
            title2:'& Management',
            iconClass:'feature-danger',
        },
        {
            icon:PiBracketsCurlyBold,
            title1:'Custom Wordpress',
            title2:'Design & Dev.',
            iconClass:'feature-primary',
        },
        {
            icon:PiPuzzlePieceBold,
            title1:'Stratagy & Product',
            title2:'Management',
            iconClass:'feature-success',
        },
    ]

    const workData = [
        {
            image:portfolio1,
            title1:'The Papers',
            title2:'Designing',
        },
        {
            image:portfolio2,
            title1:'The Headphones',
            title2:'Photography',
        },
        {
            image:portfolio3,
            title1:'The Projects',
            title2:'Development',
        },
        {
            image:portfolio4,
            title1:'The Cup of Coffee',
            title2:'Branding',
        },
        {
            image:portfolio5,
            title1:'The Pen and Books',
            title2:'Designing',
        },
        {
            image:portfolio6,
            title1:'The Strawberry',
            title2:'Photography',
        },
    ]
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" navDark={true}/>

        <section className="bg-half-170 bg-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="title-heading">
                            <h4 className="display-4 fw-semibold mb-4">If you want to <br/> <span className="text-primary">hire pro</span> right now!</h4>
                            <p className="para-desc title-dark text-muted mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        
                            <div className="mt-4">
                                <Link to="#" className="btn btn-primary">Create Account</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <img src={freelancer} className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-4 border-bottom border-top">
            <div className="container">
               <Partners/>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-3">Choose from a pool of web development <br/> services we have for you</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {serviceData.map((item,index)=>{
                        const Icon = item.icon
                        return(
                        <div className="col-xl-3 col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                            <div className={`${item.iconClass} card features feature-primary features-classic p-4 rounded-md shadow border-0`}>
                                <div className="fea-icon bg-soft rounded-md">
                                    <Icon className="icon"/>
                                </div>

                                <div className="content mt-4">
                                    <h5 className="mb-3">{item.title1}<br/> {item.title2}</h5>
                                    <Link to="/page-single-service" className="title text-dark">Read More <FiArrowRight/></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h6 className="text-primary">Quickstart</h6>
                            <h4 className="title mb-3">Awesome isn't it? Let's dive in!</h4>
                            <p className="para-desc mx-auto text-muted mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8 col-mg-10 mt-4 pt-2">
                        <div className="bg-dark bg-white-dark p-4 rounded shadow">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded bg-soft-light" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <Link className={`${activeIndex === 1 ? 'active' : ' '} nav-link nav-link-alt rounded`} onClick={() => setActiveIndex(1)} to="#">
                                                <div className="text-center">
                                                    <h6 className="title fw-normal mb-0 text-light title-dark">npm</h6>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link className={`${activeIndex === 2 ? 'active' : ' '} nav-link nav-link-alt rounded`} to="#" onClick={() => setActiveIndex(2)}>
                                                <div className="text-center">
                                                    <h6 className="title fw-normal mb-0 text-light title-dark">nuget</h6>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link className={`${activeIndex === 3 ? 'active' : ' '} nav-link nav-link-alt rounded`} to="#" onClick={() => setActiveIndex(3)}>
                                                <div className="text-center">
                                                    <h6 className="title fw-normal mb-0 text-light title-dark">spm</h6>
                                                </div>
                                            </Link>
                                        </li>
                                        
                                        <li className="nav-item">
                                            <Link className={`${activeIndex === 4 ? 'active' : ' '} nav-link nav-link-alt rounded`} to="#" onClick={() => setActiveIndex(4)}>
                                                <div className="text-center">
                                                    <h6 className="title fw-normal mb-0 text-light title-dark">github</h6>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="tab-content">
                                        <div className={`${activeIndex === 1 ? 'active show' : ' '} tab-pane fade`}>
                                            <p className="text-muted mb-0"><span className="text-success">$</span> npm install <span className="text-success">-g</span> claps.js</p>
                                        </div>
                                        
                                        <div className={`${activeIndex === 2 ? 'active show' : ' '} tab-pane fade`}>
                                            <p className="text-muted mb-0">coming soon ...</p>                       
                                        </div>
            
                                        <div className={`${activeIndex === 3 ? 'active show' : ' '} tab-pane fade`}>
                                            <p className="text-muted mb-0">coming soon ...</p>                       
                                        </div>
            
                                        <div className={`${activeIndex === 4 ? 'active show' : ' '} tab-pane fade`}>
                                            <p className="text-muted mb-0">coming soon ...</p>                       
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ul className="list-unstyled text-muted mb-0 mt-3">
                            <li className="list-inline-item me-lg-5 me-4"><span className="text-success h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Organize your data</li>
                            <li className="list-inline-item me-lg-5 me-4"><span className="text-success h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Work with any team</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div id="grid" className="row">
                            <div className="col-md-6 col-12 picture-item">
                                <div className="section-title text-center text-md-start mt-md-5 mb-4 pb-2">
                                    <h6 className="text-primary">Our Work</h6>
                                    <h4 className="title mb-3">Inspire design for <br/> the Digital Age</h4>
                                    <p className="para-desc mx-auto text-muted mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                                </div>
                            </div>
                            {workData.map((item,index)=>{
                                return(
                                <div className="col-md-6 col-12 mt-4 pt-2 picture-item" key={index}>
                                    <div className="card portfolio portfolio-modern portfolio-primary rounded overflow-hidden">
                                        <Link to="#" onClick={() => handleImageClick(index)} className="lightbox">
                                            <img src={item.image} className="img-fluid" alt=""/>
                                        </Link>
                                        <div className="content text-center p-3">
                                            <Link to="/portfolio-detail-three" className="text-dark h6 mb-0 d-block title">{item.title1}</Link>
                                            <small className="text-muted fw-normal mb-0">{item.title2}</small>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
        
                            <div className="col-md-6 col-12 mt-4 pt-2 picture-item">
                                <div className="section-title text-center text-md-start">
                                    <h4 className="mb-3">Check out more creative designs</h4>
                                    <p className="para-desc mx-auto text-muted mb-4">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                                
                                    <Link to="#" className="btn btn-primary">Explore More <FiArrowRight className="align-middle"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {open && (
                <Lightbox
                    mainSrc={currentImage}
                    prevSrc={workImage[(currentImageIndex + workImage.length - 1) % workImage.length]}
                    nextSrc={workImage[(currentImageIndex + 1) % workImage.length]}

                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
        </section>

        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <span className="text-primary">Testimonial</span>
                            <h4 className="title mb-3 mt-2">Don't believe us, <br/> Check what our partners say</h4>
                            <p className="para-desc mx-auto text-muted mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>
                <ClientOne bgWhite={true}/>
            </div>
        </section>

        <section className="section" style={{backgroundImage:`url(${cta})`, backgroundPosition:'left'}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8 col-12">
                        <div className="section-title">
                            <h4 className="title mb-3">Need a hand with your project? <br/> Let’s build an ideal Webdesign</h4>
                            <p className="para-desc title-dark text-muted mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0 text-md-end">
                        <Link to="/page-contact" className="btn btn-primary">Contact us <FiArrowRight className="align-middle"/></Link>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}