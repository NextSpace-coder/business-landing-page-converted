import React from "react";
import { Link } from "react-scroll";

import bg1 from "../../assets/images/bg/blog-bg01.jpg"
import bg2 from "../../assets/images/bg/blog-bg02.jpg"
import bg3 from "../../assets/images/bg/blog-bg03.jpg"

import image1 from "../../assets/images/blog/01.jpg"

import blog1 from "../../assets/images/blog/img01.jpg"
import blog2 from "../../assets/images/blog/03.jpg"
import blog3 from "../../assets/images/blog/img02.jpg"
import blog4 from "../../assets/images/blog/img03.jpg"
import blog5 from "../../assets/images/blog/06.jpg"
import blog6 from "../../assets/images/blog/07.jpg"


import NavbarTwo from "../../components/navbar/navbarTwo";
import BlogSidebar from "../../components/blog/blogSidebar";
import FooterFour from "../../components/footer/footerFour";
import ScrollTop from "../../components/scrollTop";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import {AiOutlineUser, AiOutlineCalendar, AiOutlineClockCircle, FiArrowRight} from "../../assets/icons/vander"

export default function IndexPersonalBlog(){
    const blogData = [
        {
            image:blog1,
            tag:'Branding',
            title:'The Dark Side of Overnight Success',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century."
        },
        {
            image:blog2,
            tag:'Technology',
            title:'The Right Hand of Business IT World',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century."
        },
        {
            image:blog3,
            tag:'Personal',
            title:'How to Create Your Own Viral Moments',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century."
        },
        {
            image:blog4,
            tag:'Business',
            title:'How to Write a Business Plan For Any Business',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century."
        },

        {
            image:blog5,
            tag:'Marketing',
            title:'Seeing the Customer Journey More Clearly',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century."
        },
        {
            image:blog6,
            tag:'Production',
            title:'The Signs of a Highly Giftable Product',
            desc:"The most well-known dummy text is the 'Lorem Ipsum', in the 16th century."
        },
    ]
    return(
        <>
         <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-light nav-right"/>

         <section className="home-slider position-relative">
            <Carousel showArrows={false} selectedItem={false} infiniteLoop={true} autoPlay={true} interval={3000} showStatus={false}>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg1})`}}>
                            <div className="bg-overlay"></div>
                            <div className="container">
                                <div className="container">
                                    <div className="row justify-content-center mt-5">
                                        <div className="col-lg-12 text-center">
                                            <div className="title-heading">
                                                <Link to="#" className="heading text-white title-dark h4">Top 10 Things to <br/> See and Do in Northern Norway</Link>
                                            
                                                <ul className="list-inline mt-4 mb-0">
                                                    <li className="list-inline-item me-3"><AiOutlineUser className="text-white h5 mb-0 me-1"/><Link to="#" className="text-white-50 h6"> Mr. Donald Ruffy</Link></li>
                                                    <li className="list-inline-item text-white-50 h6 me-3"><AiOutlineCalendar className="h5 text-white title-dark mb-0 me-1"/> 13th March 2023</li>
                                                    <li className="list-inline-item text-white-50 h6"><AiOutlineClockCircle className="h5 text-white title-dark mb-0 me-1"/> 8 min read</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg2})`}}>
                            <div className="bg-overlay"></div>
                            <div className="container">
                                <div className="row justify-content-center mt-5">
                                    <div className="col-lg-12 text-center">
                                        <div className="title-heading">
                                            <Link to="#" className="heading text-white title-dark h4">Best Love Songs: <br/> Romantic Songs of All Time</Link>
                                        
                                            <ul className="list-inline mt-4 mb-0">
                                                <li className="list-inline-item me-3"><AiOutlineUser className="text-white h5 mb-0 me-1"/><Link to="#" className="text-white-50 h6"> Mr. Donald Ruffy</Link></li>
                                                <li className="list-inline-item text-white-50 h6 me-3"><AiOutlineCalendar className="h5 text-white title-dark mb-0 me-1"/> 5th May 2021</li>
                                                <li className="list-inline-item text-white-50 h6"><AiOutlineClockCircle className="h5 text-white title-dark mb-0 me-1"/> 8 min read</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active" data-bs-interval="3000">
                        <div className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg3})`}}>
                            <div className="bg-overlay"></div>
                            <div className="container">
                                <div className="row justify-content-center mt-5">
                                    <div className="col-lg-12 text-center">
                                        <div className="title-heading">
                                            <Link to="#" className="heading text-white title-dark h4">Discover the Hidden<br/> Links Between Music and Food</Link>
                                        
                                            <ul className="list-inline mt-4 mb-0">
                                                <li className="list-inline-item me-3"><AiOutlineUser className="text-white h5 mb-0 me-1"/><Link to="#" className="text-white-50 h6"> Mr. Donald Ruffy</Link></li>
                                                <li className="list-inline-item text-white-50 h6 me-3"><AiOutlineCalendar className="h5 text-white title-dark mb-0 me-1"/> 19th June 2023</li>
                                                <li className="list-inline-item text-white-50 h6"><AiOutlineClockCircle className="h5 text-white title-dark mb-0 me-1"/> 8 min read</li>
                                            </ul>
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
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="row">
                            <div className="col-lg-12 mb-4 pb-2 picture-item">
                                <div className="card blog blog-primary shadow rounded overflow-hidden">
                                    <div className="image position-relative overflow-hidden">
                                        <img src={image1} className="img-fluid" alt=""/>
        
                                        <div className="blog-tag">
                                            <Link to="#" className="badge text-bg-light">Corporate</Link>
                                        </div>
                                    </div>
        
                                    <div className="card-body content">
                                        <Link to="/blog-detail-five" className="h5 title text-dark d-block mb-0">Building Your Corporate Identity from Starty</Link>
                                        <p className="text-muted mt-2 mb-2">The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.</p>
                                        <Link to="/blog-detail-five" className="link text-dark">Read More <FiArrowRight className="align-middle"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="row mb-3" id="grid">
                            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 992: 2,}}>
                                <Masonry>
                                    {blogData.map((item,index)=>{
                                        return(
                                            <div className="p-2 picture-item" key={index}>
                                                <div className="card blog blog-primary shadow rounded overflow-hidden">
                                                    <div className="image position-relative overflow-hidden">
                                                        <img src={item.image} className="img-fluid" alt=""/>
                        
                                                        <div className="blog-tag">
                                                            <Link to="#" className="badge text-bg-light">{item.tag}</Link>
                                                        </div>
                                                    </div>
                        
                                                    <div className="card-body content">
                                                        <Link to={`/blog-detail-two/${item.id}`} className="h5 title text-dark d-block mb-0">{item.title}</Link>
                                                        <p className="text-muted mt-2 mb-2">{item.desc}</p>
                                                        <Link to={`/blog-detail-two/${item.id}`} className="link text-dark">Read More <FiArrowRight className="align-middle"/></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Masonry>
                            </ResponsiveMasonry>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <ul className="pagination justify-content-center mb-0">
                                    <li className="page-item">
                                        <Link className="page-link" to="#" aria-label="Previous">
                                            <span aria-hidden="true"><i className="mdi mdi-chevron-left mdi-18px"></i></span>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                    <li className="page-item"><Link className="page-link active" to="#">2</Link></li>
                                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#" aria-label="Next">
                                            <span aria-hidden="true"><i className="mdi mdi-chevron-right mdi-18px"></i></span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <BlogSidebar/>
                    </div>
                </div>
            </div>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}