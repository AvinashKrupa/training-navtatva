import React from "react";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",

};

const Loader = (props: any) => {
    return (
        <ClipLoader size={50} cssOverride={override} loading={props.loading} />
    )
}

export default Loader