import React from "react";
import client1 from "../../assets/images/client/01.jpg"
import client2 from "../../assets/images/client/02.jpg"
import client3 from "../../assets/images/client/03.jpg"

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function ClientTwo(){
    const settings = {
        container: '.tiny-single-item',
        items: 1,
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
      };
    const clientData = [
        {
            image:client1,
            name:'Johnny Rosario',
            title:'C.E.O',
            desc:'" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout. "'
        },
        {
            image:client2,
            name:'Gale Larose',
            title:'Manager',
            desc:'" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout. "'
        },
        {
            image:client3,
            name:'Shelly Goodman',
            title:'Manager',
            desc:'" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewers attention from the layout. "'
        },
    ]
    return(
        <>
        <div className="conatainer">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="tiny-single-item">
                        <TinySlider settings={settings}>
                            {clientData.map((item,index)=>{
                                return(
                                    <div className="tiny-slide px-md-5" key={index}>
                                        <div className="card client-testi text-center">
                                            <img src={item.image} className="avatar avatar-small rounded-pill mx-auto" alt=""/>

                                            <div className="card-body pb-0 content">
                                                <p className="h5 fw-normal text-muted fst-italic">{item.desc}</p>

                                                <div className="name mt-4">
                                                    <small className="text-uppercase fw-semibold d-block">{item.name}</small>
                                                    <small className="text-muted">{item.title}</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider>    
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}