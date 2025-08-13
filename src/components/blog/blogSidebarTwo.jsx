import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../assets/images/blog/01.jpg"
import blog2 from "../../assets/images/blog/02.jpg"
import blog3 from "../../assets/images/blog/03.jpg"

import {FaFacebookF, AiOutlineInstagram, AiOutlineTwitter,AiFillLinkedin, AiOutlineDribbble} from "../../assets/icons/vander"

export default function BlogSidebarTwo({client, name}){
    const recentPost =[
        {
            image:blog1,
            title:'Consultant Business',
            date:'13th March 2023'
        },
        {
            image:blog2,
            title:'Grow Your Business',
            date:'5th May 2023'
        },
        {
            image:blog3,
            title:'Look On The Glorious Balance',
            date:'19th June 2023'
        },
    ]
    return(
        <>
        <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="sidebar sticky-bar">
                <div className="widget text-center">
                    <div className="rounded p-4 shadow bg-white">
                        <img src={client} className="avatar avatar-medium rounded-circle shadow-lg" alt=""/>

                        <div className="mt-4">
                            <Link to="/blog-author" className="text-dark title h5">{name}</Link>
                            <p className="text-muted">Blogger</p>

                            <ul className="list-unstyled align-items-center social-icon social mb-0">
                                <li className="list-inline-item"><Link to="#" className="rounded"><FaFacebookF/></Link></li>
                                <li className="list-inline-item"><Link to="#" className="rounded mt-1"><AiOutlineInstagram/></Link></li>
                                <li className="list-inline-item"><Link to="#" className="rounded mt-1"><AiOutlineTwitter/></Link></li>
                                <li className="list-inline-item"><Link to="#" className="rounded mt-1"><AiFillLinkedin/></Link></li>
                                <li className="list-inline-item"><Link to="#" className="rounded mt-1"><AiOutlineDribbble/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="widget mt-4 pt-2">
                    <div className="rounded p-4 shadow bg-white">
                        <h6 className="widget-title font-weight-bold pt-2 pb-2 shadow bg-light rounded text-center">Recent Post</h6>
                        <div className="mt-4">
                            {recentPost.map((item,index)=>{
                                return(
                                    <div className="d-flex align-items-center mt-3" key={index}>
                                        <img src={item.image} className="avatar avatar-small rounded" style={{width:'auto'}} alt=""/>
                                        <div className="flex-1 ms-3">
                                            <Link to="#" className="d-block title text-dark">{item.title}</Link>
                                            <span className="text-muted">{item.date}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                
                <div className="widget mt-4 pt-2 text-center">
                    <div className="rounded p-4 shadow bg-white">
                        <h6 className="widget-title font-weight-bold pt-2 pb-2 shadow bg-light rounded">Tags Cloud</h6>
                        <div className="tagcloud mt-4">
                            <Link to="#" className="rounded text-dark">Business</Link>
                            <Link to="#" className="rounded text-dark">Finance</Link>
                            <Link to="#" className="rounded text-dark">Marketing</Link>
                            <Link to="#" className="rounded text-dark">Fashion</Link>
                            <Link to="#" className="rounded text-dark">Bride</Link>
                            <Link to="#" className="rounded text-dark">Lifestyle</Link>
                            <Link to="#" className="rounded text-dark">Travel</Link>
                            <Link to="#" className="rounded text-dark">Beauty</Link>
                            <Link to="#" className="rounded text-dark">Video</Link>
                            <Link to="#" className="rounded text-dark">Audio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}