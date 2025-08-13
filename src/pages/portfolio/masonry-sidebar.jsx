import React,{useState} from "react";
import { Link } from "react-router-dom";

import bg1 from "../../assets/images/bg/port03.jpg"

import NavbarTwo from "../../components/navbar/navbarTwo";
import BlogSidebar from "../../components/blog/blogSidebar";
import FooterSeven from "../../components/footer/footerSeven";
import ScrollTop from "../../components/scrollTop";

import { portfolioData2, portfolioImage2 } from "../../data/data";

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"


export default function MasonrySidebar(){
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setIsOpen] = useState(false);

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + portfolioImage2.length - 1) % portfolioImage2.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImage2.length);
    };

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    
    const currentImage = portfolioImage2[currentImageIndex - 1];

    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? portfolioData2.filter((item) => item.category === selectedCategory)
        : portfolioData2;
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
                            <p className="text-white-50 para-desc mx-auto mb-0">Showcase of Our Awesome Works and Sidebar</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="filters-group-wrap">
                            <div className="filters-group">
                                <ul className="container-filter mb-0 categories-filter list-unstyled filter-options">
                                    <li className={`${selectedCategory === null ? "active" : ''} list-inline-item categories position-relative`} onClick={() => matchCategory(null)}>All</li>
                                    <li className={`${selectedCategory === 'branding' ? "active" : ''} list-inline-item categories position-relative`} onClick={() => matchCategory('branding')}>Branding</li>
                                    <li className={`${selectedCategory === 'designing' ? "active" : ''} list-inline-item categories position-relative`}  onClick={() => matchCategory('designing')}>Designing</li>
                                    <li className={`${selectedCategory === 'photography' ? "active" : ''} list-inline-item categories position-relative`}  onClick={() => matchCategory('photography')}>Photography</li>
                                    <li className={`${selectedCategory === 'development' ? "active" : ''} list-inline-item categories position-relative`}  onClick={() => matchCategory('development')}>Development</li>
                                </ul>
                            </div>
                        </div>

                    <div className="row justify-content-center mt-4">
                        <div className="col-lg-12">
                            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 767: 2}}>
                                <Masonry>
                                {filteredData.map((item,index)=>{
                                    return(
                                    <div className='spacing picture-item' data-groups='["branding"]' key={index}>
                                        <div className="card portfolio portfolio-modern portfolio-primary rounded overflow-hidden">
                                            <Link to="#" onClick={() => handleImageClick(item.id)} className="lightbox">
                                                <img src={item.image} className="img-fluid" alt=""/>
                                            </Link>
                                            <div className="content text-center p-3">
                                                <Link to="/portfolio-detail-three" className="text-dark h6 mb-0 d-block title">{item.title}</Link>
                                                <small className="text-muted fw-normal mb-0">{item.name}</small>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                                </Masonry>
                            </ResponsiveMasonry>
                        </div>
                    </div>
                        {open && (
                        <Lightbox
                            mainSrc={currentImage}
                            prevSrc={portfolioImage2[(currentImageIndex + portfolioImage2.length - 1) % portfolioImage2.length]}
                            nextSrc={portfolioImage2[(currentImageIndex + 1) % portfolioImage2.length]}

                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={handleMovePrev}
                            onMoveNextRequest={handleMoveNext}
                        />
                        )}

                        <div className="row">
                            <div className="col-12 mt-4 pt-2">
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
                        <BlogSidebar search={true} />
                    </div>
                </div>
            </div>
        </section>
        <FooterSeven/>
        <ScrollTop/>
        </>
    )
}