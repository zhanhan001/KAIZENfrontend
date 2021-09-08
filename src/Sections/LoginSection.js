import React from "react";
// reactstrap components
import {
    Card,
} from "reactstrap";

// core components

function SectionLogin(props) {
    return (
        <>
            <div
                className="section section-image section-login"
                style={{
                    backgroundImage:
                        "url(" + require("../assets/img/download.jpg").default + ")",
                    alignContent: "center",
                    'background-size' : "cover"
                }}
            >
                <Card>
                    {props.children}
                </Card>
            </div>{" "}
        </>
    );
}

export default SectionLogin;
