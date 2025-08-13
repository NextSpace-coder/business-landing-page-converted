import React from "react";
import { Link } from "react-router-dom";

import team1 from "../assets/images/client/09.jpg"
import team2 from "../assets/images/client/10.jpg"
import team3 from "../assets/images/client/11.jpg"
import team4 from "../assets/images/client/12.jpg"
import team5 from "../assets/images/client/13.jpg"
import team6 from "../assets/images/client/14.jpg"
import team7 from "../assets/images/client/15.jpg"

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function Team(){
    const settings = {
        container: '.tiny-six-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 6
            },

            992: {
                items: 4
            },

            767: {
                items: 3
            },

            425: {
                items: 2
            },

            375: {
                items: 1
            },
        },
      };
    const teamData = [
        {
            image:team1,
            name:'Dennis Rosario',
            title:'C.E.O'
        },
        {
            image:team2,
            name:'Billy Gregory',
            title:'Manager'
        },
        {
            image:team3,
            name:'Connie Dunton',
            title:'Manager'
        },
        {
            image:team4,
            name:'Alberta Petty',
            title:'Manager'
        },
        {
            image:team5,
            name:'Shirley Garcia',
            title:'Manager'
        },
        {
            image:team6,
            name:'Michael Wheeler',
            title:'Manager'
        },
        {
            image:team7,
            name:'Billy Gregory',
            title:'Manager'
        },
    ]
    return(
        <>
        <div className="row">
            <div className="col-12 px-0"></div>
            <div className="tiny-six-item">
                <TinySlider settings={settings}>
                    {teamData.map((item,index)=>{
                        return(
                            <div className="tiny-slide" key={index}>
                                <div className="card team team-primary">
                                    <div className="card-img">
                                        <img src={item.image} className="img-fluid" alt=""/>
                                        <div className="card-overlay"></div>
                                    </div>
                                    <div className="team-content">
                                        <Link to="#" className="h6 name text-uppercase d-block mb-0 text-white title-dark">{item.name}</Link>
                                        <small className="text-white title-dark">{item.title}</small>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </TinySlider>
            </div>
        </div>
        </>
    )
}