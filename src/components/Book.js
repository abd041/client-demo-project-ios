import React from 'react'

function Book() {
    return (
        <div>
            <div class="book">
                <div class="container">
                    <div class="main">
                        <div class="img-block">
                            <img src={require("../assets/images/book1.jpg")} alt="" />
                        </div>
                        <div class="img-block">
                            <img src={require("../assets/images/book2.jpg")} alt="" />
                        </div>
                    </div>
                </div>
                {/* <!-- container end --> */}
            </div>
        </div>
    )
}

export default Book