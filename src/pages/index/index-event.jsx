import React, { useState } from "react";
import { Link } from "react-router-dom";

import bg1 from "../../assets/images/bg/events.jpg"
import bg2 from  "../../assets/images/bg/busi04.jpg"
import aboutImg from "../../assets/images/events/about.jpg"

import NavbarTwo from "../../components/navbar/navbarTwo";
import BlogOne from "../../components/blog/blogOne";
import PricingTwo from "../../components/pricing/pricingTwo";
import FooterTwo from "../../components/footer/footerTwo";
import ScrollTop from "../../components/scrollTop"
import EventTab from "../../components/eventTab";
import Team from "../../components/team";

import CountUp from 'react-countup';
import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/css/modal-video.css';

import Process from "../../components/process";

export default function Event(){
    const [isOpen, setOpen] = useState(false);
    const [days, setDays] = useState()
    const [hours, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()
    const [end, setEnd] = useState('00:00:00:00')
    var eventCountDown = new Date("August 25, 2024 16:37:52").getTime();

    // Run myfunc every second
    var myfunc = setInterval(function () {

        var now = new Date().getTime();
        var timeleft = eventCountDown - now;

        // Calculating the days, hours, minutes and seconds left
        setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)))
        setHours(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)))
        setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000))

        // Display the message when countdown is over
        if (timeleft < 0) {
            clearInterval(myfunc);
            setDays('')
            setHours("")
            setMinutes("")
            setSeconds("")
            setEnd('00:00:00:00')
        }
    }, 1000);

    const counterData = [
        {
            end:'12',
            title:'SPEAKERS'
        },
        {
            end:'18',
            title:'SPONSORS'
        },
        {
            end:'8',
            title:'WORKSHOPS'
        },
    ]
    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>
        <section className="bg-half-260 bg-animation-left d-table w-100" style={{backgroundImage:`url(${bg1})`}}>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="title-heading position-relative" style={{zIndex:'2'}}>
                            <h4 className="heading fw-semibold text-white title-dark mb-4">Advancing <br/> Research 2021</h4>
                            <p className="text-white-50 para-desc">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                            <div className="row">
                                <div className="col-md-12">
                                    <div id="event-sale">
                                        <ul className="count-down list-unstyled m-0">
                                            {end === true ? 
                                            <li id="end" className="h1">{end}</li>:
                                            <>
                                                <li id="days" className="count-number fw-semibold mb-0 list-inline-item px-3">{days}<p className='count-head'>Days</p> </li>
                                                <li id="hours" className="count-number fw-semibold mb-0 list-inline-item px-3">{hours}<p className='count-head'>Hours</p></li>
                                                <li id="mins" className="count-number fw-semibold mb-0 list-inline-item px-3">{minutes}<p className='count-head'>Mins</p></li>
                                                <li id="secs" className="count-number fw-semibold mb-0 list-inline-item px-3">{seconds}<p className='count-head'>Secs</p></li>
                                            </>
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <Process title="Host Your Event"/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-8">
                        <div className="section-title text-md-start text-center mb-4 pb-2">
                            <h4 className="title fw-semibold mb-3">Keynote Speakers</h4>
                            <p className="para-desc title-dark text-muted mb-0">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-4 d-none d-md-block">
                        <div className="text-md-end text-center">
                            <Link to="#" className="btn btn-primary">All Speakers</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-100 mt-60">
               <Team/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6">
                        <img src={aboutImg} className="img-fluid rounded shadow" alt=""/>
                    </div>

                    <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0 order-lg-3">
                        <div className="section-title">
                            <h4 className="title fw-semibold mb-3">Starty Event management</h4>
                            <p className="text-muted para-desc">The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                        
                            <blockquote className="mx-auto blockquote h6 p-0 px-4 text-muted"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i> The man who comes back through the door in the wall will never be quite the same as the man who went out. <small className="d-block text-primary mt-3">- Starty Event</small></blockquote>
                        </div>
                    </div>

                    <div className="col-lg-2 order-lg-2">
                        <div className="row justify-content-center">
                            {counterData.map((item, index)=>{
                                return(
                                    <div className="col-lg-12 col-md-4 col-6 mt-4 mt-lg-0" key={index}>
                                        <div className="counter-box position-relative text-center">
                                            <h2 className="mb-0 display-6 fw-semibold title-dark mt-2"><CountUp start={0} end={item.end}/><span className="h4">+</span></h2>
                                            <small className="counter-head text-muted">{item.title}</small>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <EventTab/>
        <section className="bg-half-170" style={{backgroundImage:`url(${bg2})`}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title play-icon">
                            <Link to="#" onClick={() => setOpen(true)} className="play-btn lightbox">
                                <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
                            </Link>

                            <div className="mt-4">
                                <h4 className="title text-white title-dark">Let’s Make Something Together</h4>
                                <p className="text-white-50 mb-0">The Biggest Event Ever</p>
                            </div>
                        </div>
                        <ModalVideo
                            channel="youtube"
                            youtube={{ mute: 0, autoplay: 0 }}
                            isOpen={isOpen}
                            videoId="yba7hPeTSjk"
                            onClose={() => setOpen(false)} 
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className="section" id="pricing">
            <div className="container">
                <PricingTwo/>
            </div>

            <div className="container mt-100 mt-60">
                <BlogOne/>
            </div>
        </section>
        <FooterTwo/>
        <ScrollTop/>
        </>
    )
}