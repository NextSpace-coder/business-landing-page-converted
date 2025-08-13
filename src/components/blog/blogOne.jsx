import React from "react";
import { Link } from "react-router-dom";

import { blogData } from "../../data/data";

import {FiArrowRight} from "../../assets/icons/vander"

export default function BlogOne(){
    return(
        <>
        <div className="row justify-content-center">
            <div className="col-12">
                <div className="section-title text-center mb-4 pb-2">
                    <h6 className="text-primary">Blogs</h6>
                    <h4 className="title fw-semibold mt-2 mb-3">Latest Blog & News</h4>
                    <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                </div>
            </div>
        </div>

        <div className="row justify-content-center">
            {blogData.slice(0, 3).map((item, index)=>{
                return(
                <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
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
        </div>
        </>
    )
}