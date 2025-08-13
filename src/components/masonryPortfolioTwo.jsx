import React,{useState} from "react";
import { Link } from "react-router-dom";

import { portfolioData2, portfolioImage2 } from "../data/data";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"


import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


export default function MasonryPortfolioTwo({columnsCountBreakPoints,rowClass}){
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
                <div className="row justify-content-center mt-4">
                    <div className={rowClass}>
                        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
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
        </>
    )
}