import React from "react";
import { Link } from "react-router-dom";

import client1 from "../../assets/images/client/05.jpg"

import NavbarTwo from "../../components/navbar/navbarTwo";
import BlogSidebar from "../../components/blog/blogSidebar";
import FooterSix from "../../components/footer/footerSix";
import ScrollTop from "../../components/scrollTop";

import { blogData } from "../../data/data";

import {FiArrowRight} from '../../assets/icons/vander'

export default function BlogAuthor(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" navDark={true}/>
        <section className="bg-half-170 pb-0 d-table w-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="d-md-flex align-items-center border-bottom pb-5">
                            <img src={client1} className="img-fluid rounded-circle shadow-md avatar avatar-medium d-block mx-auto" alt=""/>

                            <div className="section-title ms-md-4 mt-4 mt-sm-0 text-md-start text-center">
                                <h4 className="title mb-0">Maria Brown</h4>
                                <small className="fw-medium text-muted text-uppercase">Journalist / Photographer</small>
    
                                <p className="text-muted mt-4">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="row">
                            {blogData.slice(0,8).map((item,index)=>{
                                return(
                                    <div className="col-lg-6 mb-4 pb-2" key={index}>
                                        <div className="card blog blog-primary shadow rounded overflow-hidden">
                                            <div className="image position-relative overflow-hidden">
                                                <img src={item.image} className="img-fluid" alt=""/>
                
                                                <div className="blog-tag">
                                                    <Link to="#" className="badge text-bg-light">{item.tag}</Link>
                                                </div>
                                            </div>
                
                                            <div className="card-body content">
                                                <Link to={`/blog-detail-two/${item.id}`} className="h5 title text-dark d-block mb-0">{item.title}</Link>
                                                <p className="text-muted mt-2 mb-2">{item.title}</p>
                                                <Link to={`/blog-detail-two/${item.id}`} className="link text-dark">Read More <FiArrowRight className="align-middle"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
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
                       <BlogSidebar search={true}/>
                    </div>
                </div>
            </div>
        </section>
        <FooterSix/>
        <ScrollTop/>
        </>
    )
}