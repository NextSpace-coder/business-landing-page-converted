import React from "react";
import { Link, useParams } from "react-router-dom";

import bg1 from "../../assets/images/blog/single04.jpg"
import bg2 from "../../assets/images/blog/single05.jpg"
import blog1 from "../../assets/images/blog/02.jpg"
import blog2 from "../../assets/images/blog/03.jpg"
import blog3 from "../../assets/images/blog/06.jpg"
import blog4 from "../../assets/images/blog/07.jpg"
import client from "../../assets/images/client/04.jpg"

import NavbarTwo from "../../components/navbar/navbarTwo";
import BlogSidebarTwo from "../../components/blog/blogSidebarTwo";
import Comments from "../../components/blog/comments";
import FooterSix from "../../components/footer/footerSix";
import ScrollTop from "../../components/scrollTop";

import { blogMasonry } from "../../data/data";

import {FiArrowRight,FiHome, FiArrowLeft} from "../../assets/icons/vander"

export default function BlogDetailThree(){
    const params = useParams();
    const id = params.id
    const data = blogMasonry.find((blog)=>blog.id === parseInt(id))
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg1})`}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row g-0 align-items-center mt-5">
                    <div className="col-12">
                        <div className="title-heading">
                            {data?.title ? <h5 className="heading fw-semibold page-heading text-white title-dark">{data?.title}</h5> :
                            <h5 className="heading fw-semibold page-heading text-white title-dark">My Very Minimal <br/> Interior Design Ideas</h5>
                            }

                            <ul className="list-inline text-start mb-0 mt-4">
                                <li className="list-inline-item me-md-5 me-4 me-sm-0 mt-4">
                                    <span className="text-white-50 d-block">Author</span>
                                    <Link to="/blog-author" className="text-white title-dark">{data?.name ? data.name : 'Christina Gonzalez'}</Link>
                                </li>

                                <li className="list-inline-item me-md-5 me-4 me-sm-0 mt-4">
                                    <span className="text-white-50 d-block">Date</span>
                                    <span className="text-white title-dark">{data?.date ? data.date : '19th June 2023'}</span>
                                </li>

                                <li className="list-inline-item me-md-5 me-4 me-sm-0 mt-4">
                                    <span className="text-white-50 d-block">Read Time</span>
                                    <span className="text-white title-dark">8 min read</span>
                                </li>
                            </ul>
                        </div>

                        <div className="position-absolute top-50 end-0 d-none d-md-block">
                            <nav aria-label="breadcrumb" className="d-flex" style={{ transform:'rotate(-90deg)'}}>
                                <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                    <li className="breadcrumb-item"><Link t0="/">Starty</Link></li>
                                    <li className="breadcrumb-item"><Link to="#">Blog</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Single Post</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="card">
                            <div className="card-body shadow rounded">

                                <p className="text-muted"><span className="dropcaps display-4 text-dark me-2">T</span>he most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                                <p className="text-muted mb-0">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                            
                                <blockquote className="text-center mx-auto blockquote"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i> The man who comes back through the door in the wall will never be quite the same as the man who went out. <small className="d-block text-muted mt-2">- Starty Template</small></blockquote>
                            
                                <p className="text-muted">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                            
                                <Link to="#" className="badge text-bg-primary me-1">Minimal</Link>
                                <Link to="#" className="badge text-bg-primary me-1">Interior</Link>
                                <Link to="#" className="badge text-bg-primary me-1">Furniture</Link>
                                <div className="card mt-4 rounded overflow-hidden">
                                    <img src={data?.image? data.image : bg2} className="img-fluid rounded shadow" alt=""/>
            
                                    <div className="position-absolute bottom-0 start-50 translate-middle-x text-center mb-3 ms-4">
                                        <p className="fst-italic text-white mb-0">The man who comes back through the door in the wall will never be quite the same as the man who went out.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow rounded border-0 mt-4">
                            <Comments/>
                        </div>

                        <div className="card shadow rounded border-0 mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Leave A Comment :</h5>

                                <form className="mt-4">
                                    <div className="row pt-3">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Your Comment</label>
                                                <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control" required=""></textarea>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Name <span className="text-danger">*</span></label>
                                                <input id="name" name="name" type="text" placeholder="Name" className="form-control" required=""/>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <input id="email" type="email" placeholder="Email" name="email" className="form-control" required=""/>
                                            </div>
                                        </div>
    
                                        <div className="col-md-12">
                                            <div className="send d-grid">
                                                <button type="submit" className="btn btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="card shadow rounded border-0 mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Related News :</h5>

                                <div className="row mt-2">
                                    <div className="col-lg-6 mt-4 pt-2">
                                        <div className="card blog blog-primary shadow rounded overflow-hidden">
                                            <div className="image position-relative overflow-hidden">
                                                <img src={blog1} className="img-fluid" alt=""/>
                
                                                <div className="blog-tag">
                                                    <Link to="#" className="badge text-bg-light">Branding</Link>
                                                </div>
                                            </div>
                
                                            <div className="card-body content">
                                                <Link to="/blog-detail-three" className="h5 title text-dark d-block mb-0">The Dark Side of Overnight Success</Link>
                                                <p className="text-muted mt-2 mb-2">The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.</p>
                                                <Link to="/blog-detail-three" className="link text-dark">Read More <FiArrowRight  className="align-middle"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 mt-4 pt-2">
                                        <div className="card blog blog-primary shadow rounded overflow-hidden">
                                            <div className="image position-relative overflow-hidden">
                                                <img src={blog2} className="img-fluid" alt=""/>
                
                                                <div className="blog-tag">
                                                    <Link to="#" className="badge text-bg-light">Technology</Link>
                                                </div>
                                            </div>
                
                                            <div className="card-body content">
                                                <Link to="/blog-detail-three" className="h5 title text-dark d-block mb-0">The Right Hand of Business IT World</Link>
                                                <p className="text-muted mt-2 mb-2">The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.</p>
                                                <Link to="blog-detail-three" className="link text-dark">Read More <FiArrowRight  className="align-middle ms-1"/></Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-5">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Link to="/blog-detail-three" className="text-dark align-items-center">
                                                <span className="pro-icons"><FiArrowLeft className="fea icon-sm align-middle"/></span>
                                                <span className="text-muted d-none d-lg-inline-block">Web Development</span>
                                                <img src={blog3} className="avatar avatar-small rounded shadow ms-2" style={{height:'auto'}} alt=""/>
                                            </Link>
        
                                            <Link to="/" className="btn btn-lg btn-pills btn-icon btn-soft-primary"><FiHome className="icons"/></Link>
                                            
                                            <Link to="/blog-detail-three" className="text-dark align-items-center">
                                                <img src={blog4} className="avatar avatar-small rounded shadow me-2" style={{height:'auto'}} alt=""/>
                                                <span className="text-muted d-none d-lg-inline-block">Web Designer</span>
                                                <span className="pro-icons"><FiArrowRight  className="align-middle ms-1"/></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <BlogSidebarTwo client={data?.client ? data.client : client} name={data?.name ? data.name : 'Christina Gonzalez'}/>
                </div>
            </div>
        </section>
        <FooterSix/>
        <ScrollTop/>
        </>
    )
}