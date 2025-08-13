import React from "react";
import { Link } from "react-router-dom";

import bg1 from '../../assets/images/bg/blog02.jpg'

import NavbarTwo from "../../components/navbar/navbarTwo"
import FooterSix from "../../components/footer/footerSix";
import ScrollTop from "../../components/scrollTop";

import { BlogImageData } from "../../data/data";

export default function BlogImageGrid(){
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
                            <p className="text-white-50 para-desc mx-auto mb-0">Our Latest Blog and News in Image Grid Layouts</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="row">
                    {BlogImageData.map((item,index)=>{
                        return(
                            <div class="col-lg-4 col-md-6 mb-4 pb-2" key={index}>
                                <div class="card blog blog-image blog-primary shadow rounded overflow-hidden">
                                    <div class="card-img">
                                        <img src={item.image} class="img-fluid" alt=""/>
                                        <div class="card-overlay"></div>
        
                                        <div class="position-absolute top-0 start-0 mt-3 ms-4">
                                            <Link to="#" class="badge text-bg-light">{item.tag}</Link>
                                        </div>
                                    </div>
                                    <div class="content px-4">
                                        <Link to="/blog-detail-one" class="h5 title d-block mb-0 text-white title-dark">{item.title}</Link>
        
                                        <div class="d-flex author align-items-center mt-2">
                                            <img src={item.client} class="avatar avatar-md-sm rounded-pill" alt=""/>
                                            <div class="ms-2">
                                                <small class="text-white-50 user d-block">{item.name}</small>
                                                <small class="text-white-50 date">{item.date}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div class="row">
                    <div class="col-12">
                        <ul class="pagination justify-content-center mb-0">
                            <li class="page-item">
                                <Link class="page-link" to="#" aria-label="Previous">
                                    <span aria-hidden="true"><i class="mdi mdi-chevron-left mdi-18px"></i></span>
                                </Link>
                            </li>
                            <li class="page-item"><Link class="page-link" to="#">1</Link></li>
                            <li class="page-item"><Link class="page-link active" to="#">2</Link></li>
                            <li class="page-item"><Link class="page-link" to="#">3</Link></li>
                            <li class="page-item">
                                <Link class="page-link" to="#" aria-label="Next">
                                    <span aria-hidden="true"><i class="mdi mdi-chevron-right mdi-18px"></i></span>
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