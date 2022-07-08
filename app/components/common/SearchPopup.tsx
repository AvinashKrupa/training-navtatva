import React from "react";
import { Modal } from "react-bootstrap";

const SearchPopup = (props: any) => {

    return (
        <Modal
            show={props.openSearchBox}
            animation={true}
            className=""
            shadow-lg
            border
            size={"xl"}
            id="searchPopup"
        >
            <Modal.Dialog role={"document"}>
                <div className="modal-content">
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={()=>{
                            props.setOpenSearchBox(false)
                        }}
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-x-lg"
                        viewBox="0 0 16 16"
                    >
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                    </button>
                    <div className="modal-body searchbar">
                    <div className="searchbar-popup">
                        <div className="input-group mb-4">
                        <span>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            >
                            <path
                                fillRule="evenodd"
                                d="M14.53 15.59a8.25 8.25 0 111.06-1.06l5.69 5.69a.75.75 0 11-1.06 1.06l-5.69-5.69zM2.5 9.25a6.75 6.75 0 1111.74 4.547.746.746 0 00-.443.442A6.75 6.75 0 012.5 9.25z"
                            />
                            </svg>
                        </span>
                        <input
                            type="text"
                            className="form-control fs-16"
                            placeholder="Find clothing from over 500+ categories..."
                        />
                        </div>
                        <div className="searchbar-popup-contnet">
                        <p className="textlight">For</p>
                        <ul className="list-inline mb-4">
                            <li className="list-inline-item">
                            <div className="gender-box malebox">
                                <i className="fas fa-mars fa-fw" />
                            </div>
                            </li>
                            <li className="list-inline-item">
                            <div className="gender-box femalebox">
                                <i className="fas fa-venus fa-fw" />
                            </div>
                            </li>
                            <li className="list-inline-item">
                            <div className="gender-box otherbox">
                                <i className="fas fa-transgender fa-fw" />
                            </div>
                            </li>
                        </ul>
                        <p className="textlight">Material</p>
                        <ul className="list-inline mb-4">
                            <li className="list-inline-item">
                            <a href="#">
                                <div
                                className="meterial-box"
                                style={{
                                    backgroundImage: "url(images/month-bg2.jpg)",
                                }}
                                >
                                <span>Cotton</span>
                                </div>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <div
                                className="meterial-box"
                                style={{
                                    backgroundImage: "url(images/month-bg3.jpg)",
                                }}
                                >
                                <span>Silk</span>
                                </div>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <div
                                className="meterial-box"
                                style={{
                                    backgroundImage: "url(images/month-bg4.jpg)",
                                }}
                                >
                                <span>Khaadi</span>
                                </div>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <div
                                className="meterial-box"
                                style={{
                                    backgroundImage: "url(images/month-bg2.jpg)",
                                }}
                                >
                                <span>Nylon</span>
                                </div>
                            </a>
                            </li>
                        </ul>
                        <p className="textlight">Work</p>
                        <ul className="list-inline mb-4">
                            <li className="list-inline-item">
                            <a href="#">
                                <div
                                className="meterial-box"
                                style={{
                                    backgroundImage: "url(images/month-bg2.jpg)",
                                }}
                                >
                                <span>Printed</span>
                                </div>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <div
                                className="meterial-box"
                                style={{
                                    backgroundImage: "url(images/month-bg3.jpg)",
                                }}
                                >
                                <span>Embroidery</span>
                                </div>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <div
                                className="meterial-box"
                                style={{
                                    backgroundImage: "url(images/month-bg4.jpg)",
                                }}
                                >
                                <span>Plain</span>
                                </div>
                            </a>
                            </li>
                        </ul>
                        <p className="textlight">Occasion</p>
                        <ul className="list-inline mb-4">
                            <li className="list-inline-item">
                            <a href="#">
                                <div
                                className="meterial-box"
                                style={{
                                    backgroundImage: "url(images/month-bg2.jpg)",
                                }}
                                >
                                <span>Bridal</span>
                                </div>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <div
                                className="meterial-box"
                                style={{
                                    backgroundImage: "url(images/month-bg3.jpg)",
                                }}
                                >
                                <span>Office Wear</span>
                                </div>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <div
                                className="meterial-box"
                                style={{
                                    backgroundImage: "url(images/month-bg4.jpg)",
                                }}
                                >
                                <span>Party Wear</span>
                                </div>
                            </a>
                            </li>
                            <li className="list-inline-item">
                            <a href="#">
                                <div
                                className="meterial-box"
                                style={{
                                    backgroundImage: "url(images/month-bg4.jpg)",
                                }}
                                >
                                <span>Traditional</span>
                                </div>
                            </a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </Modal.Dialog>
        </Modal>
    )
}

export default SearchPopup;