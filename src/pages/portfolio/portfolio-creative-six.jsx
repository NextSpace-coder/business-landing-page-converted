import React from "react";

import bg1 from "../../assets/images/bg/port03.jpg"

import NavbarTwo from "../../components/navbar/navbarTwo";
import FooterSeven from "../../components/footer/footerSeven";
import ScrollTop from "../../components/scrollTop";
import CreativePortfolioTwo from "../../components/creativePortfolioTwo";

export default function CreativeSix(){
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg1})`}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h5 className="heading fw-semibold page-heading text-white title-dark">Portfolio & Works</h5>
                            <p className="text-white-50 para-desc mx-auto mb-0">Showcase of Our Awesome Works in Five Columns</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
           <CreativePortfolioTwo gridClass="row row-cols-md-2 row-cols-lg-6 mt-4 pt-2" />
        </section>
        <FooterSeven/>
        <ScrollTop/>
        </>
    )
}