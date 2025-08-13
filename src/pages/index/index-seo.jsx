import React, { useState } from "react";
import { Link } from "react-router-dom";

import seo from "../../assets/images/seo.png"
import bg1 from "../../assets/images/bg-shape.png"
import coworking from "../../assets/images/svg/coworking.svg"
import faqs from "../../assets/images/faqs.png"

import NavbarTwo from "../../components/navbar/navbarTwo";
import Partners from "../../components/partners";
import ClientOne from "../../components/client/clientOne";
import Footer from "../../components/footer/footer";
import ScrollTop from "../../components/scrollTop";

import {FiAirplay, LiaReact, FiUsers, FiArrowRight,AiOutlineCheckCircle} from "../../assets/icons/vander"

export default function IndexSeo(){
    const [activeIndex, setActiveIndex] = useState(1)

    const accordionData = [
        {
            id:1,
            title:'How does it work ?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:2,
            title:'Do I need a designer to use Starty ?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:3,
            title:'What do I need to do to start selling ?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:4,
            title:'Does CMR offer relocation assistance?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:5,
            title:'How is management perceived at CMR?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:6,
            title:'How is the work/life balance at CMR?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
    ]

    const serviceData = [
        {
            icon:FiAirplay,
            title:'Great Experience',
            desc:'It is said that song composers of the past used dummy texts as lyrics when writing to sing with the melody.',
        },
        {
            icon:LiaReact,
            title:'Effective Strategy',
            desc:'It is said that song composers of the past used dummy texts as lyrics when writing to sing with the melody.',
        },
        {
            icon:FiUsers,
            title:'Unique Solutions',
            desc:'It is said that song composers of the past used dummy texts as lyrics when writing to sing with the melody.',
        },
    ]
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <section className="bg-home d-flex align-items-center seo-home">
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                        <div className="heading-title margin-top-100">
                            <h1 className="heading fw-semibold text-white title-dark mb-3">We build Digital products <br/> for your Success</h1>
                            <p className="para-desc mx-auto text-white-50">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                            <div className="subcribe-form mt-4 pt-2">
                                <form>
                                    <div className="mb-3">
                                        <input type="url" id="url" className="bg-white rounded-lg border opacity-7" required placeholder="https://shreethemes.in"/>
                                        <button type="submit" className="btn btn-pills btn-primary">Get Started</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-9 col-md-10">
                                <div className="home-dashboard">
                                    <img src={seo} alt="" style={{top:'0'}} className="img-fluid"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="position-relative">
            <div className="shape seo-hero overflow-hidden text-light"></div>
        </div>

        <section className="section mt-4" style={{backgroundImage:`url(${bg1})`, backgroundRepeat:'no-repeat', backgroundPosition:'right'}}>
            <div className="container">
                <Partners/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <span className="badge text-bg-primary rounded-lg">Services</span>
                            <h4 className="title mt-2 mb-4">Core Features</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {serviceData.map((item,index)=>{
                        const Icon = item.icon
                        return(
                            <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                                <div className="card p-4 rounded features features-classic feature-primary">
                                    <div className="fea-icon rounded bg-light shadow icon">
                                        <Icon className="icon mb-0 text-primary"/>
                                    </div>
                                    <div className="content mt-4">
                                        <Link to="/page-single-service" className="title h5 text-dark">{item.title}</Link>

                                        <p className="text-muted mt-3">{item.desc}</p>
                                    </div>

                                    <Link to="page-single-service">
                                        <span className="text-dark">Read More <FiArrowRight className="ms-1"/></span>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <img src={coworking} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <span className="badge text-bg-primary rounded-lg">About Us</span>
                            <h4 className="title mt-2 mb-4">Why Our Agency ?</h4>
                            <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-unstyled text-muted">
                                <li className="mt-2"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                                <li className="mt-2"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Create your own skin to match your brand</li>
                                <li className="mt-2"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>List of the tasks that require your attention</li>
                            </ul>
                            <Link to="/page-aboutus" className="btn btn-primary">About us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="bg-overlay bg-gradient-primary"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="title text-white title-dark mb-3">Get your free quote today?</h4>
                            <p className="para-desc mx-auto text-white-50">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>

                            <div className="subcribe-form mt-4 pt-2">
                                <form>
                                    <div className="mb-3">
                                        <input type="email" id="email" className="bg-white rounded-lg opacity-7" required placeholder="Type your mail id..."/>
                                        <button type="submit" className="btn btn-pills btn-primary">Get Started</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Client's Review</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
                        </div>
                    </div>
                </div>

               <ClientOne/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <h4 className="title mb-3">Frequently Asked Questions</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-6 mt-4 pt-2">
                        <img src={faqs} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-md-6 mt-4 pt-2">
                        <div className="accordion" id="buyingquestion">
                            {accordionData.slice(0,6).map((item, index)=>{
                                return(
                                    <div className="accordion-item rounded border-0 shadow mt-3" key={index}>
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-white`} onClick={()=>setActiveIndex(item.id)}>
                                                {item.title}
                                            </button>
                                        </h2>
                                        {activeIndex === item.id ?
                                        <div id="collapseTwo" className="show accordion-collapse border-0 collapse">
                                            <div className="accordion-body text-muted bg-white collapsed">
                                                {item.desc}
                                            </div>
                                        </div>:''
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}