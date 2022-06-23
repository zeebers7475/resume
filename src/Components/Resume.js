import React, { useState } from "react"

function Resume(props) {

    const [RModal, setRModal] = useState(props.RModal)

    return(
        <div className={"RModal " + props.mode.name}>
            <div className={"InnerModal " + props.mode.name}>
                <button className="Close" onClick={() => props.close("")}>X</button>
                <div className="RTitle">
                    <h2>Kristian Acevedo's Resume</h2>
                </div>
                <div>
                    <button className="RButt">Download Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Resume