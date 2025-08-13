import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import {Link as Link1} from "react-scroll"

import logoDark from "../../assets/images/logo-dark.png"
import logoLight from "../../assets/images/logo-light.png"

export default function NavOnePage(){
    const [scroll, setScroll] = useState(false);
    const [isMenu, setisMenu] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
      }, []);

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
    return(
        <>
        <header id="topnav" className={`${scroll ? "nav-sticky" :""} defaultscroll sticky`}>
            <div className="container">
                <Link className="logo" to="/">
                    <span className="logo-light-mode">
                        <img src={logoDark} className="l-dark" alt=""/>
                        <img src={logoLight} className="l-light" alt=""/>
                    </span>
                    <img src={logoLight} className="logo-dark-mode" alt=""/>
                </Link>
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
                    <li className="list-inline-item ps-1 mb-0">
                        <Link to="https://1.envato.market/starty-react" target="_blank">
                            <div className="btn btn-primary">Download</div>
                        </Link>
                    </li>
                </ul>
        
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>  
                    <ul className="navigation-menu nav-light nav-right" id="navmenu-nav">
                        <li className="has-submenu">
                            <Link1 to="home" spy={true} smooth={true} duration={500} activeClass="active">Home</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="services" spy={true} smooth={true} duration={500} activeClass="active">Features</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="review" spy={true} smooth={true} duration={500} activeClass="active">Review</Link1>
                        </li>
                        <li className="has-submenu">
                            <Link1 to="contact" spy={true} smooth={true} duration={500} activeClass="active">Contact</Link1>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}