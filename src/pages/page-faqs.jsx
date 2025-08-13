import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavbarTwo from "../components/navbar/navbarTwo";
import PricingFive from "../components/pricing/pricingFive";
import FooterSeven from "../components/footer/footerSeven";
import ScrollTop from "../components/scrollTop";

export default function Faqs(){
    const [activeTab, setActiveTab] = useState(0);
    const [activeIndex, setActiveIndex] = useState(1)

    const accordionData = [
        {
            id:1,
            title:'How does it work ?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:2,
            title:'Do I need a designer to use Starty ?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:3,
            title:'Do I need a designer to use Starty ?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
        {
            id:4,
            title:'What happens when I receive an order ?',
            desc:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.'
        },
    ]

    return(
        <>
        <NavbarTwo navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light"/>

        <section className="bg-half-80 d-table bg-primary bg-gradient w-100">
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <small className="text-white-50 mb-1 fw-medium text-uppercase mx-auto">Questions & Answers</small>
                            <h5 className="heading fw-semibold mb-0 page-heading text-white title-dark">FAQs</h5>
                        </div>
                    </div>
                </div>

                <div className="position-middle-bottom">
                    <nav aria-label="breadcrumb" className="d-block">
                        <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                            <li className="breadcrumb-item"><Link to="/">Starty</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">FAQs</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>

        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-5 col-12">
                        <div className="card section-title bg-white p-4 shadow rounded border-0">
                            <ul className="nav nav-pills nav-justified flex-column bg-transparent mb-0">
                                <li className="nav-item">
                                    <Link className={`${activeTab === 0 ? 'active' : ''} nav-link rounded shadow `} to="#" onClick={()=>setActiveTab(0)}>
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0">Buying Questions</h6>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item mt-3">
                                    <Link className={`${activeTab === 1 ? 'active' : ''} nav-link rounded shadow `} to="#" onClick={()=>setActiveTab(1)}>
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0">General Questions</h6>
                                        </div>
                                    </Link>
                                </li>
                                
                                <li className="nav-item mt-3">
                                    <Link className={`${activeTab === 2 ? 'active' : ''} nav-link rounded shadow `} to="#" onClick={()=>setActiveTab(2)}>
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0">Payments Questions</h6>
                                        </div>
                                    </Link>
                                </li>

                                <li className="nav-item mt-3">
                                    <Link className={`${activeTab === 3 ? 'active' : ''} nav-link rounded shadow `} to="#" onClick={()=>setActiveTab(3)}>
                                        <div className="text-start py-1 px-3">
                                            <h6 className="mb-0">Support Questions</h6>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-8 col-md-7 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="tab-content" id="pills-tabContent">
                            {activeTab === 0 ? 
                                <div className="tab-pane fade show active">
                                    <div className="section-title" id="tech">
                                        <h4>Buying Product</h4>
                                    </div>
            
                                    <div className="accordion mt-4 pt-2" id="buyingquestion">
                                        {accordionData.map((item, index)=>{
                                            return(
                                                <div className="accordion-item rounded border-0 shadow mt-3" key={index}>
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-white`} onClick={()=>setActiveIndex(item.id)}>
                                                            {item.title}
                                                        </button>
                                                    </h2>
                                                    {activeIndex === item.id ?
                                                    <div id="collapseTwo" className="show accordion-collapse border-0 collapse">
                                                        <div className="accordion-body text-muted bg-white collapsed">
                                                            {item.desc}
                                                        </div>
                                                    </div>:''
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>  : ''  
                            }
                           
                            {activeTab === 1 ? 
                                <div className="tab-pane fade show active">
                                    <div className="section-title" id="general">
                                        <h4>General Questions</h4>
                                    </div>
            
                                    <div className="accordion mt-4 pt-2" id="generalquestion">
                                        {accordionData.map((item, index)=>{
                                            return(
                                                <div className="accordion-item rounded border-0 shadow mt-3" key={index}>
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-white`} onClick={()=>setActiveIndex(item.id)}>
                                                            {item.title}
                                                        </button>
                                                    </h2>
                                                    {activeIndex === item.id ?
                                                    <div id="collapseTwo" className="show accordion-collapse border-0 collapse">
                                                        <div className="accordion-body text-muted bg-white collapsed">
                                                            {item.desc}
                                                        </div>
                                                    </div>:''
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div> : ''
                            }

                            {activeTab === 2 ? 
                                <div className="tab-pane fade show active" >
                                    <div className="section-title" id="payment">
                                        <h4>Payments Questions</h4>
                                    </div>
            
                                    <div className="accordion mt-4 pt-2" id="paymentquestion">
                                        {accordionData.map((item, index)=>{
                                            return(
                                                <div className="accordion-item rounded border-0 shadow mt-3" key={index}>
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-white`} onClick={()=>setActiveIndex(item.id)}>
                                                            {item.title}
                                                        </button>
                                                    </h2>
                                                    {activeIndex === item.id ?
                                                    <div id="collapseTwo" className="show accordion-collapse border-0 collapse">
                                                        <div className="accordion-body text-muted bg-white collapsed">
                                                            {item.desc}
                                                        </div>
                                                    </div>:''
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div> :''
                            }
                            {activeTab === 3 ? 
                                <div className="tab-pane fade show active" >
                                    <div className="section-title" id="support">
                                        <h4>Support Questions</h4>
                                    </div>
            
                                    <div className="accordion mt-4 pt-2" id="supportquestion">
                                        {accordionData.map((item, index)=>{
                                            return(
                                                <div className="accordion-item rounded border-0 shadow mt-3" key={index}>
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className={`${activeIndex === item.id ? '' : 'collapsed'} accordion-button border-0 bg-white`} onClick={()=>setActiveIndex(item.id)}>
                                                            {item.title}
                                                        </button>
                                                    </h2>
                                                    {activeIndex === item.id ?
                                                    <div id="collapseTwo" className="show accordion-collapse border-0 collapse">
                                                        <div className="accordion-body text-muted bg-white collapsed">
                                                            {item.desc}
                                                        </div>
                                                    </div>:''
                                                    }
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div> : ''
                            }

                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <PricingFive/>
            </div>
        </section>

        <FooterSeven/>
        <ScrollTop/>
        </>
    )
}