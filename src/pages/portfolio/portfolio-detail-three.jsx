import React,{useState} from "react";
import { Link } from "react-router-dom";

import image1 from "../../assets/images/portfolio/01.jpg"
import image2 from "../../assets/images/portfolio/02.jpg"
import image3 from "../../assets/images/portfolio/03.jpg"
import image4 from "../../assets/images/portfolio/04.jpg"
import image5 from "../../assets/images/portfolio/05.jpg"
import image6 from "../../assets/images/portfolio/06.jpg"
import image7 from "../../assets/images/portfolio/07.jpg"
import image8 from "../../assets/images/portfolio/08.jpg"

import NavbarTwo from "../../components/navbar/navbarTwo"
import FooterSeven from "../../components/footer/footerSeven";
import ScrollTop from "../../components/scrollTop";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {FaFacebookF,FiInstagram, FaTwitter,FaLinkedinIn,FiDribbble,LuSearch} from '../../assets/icons/vander'

export default function PortfolioDetailThree(){
    const images = [image1,image2,image3, image4, image5, image6, image7, image8]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setIsOpen] = useState(false);

    
    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + images.length - 1) % images.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    
    const currentImage = images[currentImageIndex];
    return(
        <>
         <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" navDark={true}/>
        <section className="section bg-light">
            <div className="container">
                <div className="row mt-5 align-items-center">
                    <div className="col-lg-8 col-md-6">
                        <div className="title-heading text-md-start text-center">
                            <h2 className="mb-0">Modern & Classic</h2>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 mt-sm-0">
                        <div className="text-md-end text-center">
                            <nav aria-label="breadcrumb" className="d-inline-block">
                                <ul className="breadcrumb mb-0 p-0">
                                    <li className="breadcrumb-item"><Link to="/">Starty</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Portfolio</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Single Post</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div id="grid" className="row">
                    {images.map((item,index)=>{
                        return(
                        <div className="col-md-3 col-12 spacing picture-item" key={index}>
                            <div className="card portfolio portfolio-classic portfolio-primary rounded overflow-hidden">
                                <div className="card-img position-relative">
                                    <img src={item} className="img-fluid" alt=""/>
                                    <div className="card-overlay"></div>

                                    <div className="pop-icon">
                                        <Link to="#" onClick={() => handleImageClick(index)}  className="btn btn-pills btn-icon lightbox"><LuSearch/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
                {open && (
                        <Lightbox
                            mainSrc={currentImage}
                            prevSrc={images[(currentImageIndex + images.length - 1) % images.length]}
                            nextSrc={images[(currentImageIndex + 1) % images.length]}

                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={handleMovePrev}
                            onMoveNextRequest={handleMoveNext}
                        />
                        )}
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="section-title me-md-4">
                            <h4 className="title mb-4">Project Description</h4>
    
                            <p className="text-muted">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                            <p className="text-muted mb-0">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title">
                            <h4 className="title mb-4">Project Details</h4>
                        </div>

                        <dl className="row mb-0">
                            <dt className="col-md-4 fw-medium col-5">Client :</dt>
                            <dd className="col-md-8 col-7 text-muted">Calvin Carlo</dd>

                            <dt className="col-md-4 fw-medium col-5">Category :</dt>
                            <dd className="col-md-8 col-7 text-muted">Web Design</dd>

                            <dt className="col-md-4 fw-medium col-5">Date :</dt>
                            <dd className="col-md-8 col-7 text-muted">15th April 2021</dd>

                            <dt className="col-md-4 fw-medium col-5">Website :</dt>
                            <dd className="col-md-8 col-7 text-muted">www.yourdomain.com</dd>

                            <dt className="col-md-4 fw-medium col-5">Location :</dt>
                            <dd className="col-md-8 col-7 text-muted">3/2/64 Mongus Street, UK</dd>
                        </dl>
                    </div>

                    <div className="col-12">
                        <div className="mt-5 pt-5 border-top">
                            <ul className="list-unstyled align-items-center social-icon social mb-0">
                                <li className="list-inline-item me-3">Share :</li>
                                <li className="list-inline-item me-2 mb-0">Share :</li>
                                <li className="list-inline-item"><Link to="#" className="rounded-pill"><FaFacebookF/></Link></li>
                                <li className="list-inline-item"><Link to="#" className="rounded-pill mt-1"><FiInstagram/></Link></li>
                                <li className="list-inline-item"><Link to="#" className="rounded-pill mt-1"><FaTwitter/></Link></li>
                                <li className="list-inline-item"><Link to="#" className="rounded-pill mt-1"><FaLinkedinIn/></Link></li>
                                <li className="list-inline-item"><Link to="#" className="rounded-pill mt-1"><FiDribbble/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterSeven/>
        <ScrollTop/>
        </>
    )
}