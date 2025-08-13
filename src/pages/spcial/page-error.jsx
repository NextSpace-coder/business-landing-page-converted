import React from "react";
import { Link } from "react-router-dom";

import bg1 from "../../assets/images/cta05.png"

import image from "../../assets/images/svg/404.svg"

export default function Error(){
    return(
    <section className="bg-home d-flex align-items-center" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-12 text-center">
                    <img src={image} style={{maxWidth:'500px'}} alt=""/>
                    <div className="text-uppercase mt-4 display-5 fw-semibold">Page Not Found</div>
                    <div className="text-capitalize text-dark mb-4 error-page"></div>
                    <p className="text-muted para-desc mx-auto">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 text-center">  
                    <Link to="/" className="btn btn-primary mt-4">Go To Home</Link>
                </div>
            </div>
        </div>
    </section> 
    )
}