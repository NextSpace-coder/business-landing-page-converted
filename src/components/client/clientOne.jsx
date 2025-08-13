import React from "react";
import { Link } from "react-router-dom";

import client1 from "../../assets/images/client/01.jpg";
import client2 from "../../assets/images/client/02.jpg";
import client3 from "../../assets/images/client/03.jpg";
import client4 from "../../assets/images/client/04.jpg";
import client5 from "../../assets/images/client/05.jpg";
import client6 from "../../assets/images/client/06.jpg";

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function ClientOne({bgWhite}){
    const settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
      };
    const clientsData = [
        {
            image:client1,
            name:'Thomas Israel',
            desc:'" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "'
        },
        {
            image:client2,
            name:'Carl Oliver',
            desc:'" The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. "'
        },
        {
            image:client3,
            name:'Barbara McIntosh',
            desc:'" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others."'
        },
        {
            image:client4,
            name:'Jill Webb',
            desc:'" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts."'
        },
        {
            image:client5,
            name:'Dean Tolle',
            desc:'"There is now an abundance of readable dummy texts. These are usually used when a text is required. "'
        },
        {
            image:client6,
            name:'Christa Smith',
            desc:'"According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "'
        },
    ]
    return(
        <>
            <div className="row">
                <div className="col-12">
                    <div className="tiny-three-item">
                        <TinySlider settings={settings}>
                            {clientsData.map((item,index)=>{
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className={`${bgWhite === true ? 'bg-white shadow' : ''} card border-0 text-center`}>
                                            <div className="card-body">
                                                <img src={item.image} className="img-fluid avatar avatar-small rounded-circle mx-auto shadow" alt=""/>
                                                <p className="text-muted mt-4">{item.desc}</p>
                                                <h6 className="text-primary">- {item.name}</h6>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider>
                    </div>
                </div>
            </div>
        </>
    )
}