import React from "react";

import client1 from '../assets/images/client/logo-1.svg'
import client2 from '../assets/images/client/logo-2.svg'
import client3 from '../assets/images/client/logo-3.svg'
import client4 from '../assets/images/client/logo-4.svg'
import client5 from '../assets/images/client/logo-5.svg'
import client6 from '../assets/images/client/logo-6.svg'

export default function Partners(){
    const clientImg = [client1, client2, client3, client4, client5, client6]
    return(
        <div className="row justify-content-center">
            {clientImg.map((item,index)=>{
                return(
                <div className="col-lg-2 col-md-2 col-6 text-center" key={index}>
                    <img src={item} className="img-fluid" alt=""/>
                </div>
                )
            })}
        </div>
    )
}