import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Link as Link1} from "react-scroll"

import bg1 from '../../assets/images/bg/charity.jpg'
import bg2 from '../../assets/images/bg/charity2.jpg'

import NavbarTwo from "../../components/navbar/navbarTwo";
import TeamTwo from "../../components/teamTwo";
import CharityFooter from "../../components/footer/charityFooter";
import ScrollTop from "../../components/scrollTop";
import CharityBlog from "../../components/blog/charityBlog";

import {FiVideo} from "../../assets/icons/vander"

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.css';

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import { popularCauses } from "../../data/data";

import {LuBookOpen, RxCube, FiAirplay,PiPenNibBold, FiSmartphone,CgDanger, HiMiniCubeTransparent,FiArrowRight} from "../../assets/icons/vander"

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

export default function IndexCharity(){
    const [isOpen, setOpen] = useState(false);
    const aboutData = [
        {
            icon:LuBookOpen,
            title:'Educations',
            desc:'The advantage of its Latin origin and the relative'
        },
        {
            icon:RxCube,
            title:'Hospitality',
            desc:'The advantage of its Latin origin and the relative'
        },
        {
            icon:FiAirplay,
            title:'Homeless',
            desc:'The advantage of its Latin origin and the relative'
        },
        {
            icon:PiPenNibBold,
            title:'Blood Donate',
            desc:'The advantage of its Latin origin and the relative'
        },
        {
            icon:FiSmartphone,
            title:'Poverty',
            desc:'The advantage of its Latin origin and the relative'
        },
        {
            icon:CgDanger,
            title:'Risk',
            desc:'The advantage of its Latin origin and the relative'
        },
        {
            icon:HiMiniCubeTransparent,
            title:'Rescue',
            desc:'The advantage of its Latin origin and the relative'
        },
    ]
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <section className="bg-half-260 d-table w-100" style={{backgroundImage:`url(${bg1})`}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="title-heading">
                            <h4 className="heading fw-bold text-white title-dark mb-4">More Charity <br/>More Better Life</h4>
                            <p className="text-white-50 para-desc mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>

                            <div className="mt-4 pt-2">
                                <Link1 to="volunteer" smooth={true} duration={500} className="btn btn-primary m-1">Become a volunteer</Link1>
                                <Link to="#!" onClick={() => setOpen(true)} className="btn btn-icon btn-pills btn-primary m-1 lightbox"><FiVideo  className="icons"/></Link><span className="text-light title-dark small align-middle ms-1">Watch Now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ModalVideo
            channel="youtube"
            youtube={{ mute: 0, autoplay: 0 }}
            isOpen={isOpen}
            videoId="yba7hPeTSjk"
            onClose={() => setOpen(false)} 
        />
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="features-absolute rounded shadow p-md-5 p-4 bg-white">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="section-title">
                                        <span className="badge bg-soft-primary rounded-lg">Charity Donation</span>
                                        <h6 className="mb-0 mt-3">We are near to our</h6>
                                        <h4 className="title fw-semibold mb-3">CAMPAIGN</h4>
                                        <p className="text-muted para-desc mb-0">Our design projects are fresh and simple and will benefit your business greatly.</p>
                                    </div>
                                </div>

                                <div className="col-md-6 mt-4 pt-2 mt-md-0 pt-md-0">
                                    <div className="progress-box mt-4">
                                        <div className="progress rounded-md" style={{height:'10px'}}>
                                            <div className="progress-bar position-relative bg-primary rounded-md" style={{width:'60%'}}>
                                                <div className="progress-value d-block text-muted h6">Raised 60% = $ 600000</div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-2">
                                            <h6 className="title text-muted text-start mb-0">$ 1000</h6>
                                            <h6 className="title text-muted text-end mb-0">Goal: $ 1000000</h6>
                                        </div>
                                    </div>

                                    <div className="mt-4 text-lg-end">
                                        <Link to="#" className="btn btn-primary">Donate Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-4">Popular Causes</h4>
                            <p className="para-desc text-muted mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="tiny-three-item">
                            <TinySlider settings={settings}>
                                {popularCauses.map((item,index)=>{
                                    return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="blog blog-primary causes position-relative overflow-hidden p-2">
                                            <div>
                                                <img src={item.image} className="img-fluid rounded" alt=""/>
                                            </div>

                                            <div className="causes-content bg-white p-4 shadow rounded">
                                                <Link to="/blog-detail-three" className="h5 title text-dark d-block mb-0">{item.title}</Link>
                                                <p className="text-muted mt-2 mb-4">{item.desc}</p>

                                                <div className="progress-box pt-4">
                                                    <div className="progress rounded-md" style={{height:'6px'}}>
                                                        <div className="progress-bar position-relative bg-primary rounded-md" style={{width:item.progress}}>
                                                            <div className="progress-value d-block text-muted h6">{item.rais}</div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-between mt-2">
                                                        <span className="title text-muted text-start mb-0">{item.start}</span>
                                                        <span className="title text-muted text-end mb-0">{item.goal}</span>
                                                    </div>
                                                </div>
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

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-4">What We Do?</h4>
                            <p className="para-desc text-muted mx-auto mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {aboutData.map((item,index)=>{
                        const Icon = item.icon
                        return(
                            <div className="col-xl-3 col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                                <div className="card features feature-primary features-classic p-4 text-center rounded-md shadow border-0">
                                    <div className="fea-icon bg-soft rounded-md mx-auto">
                                        <Icon className="icon"/>
                                    </div>
        
                                    <div className="content mt-4">
                                        <h5 className="mb-3">{item.title}</h5>
                                        <p className="text-muted">{item.desc}</p>
                                        <Link to="/page-single-service" className="title text-dark">Read More<FiArrowRight className="align-middle"/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="bg-cta" id="volunteer" style={{backgroundImage:`url(${bg2})`}}>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-lg-5 col-md-6 col-12">
                        <div className="card p-4 border-0 rounded bg-white">
                            <h4>Become a volunteer to help helpless</h4>

                            <form className="mt-4">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                            <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                            <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                                        </div> 
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Why you join us?</label>
                                            <input name="subject" id="subject" className="form-control" placeholder="subject :"/>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="mb-3">
                                            <label className="form-label">Comments <span className="text-danger">*</span></label>
                                            <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Message :"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button type="submit" id="submit" name="send" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-3">Volunteers</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

               <TeamTwo/>
            </div>

            <div className="container mt-100 mt-60">
                <CharityBlog/>
            </div>
        </section>
        <CharityFooter/>
        <ScrollTop/>
        </>
    )
}