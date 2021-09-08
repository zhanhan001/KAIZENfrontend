import React from "react";
// reactstrap components
import {
    Card,
} from "reactstrap";

import "./login.css";

// core components

function SectionLogin(props) {
    return (
        <>
            <div>
                <text className="top-left-text">
                    Please take note that there are new safe-distancing measures in place from 21 Sep onwards.
                </text>
            </div>
            <div className="section section-image section-login">
                <Card>
                    {props.children}
                </Card>
            </div>
        </>
    );
}

export default SectionLogin;
