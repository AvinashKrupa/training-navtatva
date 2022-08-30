import React from "react";
import { Modal } from "react-bootstrap";
import { useRouter } from "next/router";
import { AiFillDelete } from "react-icons/ai";


const AddressList = (props: any) => {

    const router = useRouter();
    return (
        <Modal
            show={props.isShowing}
            animation={true}
            className="cart-popup"
            size={"xl"}
            id="addAddress"

        >
            <div className="modal-content">
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"

                    onClick={() => {
                        props.setIsShowing(false);
                    }}
                >
                </button>
                <div className="accordion-item bgbar ">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="cart-right-area">
                                <h4 className="">  SHIPPING ADDRESS</h4>
                            </div>
                        </div>
                    </div>
                    <div>  <div className="col-md-12">
                        <div className="accordion-body">
                            <form>
                                <div className="row mt-4 mt-md-0">
                                    <div className="col-sm-6 mb-4">
                                        <label htmlFor="firstName" className="form-label">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="firstName"
                                            name="first_name"
                                            placeholder=""
                                            required
                                        onChange={props.handleChange}
                                        value={props.addressFields.first_name}
                                        />

                                        <div className="invalid-feedback"></div>
                                    </div>
                                    <div className="col-sm-6  mb-4">
                                        <label htmlFor="lastName" className="form-label">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lastName"
                                            placeholder=""
                                            //value={""}
                                            required
                                            onChange={props.handleChange}
                                            name="last_name"
                                        value={props.addressFields.last_name}
                                        />
                                        <div className="invalid-feedback"></div>
                                    </div>
                                    <div className="col-12  mb-4">
                                        <label htmlFor="address" className="form-label">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            placeholder="#45, Avenue Towers, Scalpel Road"
                                            required
                                         onChange={props.handleChange}
                                            name="line_1"
                                        value={props.addressFields.line_1}
                                        />
                                    </div>
                                    <div className="col-12  mb-4">
                                        <label htmlFor="address2" className="form-label">
                                            Apartment, Street, Landmark
                                            <span className="text-muted">(Optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address2"
                                            placeholder="80 Feet Road, Behind Hindu Temple"
                                            onChange={props.handleChange}
                                            name="line_2"
                                            required
                                        value={props.addressFields.line_2}
                                        />
                                    </div>
                                    <div className="col-sm-6  mb-4">
                                        <label htmlFor="lastName" className="form-label">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            placeholder=""
                                            //value={""}
                                            required
                                            onChange={props.handleChange}
                                            name="city"
                                        value={props.addressFields.city}
                                        />
                                    </div>
                                    <div className="col-md-3 ">
                                        <label htmlFor="zip" className="form-label">
                                            Postal Code
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Postal Code"
                                            placeholder=""
                                            required
                                            onChange={props.handleChange}
                                            name="postcode"
                                        value={props?.addressFields.postcode}
                                        />
                                    </div>
                                </div>
                                {/* <div className="mt-4">
                                    <label htmlFor="zip" className="form-label">
                                        Address Type
                                    </label>
                                    <div className="d-flex">
                                        <div className="form-check mt-4">
                                            <input
                                                id="credit"
                                                name="paymentMethod"
                                                type="radio"
                                                className="form-check-input"
                                                defaultChecked
                                                required
                                            />

                                            <label
                                                className="form-check-label ms-2 me-4"
                                                htmlFor="credit"
                                            >
                                                Home (9am - 10pm)
                                            </label>
                                        </div>
                                        <div className="form-check  mt-4">
                                            <input
                                                id="debit"
                                                name="paymentMethod"
                                                type="radio"
                                                className="form-check-input"
                                                required
                                            />
                                            <label
                                                className="form-check-label ms-2 me-4"
                                                htmlFor="debit"
                                            >
                                                Office (9am - 5pm)
                                            </label>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="mt-4">
                                    <button
                                        className="btn  btn-lg fs-16"
                                        type="button"
                                     onClick={props.onSave}
                                    //disabled={true}
                                    //type='submit'
                                    >
                                        {props.editAddressStaus && "Save & Deliver Here"} {!props.editAddressStaus && "Update"}
                                    </button>
                                    {/*
                <button
                  className="btn  btn-lg fs-16 m-2"
                  type="button"
                  //onClick={props.paymentMethod}
                >
                  Next
                </button> */}
                                </div>


                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    );
};

export default AddressList;
