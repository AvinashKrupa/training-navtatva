import React from "react";
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface IProps {
    loading: boolean
}

const override: CSSProperties = {

    display: "block",
    margin: "0 auto",

};

const Loader = (props: IPros) => {
    return (
        <ClipLoader size={50} cssOverride={override} loading={props.loading} />

    )
}

export default Loader