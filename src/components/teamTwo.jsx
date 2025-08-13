import React  from "react";
import { Link } from "react-router-dom";

import client1 from "../assets/images/client/13.jpg"
import client2 from "../assets/images/client/14.jpg"
import client3 from "../assets/images/client/15.jpg"
import client4 from "../assets/images/client/16.jpg"

import {FiFacebook,FiInstagram,FiTwitter,FiLinkedin} from "../assets/icons/vander"

export default function TeamTwo(){
    const teamData = [
        {
            image:client1,
            name:'Dennis Rosario',
            title:'Manager'
        },
        {
            image:client2,
            name:'Billy Gregory',
            title:'Manager'
        },
         {
            image:client3,
            name:'Connie Dunton',
            title:'Manager'
        },
        {
            image:client4,
            name:'Alberta Petty',
            title:'Manager'
        },
    ]
    return(
        <>
        <div className="row">
            {teamData.map((item,index)=>{
                return(
                    <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                        <div className="card team team-primary rounded team-two overflow-hidden shadow">
                            <div className="team-image">
                                <img src={item.image} className="img-fluid" alt=""/>
                                <div className="overlay"></div>
                            </div>
                            <ul className="list-unstyled social-icon team-social mb-0">
                                <li><Link to="#" className="rounded"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                <li className="mt-1"><Link to="#" className="rounded"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                <li className="mt-1"><Link to="#" className="rounded"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                <li className="mt-1"><Link to="#" className="rounded"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                            </ul>
                            <div className="team-content">
                                <Link to="#" className="h6 text-uppercase d-block mb-0 text-white title-dark">{item.name}</Link>
                                <small className="text-white title-dark">{item.title}</small>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>
    )
}