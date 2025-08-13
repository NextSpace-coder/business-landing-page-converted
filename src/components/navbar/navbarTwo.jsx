import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

import logoDark from "../../assets/images/logo-dark.png"
import logoLight from "../../assets/images/logo-light.png"
import startup from "../../assets/images/demos/startup.png"
import business from "../../assets/images/demos/business.png"
import corporate from "../../assets/images/demos/corporate.png"
import finance from "../../assets/images/demos/finance.png"
import application from "../../assets/images/demos/application.png"
import saas from "../../assets/images/demos/saas.png"
import seo from "../../assets/images/demos/seo.png"
import marketing from "../../assets/images/demos/marketing.png"
import event from "../../assets/images/demos/event.png"
import crypto from "../../assets/images/demos/crypto.png"
import restaurant from "../../assets/images/demos/restaurant.png"
import cafe from "../../assets/images/demos/cafe.png"
import personal from "../../assets/images/demos/personal.png"
import portfolio from "../../assets/images/demos/portfolio.png"
import freelancer from "../../assets/images/demos/freelancer.png"
import charity from "../../assets/images/demos/charity.png"
import blog from "../../assets/images/demos/blog.png"
import fashion from "../../assets/images/demos/fashion.png"

import {LuSearch, BiBriefcaseAlt2,HiOutlinePresentationChartLine,AiOutlinePieChart,SiSimpleanalytics, BsPhone,FiAirplay,CgClapperBoard,ImLoop2,GiStamper,TbCoinBitcoin,RiCupLine,FiUser,ImImage,PiBracketsCurly,FiThumbsUp,TfiLayoutListThumb,AiOutlineShopping,LuBookMinus} from "../../assets/icons/vander"
import {IoRestaurantOutline} from "react-icons/io5"

export default function NavbarTwo({navClass,manuClass,navDark}){
    const [scroll, setScroll] = useState(false);
    const [isMenu, setisMenu] = useState(false);
    const [searchBox, setSearchBox] = useState(false)

    useEffect(() => {
        activateMenu()
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // const handleClickOutside =()=>{
        //     setSearchBox(false)
        // }
        // document.addEventListener("mousedown", handleClickOutside);
      }, []);

      var mybutton = document.getElementById("back-to-top");
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if(mybutton!=null){
                if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                    mybutton.style.display = "block";
                } else {
                    mybutton.style.display = "none";
                }
            }
        }
     
        // Toggle menu
        const toggleMenu = () => {
            setisMenu(!isMenu);
            if (document.getElementById("navigation")) {
                const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
                anchorArray.forEach(element => {
                    element.addEventListener('click', (elem) => {
                        const target = elem.target.getAttribute("href")
                        if (target !== "") {
                            if (elem.target.nextElementSibling) {
                                var submenu = elem.target.nextElementSibling.nextElementSibling;
                                submenu.classList.toggle('open');
                            }
                        }
                    })
                });
            }
        };

