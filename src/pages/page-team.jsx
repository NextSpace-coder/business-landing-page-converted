import React from "react";
import { Link } from "react-router-dom";

import bg1 from "../assets/images/bg/team.jpg"
import client1 from "../assets/images/client/09.jpg"
import client2 from "../assets/images/client/10.jpg"
import client3 from "../assets/images/client/11.jpg"
import client4 from "../assets/images/client/12.jpg"
import client5 from "../assets/images/client/13.jpg"
import client6 from "../assets/images/client/14.jpg"
import client7 from "../assets/images/client/15.jpg"
import client8 from "../assets/images/client/16.jpg"
import NavbarTwo from "../components/navbar/navbarTwo";

import Team from "../components/team";
import FooterSeven from "../components/footer/footerSeven";
import ScrollTop from "../components/scrollTop";

import {FiFacebook,FiInstagram,FiTwitter,FiLinkedin} from "../assets/icons/vander"

export default function PageTeam(){

    const teamData = [
        {
            image:client1,
            name:'Dennis Rosario',
            title:'C.E.O'
        },
        {
            image:client2,
            name:'Billy Gregory',
            title:'Manager'
        },
        {
            image:client3,
            name:'Connie Dunton',
            title:'Manager'
        },
        {
            image:client4,
            name:'Alberta Petty',
            title:'Manager'
        },
        {
            image:client5,
            name:'Dennis Rosario',
            title:'Manager'
        },
        {
            image:client6,
            name:'Billy Gregory',
            title:'Manager'
        },
        {
            image:client7,
            name:'Connie Dunton',
            title:'Manager'
        },
        {
            image:client8,
            name:'Alberta Petty',
            title:'Manager'
        },
    ]
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">Showcase your team</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">Meet Our Team</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link to="/">Starty</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Team</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row">
                    {teamData.map((item,index)=>{
                        return(
                        <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                            <div className="card team team-primary rounded-0 team-two overflow-hidden shadow">
                                <div className="team-image">
                                    <img src={item.image} className="img-fluid" alt=""/>
                                    <div className="overlay"></div>
                                </div>
                                <ul className="list-unstyled social-icon team-social mb-0">
                                    <li><Link to="#" className="rounded"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                    <li className="mt-1"><Link to="#" className="rounded"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                    <li className="mt-1"><Link to="#" className="rounded"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                    <li className="mt-1"><Link to="#" className="rounded"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                                </ul>
                                <div className="team-content">
                                    <Link to="#" className="h6 text-uppercase d-block mb-0 text-white title-dark">{item.name}</Link>
                                    <small className="text-white title-dark">{item.title}</small>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="section  bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mb-4 pb-2">
                        <div className="section-title text-center">
                            <h4 className="title fw-semibold mb-3">About the team</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <Team/>
            </div>
        </section>
        <FooterSeven/>
        <ScrollTop/>
        </>
    )
}