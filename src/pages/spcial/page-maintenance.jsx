import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import bg1 from "../../assets/images/bg/maintenance.jpg"
import logo from "../../assets/images/logo-icon.png"

import {AiOutlineShoppingCart, AiOutlineDribbble, AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineInstagram,AiOutlineTwitter,FiMail,AiOutlineFile} from "../../assets/icons/vander"

export default function Maintenance(){
    const [minutes, setMinutes] = useState(0);
    const [remainingSeconds, setRemainingSeconds] = useState(0);

    useEffect(() => {

        let intervalId = setInterval(() => {
            calculateTimeRemaining()
        }, 1000);

        var seconds = 3599;
        function calculateTimeRemaining() {

            const minutes = Math.round((seconds - 30) / 60);
            const remainingSeconds = seconds % 60;

            setMinutes(minutes);
            setRemainingSeconds(remainingSeconds);

            if (seconds === 0) {
                clearInterval(intervalId);
            } else {
                seconds = seconds - 1;
            }
        }

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return(
        <>

        <section className="position-relative" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
            <div className="bg-overlay opacity-9"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <div className="d-flex flex-column min-vh-100 px-md-5 py-5 px-4">
                            <div className="mt-md-5">
                                <Link to="/"><img src={logo} height="48" alt=""/></Link>
                            </div>
                            <div className="title-heading my-auto">
                                <h4 className="maintenance display-5 fw-bold mb-4">System is under maintenance</h4>
                                <p className="text-white-50 para-desc mb-4">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
            
                                <span id="maintenance" className="timer h1 text-white title-dark">{ minutes }:{ remainingSeconds }</span><span className="d-block h6 text-uppercase text-white-50">Minutes</span>
            
                            </div>
                            <div className="mb-md-5">
                                <span className="text-white-50 h6">Follow Now</span>
                                <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-2">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}