import React,{useState} from "react";
import { Link } from "react-router-dom";

import image1 from "../../assets/images/portfolio/01.jpg"
import image2 from "../../assets/images/portfolio/02.jpg"
import image3 from "../../assets/images/portfolio/03.jpg"
import image4 from "../../assets/images/portfolio/04.jpg"
import image5 from "../../assets/images/portfolio/05.jpg"
import image6 from "../../assets/images/portfolio/06.jpg"

import NavbarTwo from "../../components/navbar/navbarTwo";
import BlogSidebarTwo from "../../components/blog/blogSidebarTwo";
import Comments from "../../components/blog/comments";
import FooterSix from "../../components/footer/footerSix";
import ScrollTop from "../../components/scrollTop";

import {AiOutlineUser,AiOutlineCalendar, AiOutlineClockCircle, LuSearch,FiArrowRight} from "../../assets/icons/vander"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import { blogData } from "../../data/data";

export default function BlogDetailFour(){
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

    const portfolioImage = [image1, image2, image3, image4, image5, image6]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setIsOpen] = useState(false);

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + portfolioImage.length - 1) % portfolioImage.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImage.length);
    };

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    
    const currentImage = portfolioImage[currentImageIndex];
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" navDark={true}/>
        <section className="bg-half-170">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="title-heading">
                            <ul className="list-inline">
                                <li className="list-inline-item me-3"><AiOutlineUser className="h5 mb-0 me-1"/><Link to="#" className="text-primary h6"> Mr. Donald Ruffy</Link></li>
                                <li className="list-inline-item text-muted h6 me-3"><AiOutlineCalendar className="h5 text-dark me-1 mb-0"/> 15th April 2021</li>
                                <li className="list-inline-item text-muted h6"><AiOutlineClockCircle className="h5 text-dark me-1 mb-0"/> 8 min read</li>
                            </ul>

                            <h5 className="heading fw-semibold page-heading">Capsule Wardrobe Essentials The Leopard Print Coat</h5>

                            <nav aria-label="breadcrumb" className="d-inline-block mt-4">
                                <ul className="breadcrumb p-0 mb-0">
                                    <li className="breadcrumb-item"><Link to="/">Starty</Link></li>
                                    <li className="breadcrumb-item"><Link to="/blog-grid">BLog</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Single Post</li>
                                </ul>
                            </nav>
                        </div>

                        <div id="grid" className="row mt-4">
                            {portfolioImage.map((item,index)=>{
                                return(
                                    <div className="col-lg-4 col-md-4 col-12 spacing picture-item" key={index}>
                                        <div className="card portfolio portfolio-classic portfolio-primary rounded overflow-hidden">
                                            <div className="card-img position-relative">
                                                <img src={item} className="img-fluid" alt=""/>
                                                <div className="card-overlay"></div>
                
                                                <div className="pop-icon">
                                                    <Link to="#" onClick={() => handleImageClick(index)} className="btn btn-pills btn-icon lightbox"><LuSearch/></Link>
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
                            prevSrc={portfolioImage[(currentImageIndex + portfolioImage.length - 1) % portfolioImage.length]}
                            nextSrc={portfolioImage[(currentImageIndex + 1) % portfolioImage.length]}

                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={handleMovePrev}
                            onMoveNextRequest={handleMoveNext}
                        />
                        )}

                        <div className="mt-4">
                            <p className="text-muted"><span className="dropcaps display-4 text-dark me-2">T</span>he most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                            <p className="text-muted mb-0">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                        
                            <blockquote className="text-center mx-auto blockquote"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i> The man who comes back through the door in the wall will never be quite the same as the man who went out. <small className="d-block text-muted mt-2">- Starty Template</small></blockquote>
                        
                            <p className="text-muted">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                        </div>

                        <div className="card shadow rounded border-0 mt-4">
                           <Comments/>
                        </div>

                        <div className="card shadow rounded border-0 mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Leave A Comment :</h5>

                                <form className="mt-4">
                                    <div className="row pt-3">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Your Comment</label>
                                                <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control" required=""></textarea>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Name <span className="text-danger">*</span></label>
                                                <input id="name" name="name" type="text" placeholder="Name" className="form-control" required=""/>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <input id="email" type="email" placeholder="Email" name="email" className="form-control" required=""/>
                                            </div>
                                        </div>
    
                                        <div className="col-md-12">
                                            <div className="send d-grid">
                                                <button type="submit" className="btn btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                <BlogSidebarTwo/>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-3">Related News</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="tiny-three-item">
                            <TinySlider settings={settings}>
                               {blogData.map((item,index)=>{
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="card blog blog-primary shadow rounded overflow-hidden m-2" key={index}>
                                            <div className="image position-relative overflow-hidden">
                                                <img src={item.image} className="img-fluid" alt=""/>
                
                                                <div className="blog-tag">
                                                    <Link to="#" className="badge text-bg-light">{item.tag}</Link>
                                                </div>
                                            </div>
                
                                            <div className="card-body content">
                                                <Link to="/blog-detail-four" className="h5 title text-dark d-block mb-0">{item.title}</Link>
                                                <p className="text-muted mt-2 mb-2">{item.desc}</p>
                                                <Link to="/blog-detail-four" className="link text-dark">Read More<FiArrowRight className="align-middle"/> </Link>
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
        <FooterSix/>
        <ScrollTop/>
        </>
    )
}