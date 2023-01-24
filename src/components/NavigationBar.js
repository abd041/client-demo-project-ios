import React from 'react'
import { Link } from "react-router-dom"
function NavigationBar() {
    return (
        <div className="header">
            <div className="container">
                <div className="main">
                    <div className="logo-block">
                        <Link to="/"><img src={require("../assets/images/logo.png")} alt="" /></Link>
                    </div>
                    <div className="nav">
                        <ul>
                            <li><Link to="/" className="active">Home</Link></li>
                            <li><Link to="/">2022 IOS Meeting</Link></li>
                            <li><Link to="/">Bulletin Board</Link></li>
                            <li><Link to="/">Officers</Link></li>
                            <li><Link to="/" className="last">Grand Rounds</Link></li>
                        </ul>
                    </div>
                    {/* <!-- nav end --> */}
                </div>
                {/* <!-- main end --> */}
            </div>
            {/* <!-- container end --> */}
        </div>
        // <!-- header end-- >
    )
}

export default NavigationBar