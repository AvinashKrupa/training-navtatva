import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import OrderTakingAppTitle from "../../app/components/common/OrderTakingAppTitle";
import { withRouter } from "next/router";
import { OrderTakingAppService } from "../../app/network/gateway/OrderTakingAppService";

const OrderTakingAppSuccessScreen: NextPage = (props: any) => {

    const [authStatus, setAuthStatus] = useState<string>("");

    useEffect( () => {
        setAuthStatus(props.router.query?.status) 
        return () => {};
    },[])

    useEffect( () => {
        //if(authStatus == "AUTH_APPROVED"){
            //updateOrder();
        //}             
        return () => {};
    },[authStatus])

    const updateOrder = async () => {

        const requestJSON = {
            "orderStatus": authStatus == "AUTH_APPROVED" ? "placed": "canceled",
            "paymentStatus": authStatus == "AUTH_APPROVED" ? authStatus: "pending",
            "rupifiResponse": props.router.query
        }
        
        OrderTakingAppService.getInstance("")
            .updateOrder(requestJSON, props.router.query?.merchantPaymentRefId)
            .then((response: any) => {
                if (response?.status == 200) {
                    // do something
                } else {
                    console.log("ERROR:", response?.data);
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <>
            <div className="shoppingCart orderTakingApp">
                <div className="wrapper">
                    <section className="cartItem mt-4 mt-md-5">
                        <div className="row">
                            <OrderTakingAppTitle/>
                        </div>
                    </section>
                    <section>
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <br/>
                                <br/>
                                <h2 className="fs-32 font-b text-color-2 list-inline-item" style={{color: "Green"}}>Order placed</h2>
                                <br/>
                                <br/>
                                <p>
                                    Click <a href="/order-taking-app" style={{color: "Blue"}}>here</a> to create new order.
                                </p>
                            </div>
                        </div>                      

                    </section>
                </div>
            </div>
        </>
    )
};

export default withRouter(OrderTakingAppSuccessScreen);