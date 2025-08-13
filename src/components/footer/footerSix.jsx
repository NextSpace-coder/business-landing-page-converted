import React from "react";
import { Link } from "react-router-dom";

import logoLight from "../../assets/images/logo-light.png"
import {AiOutlineShoppingCart, AiOutlineDribbble, AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile,IoIosArrowForward} from "../../assets/icons/vander"

export default function FooterSix(){
    return(
        <footer className="footer bg-footer">            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-py-60">
                            <div className="row">
                                <div className="col-lg-4 col-12">
                                    <Link to="#" className="logo-footer">
                                        <img src={logoLight} height="26" alt=""/>
                                    </Link>
                                    <p className="mt-4">Start working with Starty that can provide everything you.</p>
                                    <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                        <li className="list-inline-item"><Link to="https://1.envato.market/starty-react" target="_blank" className="rounded"><AiOutlineShoppingCart className="align-middle"/></Link></li>
                                        <li className="list-inline-item"><Link to="https://dribbble.com/shreethemes" target="_blank" className="rounded"><AiOutlineDribbble/></Link></li>
                                        <li className="list-inline-item"><Link to="https://www.behance.net/shreethemes" target="_blank" className="rounded"><AiOutlineBehance/></Link></li>
                                        <li className="list-inline-item"><Link to="http://linkedin.com/company/shreethemes" target="_blank" className="rounded"><AiFillLinkedin/></Link></li>
                                        <li className="list-inline-item"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><BiLogoFacebook/></Link></li>
                                        <li className="list-inline-item"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><AiOutlineInstagram/></Link></li>
                                        <li className="list-inline-item"><Link to="https://twitter.com/shreethemes" target="_blank" className="rounded"><AiOutlineTwitter/></Link></li>
                                        <li className="list-inline-item"><Link to="mailto:support@shreethemes.in" className="rounded"><FiMail/></Link></li>
                                        <li className="list-inline-item"><Link to="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="rounded"><AiOutlineFile/></Link></li>
                                    </ul>
                                </div>

                                <div className="col-lg-8 col-12">
                                    <div className="row">
                                        <div className="col-md-4 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                            <h6 className="footer-head">Company</h6>
                                            <ul className="list-unstyled footer-list mt-4">
                                                <li><Link to="/page-aboutus" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> About us</Link></li>
                                                <li><Link to="/page-services-two" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Services</Link></li>
                                                <li><Link to="/page-team" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Team</Link></li>
                                                <li><Link to="/page-pricing" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Pricing</Link></li>
                                                <li><Link to="/blog-grid" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Blog</Link></li>
                                                <li><Link to="/portfolio-detail-four" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Project</Link></li>
                                            </ul>
                                        </div>
                                        
                                        <div className="col-md-4 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                            <h6 className="footer-head">Usefull Links</h6>
                                            <ul className="list-unstyled footer-list mt-4">
                                                <li><Link to="/index" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Terms of Services</Link></li>
                                                <li><Link to="/index" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Privacy Policy</Link></li>
                                                <li><Link to="/page-contact" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Contact Us</Link></li>
                                                <li><Link to="/index" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Changelog</Link></li>
                                                <li><Link to="/components" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Components</Link></li>
                                            </ul>
                                        </div>
        
                                        <div className="col-md-4 col-12 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                            <h6 className="footer-head">Resources</h6>
                                            <ul className="list-unstyled footer-list mt-4">
                                                <li><Link to="/page-faqs" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Theme guide</Link></li>
                                                <li><Link to="/page-faqs" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Support desk</Link></li>
                                                <li><Link to="/page-services" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> What we offer</Link></li>
                                                <li><Link to="/page-aboutus" className="text-foot d-flex align-items-center"><IoIosArrowForward className="me-1"/> Company history</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-py-30 footer-bar bg-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center">
                                <p className="mb-0 text-muted">{new Date().getFullYear()} © Starty. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}