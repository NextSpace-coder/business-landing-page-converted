import React from "react";
import { Link } from "react-scroll";

import blog1 from "../../assets/images/blog/01.jpg"
import blog2 from "../../assets/images/blog/02.jpg"
import blog3 from "../../assets/images/blog/03.jpg"
import client1 from "../../assets/images/client/05.jpg"

export default function BlogSidebar({search}){
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
    <div className="sidebar sticky-bar">
        {search === true ? 
            <div className="widget">
                <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Search</h6>
                <div id="search2" className="widget-search mt-4 mb-0">
                    <form role="search" method="get" id="searchform" className="searchform">
                        <div>
                            <input type="text" className="border rounded" name="s" id="s" placeholder="Search Keywords..."/>
                            <input type="submit" id="searchsubmit" value="Search"/>
                        </div>
                    </form>
                </div>
            </div> :
                <div className="widget">
                    <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Author</h6>
                    
                    <div className="mt-4 text-center">
                        <img src={client1} className="avatar avatar-medium rounded-circle mx-auto d-block" alt=""/>

                        <div className="mt-3">
                            <Link to="/blog-author" className="text-dark h5">Maria Brown</Link>
                            <p className="text-muted mb-0">Journalist / Photographer</p>
                        </div>
                    </div>
                </div>
            }
      
        <div className="widget mt-4 pt-2">
            <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Catagories</h6>
            <ul className="list-unstyled mt-4 mb-0 catagories">
                <li className="d-flex justify-content-between"><Link to="#" className="title text-dark">Finance</Link> <span>13</span></li>
                <li className="d-flex justify-content-between mt-2"><Link to="#" className="title text-dark">Business</Link> <span>09</span></li>
                <li className="d-flex justify-content-between mt-2"><Link to="#" className="title text-dark">Blog</Link> <span>18</span></li>
                <li className="d-flex justify-content-between mt-2"><Link to="#" className="title text-dark">Corporate</Link> <span>20</span></li>
                <li className="d-flex justify-content-between mt-2"><Link to="#" className="title text-dark">Investment</Link> <span>22</span></li>
            </ul>
        </div>
        <div className="widget mt-4 pt-2">
            <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Recent Post</h6>
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
        <div className="widget mt-4 pt-2 text-center">
            <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded">Tags Cloud</h6>
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
    )
}