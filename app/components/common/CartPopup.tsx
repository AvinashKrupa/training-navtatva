import React from "react";

const CartPopup = () => {
    return (
        <div className="modal fade cart-popup" id="exampleModal">
            <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                />
                <div className="modal-body p-0">
                <div className="row m-0">
                    <div className="col-12 col-md-5 bg-1 left-area">
                    <div className="cart-image text-center">
                        <h6>Anubhutee</h6>
                        <p>
                        Women Teal Blue Beige Ethnic Motifs Printed Straight Kurti
                        </p>
                        <img src="images/img1.png" className="img-fluid" />
                    </div>
                    </div>
                    <div className="col-12 col-md-7">
                    <div className="cart-right-area">
                        <h4 className="text-center">
                        <img
                            src="images/bucket.png"
                            className="img-fluid d-block mx-auto mb-2"
                        />
                        Bulk Order
                        </h4>
                        <div className="table-responsive mt-5">
                        <table className="table cart-table">
                            <tbody>
                            <tr>
                                <td>
                                <span>Size</span>
                                <select className="form-select">
                                    <option selected>36</option>
                                    <option value={1}>28</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                </select>
                                </td>
                                <td>
                                <span>Qty</span>
                                <select className="form-select">
                                    <option selected>10</option>
                                    <option value={1}>20</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                </select>
                                </td>
                                <td className="price">₹3,789</td>
                            </tr>
                            <tr>
                                <td>
                                <span>Size</span>
                                <select className="form-select">
                                    <option selected>36</option>
                                    <option value={1}>28</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                </select>
                                </td>
                                <td>
                                <span>Qty</span>
                                <select className="form-select">
                                    <option selected>10</option>
                                    <option value={1}>20</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                </select>
                                </td>
                                <td className="price">₹3,789</td>
                            </tr>
                            <tr>
                                <td>
                                <span>Size</span>
                                <select className="form-select">
                                    <option selected>36</option>
                                    <option value={1}>28</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                </select>
                                </td>
                                <td>
                                <span>Qty</span>
                                <select className="form-select">
                                    <option selected>10</option>
                                    <option value={1}>20</option>
                                    <option value={2}>34</option>
                                    <option value={3}>40</option>
                                </select>
                                </td>
                                <td className="price">₹3,789</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                        <div className="text-center mb-4">
                        <button type="button" className="cartrow-btn">
                            <i className="fas fa-plus fa-fw" /> Add Another Size
                        </button>
                        </div>
                        <div className="subtotal d-md-flex justify-content-between">
                        <div className="subtotal-price">
                            <span className="textlight">Sub Total</span>
                            <h3>₹14,589.94</h3>
                        </div>
                        <div className="subtotal-btn">
                            <button type="button" className="btn">
                            Add To Cart
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CartPopup;