//Menu Active
        function getClosest(elem, selector) {

            // Element.matches() polyfill
            if (!Element.prototype.matches) {
                Element.prototype.matches =
                    Element.prototype.matchesSelector ||
                    Element.prototype.mozMatchesSelector ||
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.oMatchesSelector ||
                    Element.prototype.webkitMatchesSelector ||
                    function (s) {
                        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                            i = matches.length;
                        while (--i >= 0 && matches.item(i) !== this) { }
                        return i > -1;
                    };
            }

            // Get the closest matching element
            for (; elem && elem !== document; elem = elem.parentNode) {
                if (elem.matches(selector)) return elem;
            }
            return null;

        };

        function activateMenu() {
            var menuItems = document.getElementsByClassName("sub-menu-item");
            if (menuItems) {

                var matchingMenuItem = null;
                for (var idx = 0; idx < menuItems.length; idx++) {
                    if (menuItems[idx].href === window.location.href) {
                        matchingMenuItem = menuItems[idx];
                    }
                }

                if (matchingMenuItem) {
                    matchingMenuItem.classList.add('active');
                
                
                    var immediateParent = getClosest(matchingMenuItem, 'li');
            
                    if (immediateParent) {
                        immediateParent.classList.add('active');
                    }
                    
                    var parent = getClosest(immediateParent, '.child-menu-item');
                    if(parent){
                        parent.classList.add('active');
                    }

                    var parent = getClosest(parent || immediateParent , '.parent-menu-item');
                
                    if (parent) {
                        parent.classList.add('active');

                        var parentMenuitem = parent.querySelector('.menu-item');
                        if (parentMenuitem) {
                            parentMenuitem.classList.add('active');
                        }

                        var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                        if (parentOfParent) {
                            parentOfParent.classList.add('active');
                        }
                    } else {
                        var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                        if (parentOfParent) {
                            parentOfParent.classList.add('active');
                        }
                    }
                }
            }
        }


        // Clickable Menu
        if(document.getElementById("navigation")){
            var elements = document.getElementById("navigation").getElementsByTagName("a");
            for(var i = 0, len = elements.length; i < len; i++) {
                elements[i].onclick = function (elem) {
                    if(elem.target.getAttribute("href") === "#") {
                        var submenu = elem.target.nextElementSibling.nextElementSibling;
                        submenu.classList.toggle('open');
                    }
                }
            }
        }
    return(
        <>
         <header id="topnav" className={`${scroll ? "nav-sticky" :""} ${navClass}`}>
            <div className="container">
                {navDark === true ?  
                <Link className="logo" to="/">
                    <img src={logoDark} className="logo-light-mode" alt=""/>
                    <img src={logoLight} className="logo-dark-mode" alt=""/>
                </Link> :
                <Link className="logo" to="/">
                    <span className="logo-light-mode">
                        <img src={logoDark} className="l-dark" alt=""/>
                        <img src={logoLight} className="l-light" alt=""/>
                    </span>
                    <img src={logoLight} className="logo-dark-mode" alt=""/>
                </Link>
                }
                <div className="menu-extras">
                    <div className="menu-item">
                        <Link to="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item search-icon mb-0">
                        <div className="dropdown">
                            {navDark === true ? 
                               <button type="button" className="btn btn-link text-decoration-none dropdown-toggle mb-0 p-0 show" onClick={()=>setSearchBox(!searchBox)}>
                                    <LuSearch className="h5 text-dark mb-0"/>
                                </button>:
                            <button type="button" className="btn btn-link text-decoration-none dropdown-toggle mb-0 p-0 show" onClick={()=>setSearchBox(!searchBox)}>
                                <LuSearch className="h5 text-dark nav-light-icon-dark mb-0"/>
                                <LuSearch className="h5 text-white nav-light-icon-white mb-0"/>
                            </button>
                        }
                          
                            <div className={`${searchBox === true ? "show" : ''} dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-4 py-0`} style={{width:'300px',inset: '0px 0px auto auto',position:'absolute', transform: "translate(0px, 31px)"}}>
                                <form className="p-4">
                                    <input type="text" id="text" name="name" className="form-control border bg-white" placeholder="Search..."/>
                                </form>
                            </div>
                        </div>
                    </li>
                </ul>

                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                    <ul className={manuClass}>
                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#">Home</Link><span className="menu-arrow"></span>
                            <ul className="submenu megamenu">
                                <li>
                                    <ul>
                                        <li>
                                            <Link to="/index-startup" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={startup} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><BiBriefcaseAlt2 className="menu-list-icon align-middle me-2"/>Startups</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-business" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={business} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><HiOutlinePresentationChartLine className="menu-list-icon align-middle me-2"/> Business</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-corporate" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={corporate} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><AiOutlinePieChart className="menu-list-icon align-middle me-2"/> Corporate</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-finance" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={finance} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><SiSimpleanalytics className="menu-list-icon align-middle me-2"/> Finance</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li>
                                            <Link to="/index-application" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={application} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><BsPhone className="menu-list-icon align-middle me-2"/> Application</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-saas" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={saas} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><FiAirplay className="menu-list-icon align-middle me-2"/> Saas</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-seo" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={seo} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><CgClapperBoard className="menu-list-icon align-middle me-2"/> SEO Agency</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-marketing" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={marketing} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><ImLoop2 className="menu-list-icon align-middle me-2"/> Marketing</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li>
                                            <Link to="/index-event" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={event} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><GiStamper className="menu-list-icon align-middle me-2"/> Event</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-crypto" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={crypto} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><TbCoinBitcoin className="menu-list-icon align-middle me-2"/> Cryptocurrency</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-restaurant" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={restaurant} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><IoRestaurantOutline className="menu-list-icon align-middle me-2"/> Restaurant</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-cafe" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={cafe} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><RiCupLine className="menu-list-icon align-middle me-2"/> Cafe</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li>
                                            <Link to="/index-personal" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={personal} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><FiUser className="menu-list-icon align-middle me-2"/> Personal</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-portfolio" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={portfolio} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><ImImage className="menu-list-icon align-middle me-2"/> Portfolio</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-freelancer" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={freelancer} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><PiBracketsCurly className="menu-list-icon align-middle me-2"/> Freelancer</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                
                                <li>
                                    <ul>
                                        <li>
                                            <Link to="/index-charity" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={charity} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><FiThumbsUp className="menu-list-icon align-middle me-2"/> Charity</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-personal-blog" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={blog} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><TfiLayoutListThumb className="menu-list-icon align-middle me-2"/> Personal Blog</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-fashion" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={fashion} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><AiOutlineShopping className="menu-list-icon align-middle me-2"/> fashion</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/index-onepage" className="sub-menu-item">
                                                <div className="text-lg-center">
                                                    <span className="d-none d-lg-block"><img src={application} className="img-fluid rounded shadow-md" alt=""/></span>
                                                    <span className="mt-lg-2 d-block"><LuBookMinus className="menu-list-icon align-middle me-2"/> App (Onepage)</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>   
                            </ul>
                        </li>
        
                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#">Pages</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/page-aboutus" className="sub-menu-item">About Us</Link></li>
                                <li className="has-submenu parent-menu-item"><Link to="#">Services</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/page-services" className="sub-menu-item">Services</Link></li>
                                        <li><Link to="/page-services-two" className="sub-menu-item">Services Two</Link></li>
                                        <li><Link to="/page-single-service" className="sub-menu-item">Single Service </Link></li>
                                    </ul> 
                                </li>
                                <li><Link to="/page-faqs" className="sub-menu-item">FAQs</Link></li>
                                <li><Link to="/page-pricing" className="sub-menu-item">Pricing</Link></li>
                                <li><Link to="/page-team" className="sub-menu-item">Team</Link></li>                                
                                <li className="has-submenu parent-menu-item"><Link to="#">Shop</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/shop-grids" className="sub-menu-item">Product Grids</Link></li>
                                        <li><Link to="/shop-product-detail" className="sub-menu-item">Product Details</Link></li>
                                        <li><Link to="/shop-cart" className="sub-menu-item">Shop Cart</Link></li>
                                        <li><Link to="/shop-checkout" className="sub-menu-item">Checkouts</Link></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#">Special</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/page-comingsoon" className="sub-menu-item">Coming Soon</Link></li>
                                        <li><Link to="/page-maintenance" className="sub-menu-item">Maintenance</Link></li>
                                        <li><Link to="/page-error" className="sub-menu-item">Error</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#">Portfolio</Link><span className="menu-arrow"></span>
                            <ul className="submenu megamenu">
                                <li>
                                    <ul>
                                        <li className="megamenu-head">Classic Portfolio</li>
                                        <li><Link to="/portfolio-classic-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link to="/portfolio-classic-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link to="/portfolio-classic-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link to="/portfolio-classic-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link to="/portfolio-classic-six" className="sub-menu-item">Six Column</Link></li>
                                        <li><Link to="/portfolio-classic-sidebar" className="sub-menu-item">Portfolio Sidebar</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Creative Portfolio</li>
                                        <li><Link to="/portfolio-creative-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link to="/portfolio-creative-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link to="/portfolio-creative-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link to="/portfolio-creative-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link to="/portfolio-creative-six" className="sub-menu-item">Six Column</Link></li>
                                        <li><Link to="/portfolio-creative-sidebar" className="sub-menu-item">Portfolio Sidebar</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Modern Portfolio</li>
                                        <li><Link to="/portfolio-modern-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link to="/portfolio-modern-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link to="/portfolio-modern-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link to="/portfolio-modern-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link to="/portfolio-modern-six" className="sub-menu-item">Six Column</Link></li>
                                        <li><Link to="/portfolio-modern-sidebar" className="sub-menu-item">Portfolio Sidebar</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Masonry Portfolio</li>
                                        <li><Link to="/portfolio-masonry-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link to="/portfolio-masonry-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link to="/portfolio-masonry-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link to="/portfolio-masonry-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link to="/portfolio-masonry-six" className="sub-menu-item">Six Column</Link></li>
                                        <li><Link to="/portfolio-masonry-sidebar" className="sub-menu-item">Portfolio Sidebar</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Portfolio Detail</li>
                                        <li><Link to="/portfolio-detail-one" className="sub-menu-item">Portfolio One</Link></li>
                                        <li><Link to="/portfolio-detail-two" className="sub-menu-item">Portfolio Two</Link></li>
                                        <li><Link to="/portfolio-detail-three" className="sub-menu-item">Portfolio Three</Link></li>
                                        <li><Link to="/portfolio-detail-four" className="sub-menu-item">Portfolio Four</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#">Blogs</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li className="has-submenu parent-menu-item"><Link to="#">Blog</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/blog-grid" className="sub-menu-item">Blog Grids</Link></li>
                                        <li><Link to="/blog-masonry" className="sub-menu-item">Blog Masonry</Link></li>
                                        <li><Link to="/blog-list" className="sub-menu-item">Blog List</Link></li>
                                        <li><Link to="/blog-grid-sidebar" className="sub-menu-item">Blog-Sidebar</Link></li>
                                        <li><Link to="/blog-masonry-sidebar" className="sub-menu-item">Blog Masonry-sidebar</Link></li>
                                        <li><Link to="/blog-list-sidebar" className="sub-menu-item">Blog List-Sidebar</Link></li>
                                    </ul>
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#">Image Blog</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/blog-image-grid" className="sub-menu-item">Blog Grids</Link></li>
                                        <li><Link to="/blog-image-masonry" className="sub-menu-item">Blog Masonry</Link></li>
                                        <li><Link to="/blog-image-grid-sidebar" className="sub-menu-item">Blog-Sidebar</Link></li>
                                        <li><Link to="/blog-image-masonry-sidebar" className="sub-menu-item">Blog Masonry-sidebar</Link></li>
                                    </ul> 
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#">Blog Detail </Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/blog-detail-one" className="sub-menu-item">Blog Detail One</Link></li>
                                        <li><Link to="/blog-detail-two" className="sub-menu-item">Blog Detail Two</Link></li>
                                        <li><Link to="/blog-detail-three" className="sub-menu-item">Blog Detail Three</Link></li>
                                        <li><Link to="/blog-detail-four" className="sub-menu-item">Blog Detail Four</Link></li>
                                        <li><Link to="/blog-detail-five" className="sub-menu-item">Blog Detail Five</Link></li>
                                    </ul>  
                                </li>
                                <li className="has-submenu parent-menu-item"><Link to="#">Single Blog Post</Link><span className="submenu-arrow"></span>
                                    <ul className="submenu">
                                        <li><Link to="/blog-standard-post" className="sub-menu-item">Standard Post</Link></li>
                                        <li><Link to="/blog-slider-post" className="sub-menu-item">Slider Post</Link></li>
                                        <li><Link to="/blog-youtube-post" className="sub-menu-item">Youtube Post</Link></li>
                                        <li><Link to="/blog-vimeo-post" className="sub-menu-item">Vimeo Post</Link></li>
                                        <li><Link to="/blog-html-video-post" className="sub-menu-item">HTML Video Post</Link></li>
                                        <li><Link to="/blog-audio-post" className="sub-menu-item">Audio Post</Link></li>
                                        <li><Link to="/blog-html-audio-post" className="sub-menu-item">HTML Audio Post</Link></li>
                                        <li><Link to="/blog-blockquote-post" className="sub-menu-item">Blockquote</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/blog-author" className="sub-menu-item">Author</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/page-contact" className="sub-menu-item">Contact us</Link></li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}