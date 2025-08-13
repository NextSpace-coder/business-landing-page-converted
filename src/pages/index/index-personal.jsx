import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Link as Link1} from 'react-scroll'

import bg1 from '../../assets/images/bg/personal.jpg'
import bg2 from '../../assets/images/cta04.png'
import about from '../../assets/images/about.jpg'

import NavbarTwo from "../../components/navbar/navbarTwo";
import ClientOne from "../../components/client/clientOne";
import Counter from "../../components/counter";
import BlogOne from "../../components/blog/blogOne";
import FooterThree from "../../components/footer/footerThree";
import ScrollTop from "../../components/scrollTop";

import { TypeAnimation } from 'react-type-animation';

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import { Parallax } from 'react-parallax';

import {FiArrowDown,FiLayers,LiaWindows,AiOutlineShoppingCart,FiAward, FiThumbsUp,} from "../../assets/icons/vander"
import {HiOutlineChip} from "react-icons/hi"

import { projectsData, projectImage } from "../../data/data";

export default function IndexPersonal(){
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setIsOpen] = useState(false);

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + projectImage.length - 1) % projectImage.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectImage.length);
    };

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    
    const currentImage = projectImage[currentImageIndex - 1];

    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? projectsData.filter((item) => item.category === selectedCategory)
        : projectsData;

    const aboutData = [
        {
            title:'WordPress',
            progress:'84%'
        },
        {
            title:'Angular / JavaScript',
            progress:'79%'
        },
        {
            title:'HTML',
            progress:'95%'
        },
    ]

    const servicesData = [
        {
            icon:FiLayers,
            title:'Web Designing',
            desc:'This prevents repetitive patterns from and facilitates the comparison of different typefaces.'
        },
        {
            icon:LiaWindows,
            title:'Web Development',
            desc:'This prevents repetitive patterns from and facilitates the comparison of different typefaces.'
        },
        {
            icon:AiOutlineShoppingCart,
            title:'Photographer',
            desc:'This prevents repetitive patterns from and facilitates the comparison of different typefaces.'
        },
        {
            icon:FiAward,
            title:'Freelancing',
            desc:'This prevents repetitive patterns from and facilitates the comparison of different typefaces.'
        },
        {
            icon:FiThumbsUp,
            title:'Digital Marketing',
            desc:'This prevents repetitive patterns from and facilitates the comparison of different typefaces.'
        },
        {
            icon:HiOutlineChip,
            title:'Social Marketing',
            desc:'This prevents repetitive patterns from and facilitates the comparison of different typefaces.'
        },
    ]
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" navDark={true}/>
        <section className="bg-half-260" style={{backgroundImage:`url(${bg1})`}}>
            <div className="bg-overlay bg-gradient-white-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title-heading">
                            <h4 className="mb-0">Hello I'M</h4>
                            <h4 className="heading mb-4">
                            <TypeAnimation
                                sequence={[
                                    'Phillip Anthony',
                                    1000,
                                    'Web Developer',
                                    1000,
                                    'Photographer',
                                    1000
                                ]}
                                wrapper="span"
                                speed={30}
                                repeat={Infinity}
                                className="fw-semibold"
                                /></h4>

                            <p className="para-desc title-dark text-muted mb-0">Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects.</p>
                        
                            <div className="mt-4">
                                <Link to="#" className="btn btn-primary">Hire Me</Link>
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute top-100 start-50 translate-middle text-center" style={{zIndex:'1'}}>
                        <Link1 to="portfolio" smooth={true} duration={500} className="btn btn-icon btn-pills bg-white title-dark shadow scroll-down"><FiArrowDown className="icons"/></Link1>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="section pb-0" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6 col-12">
                        <div className="position-relative">
                            <img src={about} className="img-fluid rounded shadow-md" alt=""/>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="ms-lg-5">
                            <div className="section-title">
                                <span className="badge rounded-pill bg-soft-primary">About Me</span>
                                <h4 className="title fw-bold mt-2 mb-4">Better Design <br/> Better Experience</h4>
                                <p className="para-desc text-muted">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                            </div>
                            {aboutData.map((item, index) => {
                                return(
                                <div className="progress-box mt-4" key={index}>
                                    <h6 className="title text-muted">{item.title}</h6>
                                    <div className="progress">
                                        <div className="progress-bar position-relative bg-primary" style={{width:item.progress}}>
                                            <div className="progress-value d-block text-muted h6">{item.progress}</div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mt-3 mb-4">What i offer ?</h4>
                            <p className="para-desc mx-auto text-muted mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {servicesData.map((item, index)=>{
                        const Icon = item.icon 
                        return(
                            <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                                <div className="card border-0 p-4 text-center rounded features features-classic feature-primary">
                                    <Icon className="icon2 w-100 mb-3" style={{height:'32px'}} />

                                    <div className="content">
                                        <Link to="/page-single-service" className="title text-dark h5">{item.title}</Link>

                                        <p className="text-muted mb-0 mt-3">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="section" id="portfolio">
            <div className="container-fluid" >
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="filters-group-wrap text-center">
                            <div className="filters-group">
                                <ul className="container-filter mb-0 categories-filter list-unstyled filter-options">
                                    <li className={`${selectedCategory === null ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory(null)}>All</li>
                                    <li className={`${selectedCategory === 'branding' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`} onClick={() => matchCategory('branding')}>Branding</li>
                                    <li className={`${selectedCategory === 'designing' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`}  onClick={() => matchCategory('designing')}>Designing</li>
                                    <li className={`${selectedCategory === 'photography' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`}  onClick={() => matchCategory('photography')}>Photography</li>
                                    <li className={`${selectedCategory === 'development' ? "active" : ''} list-inline-item categories position-relative h5 fw-normal`}  onClick={() => matchCategory('development')}>Development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="grid" className="row row-cols-1 row-cols-md-2 row-cols-lg-5 mt-4 pt-2">
                    {filteredData.map((item,index)=>{
                        return(
                        <div className="col spacing picture-item" data-groups='["branding"]' key={index}>
                            <div className="card portfolio portfolio-creative portfolio-primary shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img src={item.image} className="img-fluid" alt=""/>
                                    <div className="overlay"></div>

                                    <div className="lightbox-icon">
                                        <Link to="#" onClick={() => handleImageClick(item.id)} className="lightbox text-dark"><i className="mdi mdi-plus"></i></Link>
                                    </div>
                                </div>
                                <div className="content p-3">
                                    <Link to="/portfolio-detail-one" className="text-dark h6 mb-0 d-block title">{item.title}</Link>
                                    <small className="text-muted fw-normal mb-0">{item.name}</small>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            {open && (
                <Lightbox
                    mainSrc={currentImage}
                    prevSrc={projectImage[(currentImageIndex + projectImage.length - 1) % projectImage.length]}
                    nextSrc={projectImage[(currentImageIndex + 1) % projectImage.length]}

                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={handleMovePrev}
                    onMoveNextRequest={handleMoveNext}
                />
            )}
            <div className="container mt-100 mt-60">
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
        </section>
        <section className="position-relative overflow-hidden w-100 bg-primary">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={bg2}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImgize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            />
            <div className="container section">
                <Counter/>
            </div>
        </section>
        <section className="section">
            <div className="container">
               <BlogOne/>
            </div>
        </section>
        <FooterThree/>
       <ScrollTop/>
        </>
    )
}