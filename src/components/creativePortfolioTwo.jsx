import React,{useState} from "react";
import { Link } from "react-router-dom";

import { portfolioData, portfolioImage } from "../data/data";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"


export default function CreativePortfolioTwo({gridClass,}){
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setIsOpen] = useState(false);

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + portfolioImage.length - 1) % portfolioImage.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImage.length);
    };

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    
    const currentImage = portfolioImage[currentImageIndex - 1];

    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? portfolioData.filter((item) => item.category === selectedCategory)
        : portfolioData;
    return(
        <>
         <div className='container-fluid'>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="filters-group-wrap text-center">
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
                    </div>
                </div>

                <div id="grid" className={gridClass}>
                    {filteredData.map((item,index)=>{
                        return(
                        <div className='col spacing picture-item' data-groups='["branding"]' key={index}>
                            <div className="card portfolio portfolio-creative portfolio-primary shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img src={item.image} className="img-fluid" alt=""/>
                                    <div className="overlay"></div>
    
                                    <div className="lightbox-icon">
                                        <Link to="#" onClick={() => handleImageClick(item.id)} className="lightbox text-dark"><i className="mdi mdi-plus"></i></Link>
                                    </div>
                                </div>
                                <div className="content p-3">
                                    <Link to="/portfolio-detail-two" className="text-dark h6 mb-0 d-block title">{item.title}</Link>
                                    <small className="text-muted fw-normal mb-0">{item.name}</small>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
                {open && (
                <Lightbox
                    mainSrc={currentImage}
                    prevSrc={portfolioImage[(currentImageIndex + portfolioImage.length - 1) % portfolioImage.length]}
                    nextSrc={portfolioImage[(currentImageIndex + 1) % portfolioImage.length]}

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
        </>
    )
}