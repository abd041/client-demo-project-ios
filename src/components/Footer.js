import React from 'react'
import { Link } from "react-router-dom"
function Footer() {
    return (
        <div>
            <div class="footer">
                <div class="container">
                    <div class="main">

                        <div class="footer1">
                            <img src={require("../assets/images/footer-logo.png")} alt="" />
                        </div>

                        <div class="footer2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li><Link to="/" class="active">Home</Link></li>
                                <li><Link to="/">2022 IOS Meeting</Link></li>
                                <li><Link to="/">Bulletin Board</Link></li>
                                <li><Link to="/">Officers</Link></li>
                                <li><Link to="/" class="last">Grand Rounds</Link></li>
                            </ul>
                        </div>

                        <div class="footer3">
                            <h5>Contact Us</h5>
                            <h4>Mr. Peter Lacy
                                <span>Otolaryngologist</span>
                            </h4>
                            <ul>
                                <li><i class='bx bxs-map'></i><Link to="/">Hermitage Clinic, Old Lucan Road,
                                    Dublin, D20 W722</Link></li>
                                <li><i class='bx bxs-phone'></i><Link to="/">+353 (0) 1 645 9000 </Link></li>
                                <li><i class='bx bxs-envelope'></i><Link to="/" class="last">info@iosconference.org</Link></li>
                            </ul>
                        </div>

                        <div class="footer4">
                            <ul>
                                <li><Link to="/"><img src={require('../assets/images/footer-icon2.png')} alt="" /></Link></li>
                                <li class="last"><Link to="/"><img src={require("../assets/images/footer-icon1.png")} alt="" /></Link></li>
                            </ul>
                        </div>

                    </div>
                    {/* <!-- main end --> */}
                </div>
                {/* <!-- container end --> */}
            </div>

            {/* <!-- footer end -->

            <!-- copy-block start --> */}

            <div class="copy-block">
                <p>© 2023 All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer