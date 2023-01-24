import React from 'react'
import { Link } from "react-router-dom"
function TwitterFeed() {
    return (
        <div>    <div class="twitter">
            <div class="container">
                <div class="title">
                    <h3>Twitter Feed</h3>
                </div>

                <div class="main">
                    <div class="item">
                        <div class="img-block">
                            <img src={require("../assets/images/twitter-logo.png")} alt="" />
                        </div>
                        <div class="text">
                            <h5>ENT & Audiology News
                                <span>@ENT_AudsNews</span>
                            </h5>
                            <p>Engaging, informative and relevant
                                content for all ENT and Audiology
                                professionals. <span>#ENTAuds</span></p>

                            <ul>
                                <li><Link to="/"><i class='bx bx-heart'></i></Link></li>
                                <li><Link to="/"><i class='bx bx-repost'></i></Link></li>
                                <li><Link to="/"><i class='bx bx-message-rounded-detail'></i></Link></li>
                                <li><Link to="/"><i class='bx bx-plus-circle'></i></Link></li>
                            </ul>
                            <p class="right">1 hour ago</p>
                        </div>
                    </div>

                    <div class="item">
                        <div class="img-block">
                            <img src={require("../assets/images/twitter-logo.png")} alt="" />
                        </div>
                        <div class="text">
                            <h5>ENT & Audiology News
                                <span>@ENT_AudsNews</span>
                            </h5>
                            <p>Engaging, informative and relevant
                                content for all ENT and Audiology
                                professionals. <span>#ENTAuds</span></p>

                            <ul>
                                <li><Link to="/"><i class='bx bx-heart'></i></Link></li>
                                <li><Link to="/"><i class='bx bx-repost'></i></Link></li>
                                <li><Link to="/"><i class='bx bx-message-rounded-detail'></i></Link></li>
                                <li><Link to="/"><i class='bx bx-plus-circle'></i></Link></li>
                            </ul>
                            <p class="right">1 hour ago</p>
                        </div>
                    </div>

                    <div class="item">
                        <div class="img-block">
                            <img src={require("../assets/images/twitter-logo.png")} alt="" />
                        </div>
                        <div class="text">
                            <h5>ENT & Audiology News
                                <span>@ENT_AudsNews</span>
                            </h5>
                            <p>Engaging, informative and relevant
                                content for all ENT and Audiology
                                professionals. <span>#ENTAuds</span></p>

                            <ul>
                                <li><Link to="/"><i class='bx bx-heart'></i></Link></li>
                                <li><Link to="/"><i class='bx bx-repost'></i></Link></li>
                                <li><Link to="/"><i class='bx bx-message-rounded-detail'></i></Link></li>
                                <li><Link to="/"><i class='bx bx-plus-circle'></i></Link></li>
                            </ul>
                            <p class="right">1 hour ago</p>
                        </div>
                    </div>
                </div>
                {/* <!-- main end --> */}
                <div class="btn-block">
                    <Link to="/" class="btn">VIEW ALL</Link>
                </div>
            </div>
            {/* <!-- container end --> */}
        </div></div>
    )
}

export default TwitterFeed