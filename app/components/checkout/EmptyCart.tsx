import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const EmptyCart = (props: any) => {
    return (
        <>
            {props.loading && props.cartItems?.length == 0 ? (
                <div style={{ marginLeft: 430, marginTop: 100 }}>
                    <div className="text-center">
                        <h1 className="fs-30 font-b text-color-2 list-inline-item">
                            Your cart is empty!
                        </h1>
                        <p className="fs-15 mt-2 text-color-2">
                            Add items to it now.
                        </p>
                        <div style={{ marginBottom: 400 }}>
                            <a href="/shop" className="btn mt-3">
                                Shop Now!
                            </a>
                        </div>
                    </div>
                </div>
            ) : <div style={{ marginLeft: 430, marginTop: 100 }}>
                <div className="text-center">
                    <div style={{ marginBottom: 400 }}>
                        {!props.loading && <ClipLoader loading={!props.loading} size={100} />}

                    </div>
                </div>
            </div>}
        </>
    )
}

export default EmptyCart;