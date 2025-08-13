import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Link as Link1} from "react-scroll"

import bg1 from "../../assets/images/bg/portfolio.jpg"

import NavbarTwo from "../../components/navbar/navbarTwo";
import Process from "../../components/process"
import PricingOne from "../../components/pricing/pricingOne";
import Partners from "../../components/partners";
import BlogOne from "../../components/blog/blogOne";
import FooterThree from "../../components/footer/footerThree";
import ScrollTop from "../../components/scrollTop";

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.css';

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {FiPlay, LuSearch} from "../../assets/icons/vander"

import { projectsData, projectImage } from "../../data/data";


export default function IndexPortfolio(){
    const [isOpen, setOpen] = useState(false);
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
    
    const currentImage = projectImage[currentImageIndex - 1];
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-light nav-right"/>

        <section className="bg-half-260 d-table w-100" style={{backgroundImage:`url(${bg1})`}}>
            <div className="bg-overlay bg-dark bg-white-dark opacity-5"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h4 className="display-3 text-white title-dark fw-semibold mb-0">We Design & Build <br/> Products For All.</h4>

                            <div className="watch-video mt-4">
                                <Link to="#!" onClick={() => setOpen(true)} className="play-icon-circle lightbox h4 mb-0 bg-primary text-white title-dark text-center rounded-pill" ><FiPlay className="icon"/></Link>
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
            <div className="home-shape-arrow">
                <Link1 to="features" smooth={true} duration={500} className="mouse-down"><i className="mdi mdi-arrow-down arrow-icon text-dark h5 shadow-md"></i></Link1>
            </div> 
        </section>

        <div className="position-relative">
            <div className="shape overflow-hidden text-light">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="bg-light">
            <div className="container py-3">
                <Partners />
            </div>
        </section>
        <section className="section">
            <div className="container">
                <Process title="Work Process" icon={false}/>
            </div>
            
            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="row align-items-center">
                            <div className="col-lg-7 col-md-8">
                                <div className="section-title text-md-start text-center mb-4 pb-2">
                                    <h4 className="title fw-semibold mb-3">Our Latest Projects</h4>
                                    <p className="para-desc text-muted mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-4 d-none d-md-block">
                                <div className="text-md-end text-center">
                                    <Link to="/portfolio-classic-four" className="btn btn-primary">See More</Link>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            {projectsData.slice(0,6).map((item, index)=>{
                                return(
                                    <div className="col-md-6 col-12 spacing picture-item" key={index}>
                                        <div className="card portfolio portfolio-classic portfolio-primary rounded overflow-hidden">
                                            <div className="card-img position-relative">
                                                <img src={item.image} className="img-fluid" alt=""/>
                                                <div className="card-overlay"></div>
                
                                                <div className="pop-icon">
                                                    <Link to="#" onClick={() => handleImageClick(item.id)} className="btn btn-pills btn-icon lightbox"><LuSearch/></Link>
                                                </div>
                                            </div>
                                            <div className="content text-center p-3">
                                                <Link to="/portfolio-detail-two" className="text-dark h6 mb-0 d-block title">{item.title}</Link>
                                                <small className="text-muted fw-normal mb-0">{item.name}</small>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
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
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
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

            <div className="container mt-100 mt-60">
                <BlogOne/>
            </div>
        </section>
        <FooterThree top={false}/>
        <ScrollTop/>
        </>
    )
}