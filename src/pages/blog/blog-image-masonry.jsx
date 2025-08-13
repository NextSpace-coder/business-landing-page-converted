import React from "react";
import { Link } from "react-router-dom";

import bg1 from '../../assets/images/bg/blog02.jpg'

import NavbarTwo from "../../components/navbar/navbarTwo"
import FooterSix from "../../components/footer/footerSix";
import ScrollTop from "../../components/scrollTop";

import { BlogImageMasonryData } from "../../data/data";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

export default function BlogImageMasonry(){
    return(
       <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-light nav-right"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg1})`}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold page-heading text-white title-dark">Blog & News</h5>
                            <p className="text-white-50 para-desc mx-auto mb-0">Our Latest Blog and News in Image Masonry Layouts</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 768: 2, 991:3}}>
                        <Masonry>
                        {BlogImageMasonryData.map((item,index)=>{
                        return(
                            <div className="p-2" key={index}>
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
        
                                        <div className="d-flex author align-items-center mt-2">
                                            <img src={item.client} className="avatar avatar-md-sm rounded-pill" alt=""/>
                                            <div className="ms-2">
                                                <small className="text-white-50 user d-block">{item.name}</small>
                                                <small className="text-white-50 date">{item.date}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                        </Masonry>
                    </ResponsiveMasonry>
                   
                </div>

                <div className="row mt-4">
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
        </section>
        <FooterSix/>
        <ScrollTop/>
       </>
    )
}