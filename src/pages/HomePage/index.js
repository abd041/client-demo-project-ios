import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import NavigationBar from "../../components/NavigationBar"
import HomePageBanner from "../../components/HomePageBanner"
import Book from "../../components/Book"
import TwitterFeed from "../../components/TwitterFeed"
import Footer from '../../components/Footer'

function HomePage() {


    const topFunction = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <div className="top-header">
                <div className="container">
                    <div className="main">
                        <Link to=""><i className='bx bx-envelope'></i>info@iosconference.org</Link>
                        <ul>
                            <li><Link to="/" className="one">Links</Link></li>
                            <li><Link to="/">RAMI</Link></li>
                            <li><Link to="/">IOTA</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                    {/* <!-- main end --> */}
                </div>
                {/* <!-- container end --> */}
            </div>
            {/* <!-- mobile-menu start --> */}
            <div className="mo-menu">
                <div className="container">
                    <div className="main">
                        <div className="logo-block">
                            <Link to="/"><img src={require('../../assets/images/logo.png')} alt="" /></Link>
                        </div>
                        <div className="mnu">
                            <button id="first" className="btn" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon mid"></span>
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-header">
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="menus">
                                        <li><Link to="/" className="active">Home</Link></li>
                                        <li><Link to="/">2022 IOS Meeting</Link></li>
                                        <li><Link to="/">Bulletin Board</Link></li>
                                        <li><Link to="/">Officers</Link></li>
                                        <li><Link to="/" className="last">Grand Rounds</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--mobile-menu end ---> */}
            <NavigationBar />
            <HomePageBanner />


            <div class="sponsors">
                <div class="container">
                    <div class="title">
                        <h3>Thanks to <span>Our Sponsors</span></h3>
                    </div>

                    <div class="main">
                        <div class="item">
                            <img src={require("../../assets/images/sponsors1.jpg")} alt="" />
                        </div>

                        <div class="item">
                            <img src={require("../../assets/images/sponsors2.jpg")} alt="" />
                        </div>

                        <div class="item">
                            <img src={require("../../assets/images/sponsors3.jpg")} alt="" />
                        </div>

                        <div class="item">
                            <img src={require("../../assets/images/sponsors4.jpg")} alt="" />
                        </div>

                        <div class="item">
                            <img src={require("../../assets/images/sponsors5.jpg")} alt="" />
                        </div>

                    </div>
                    {/* <!-- main end --> */}
                </div>
                {/* <!-- container end --> */}
            </div>


            <div class="los-winter">
                <div class="container">
                    <div class="title">
                        <h3>IOS Winter <span>2022/2023</span></h3>
                    </div>

                    <p>On behalf of IOS council thank you to members, visiting speakers & trainee presenters who helped to make
                        the 2022 Titanic Belfast IOS meeting a big success. Please read David Brinkman’s report in ENT &
                        Audiology News for details
                        <span><Link to="/">https://www.entandaudiologynews.com/<br />events/event/ios-2022</Link> Peter Lacy IOS Southern
                            Secretary and
                            President Robin Adair are now
                            planning the IOS 2023 face to face meeting in Radisson Blu Hotel, Rosses Point Sligo 13 / 14
                            October.
                            Make a date in your diary. Further
                            details to follow via this webpage and social media.</span>
                        Look out for details to follow of Storz visiting professors at Joint RSM / IOS meeting in Dublin May
                        2023.
                    </p>

                    <h4>Keith Trimble</h4>
                    <h6>IOS Northern Secretary</h6>
                </div>
                {/* <!-- container end --> */}
            </div>
            <Book />

            <div class="members">
                <div class="container">
                    <div class="main">
                        <div class="lt">
                            <h3>ENT & Audiology
                                News offer to <span>IOS
                                    Members</span></h3>
                            <p>IOS members can sign up to receive the digital version of
                                ENT & Audiology news every two months with the bonus
                                optional offer for those who also have an interest in
                                rhinoplasty and facial plastics. Receive a free digital
                                subscription to The PMFA Journal (Plastic, Maxillofacial & Aesthetic related content). To avail
                                of these offers, simply register your interest with Nova McMillan via email to
                                <a href="">nova@pinpoint-scotland.com</a>
                            </p>
                        </div>
                        <div class="rt">
                            <img src={require("../../assets/images/members-right-img.png")} alt="" />
                            <img src={require("../../assets/images/dot.png")} alt="" class="dot" />
                        </div>
                    </div>
                    {/* <!-- main end --> */}
                    <div class="white-box"></div>
                    <div class="green-box"></div>
                </div>
                {/* <!-- container end --> */}
            </div>
            <TwitterFeed />
            <Footer />
            <button onClick={topFunction} id="myBtn" title="Go to top"><i class="bx bx-up-arrow-alt"></i></button>
        </div >
    )
}

export default HomePage