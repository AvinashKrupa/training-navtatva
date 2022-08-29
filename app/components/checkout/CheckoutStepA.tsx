import React, { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Auth } from "../../../network/gateway/Auth";

const CheckoutStepA = (props: any) => {
  const [customerData, setCustomerData] = useState<any>();

  useEffect(() => {
    if (props.isLogin) {
      getCustomerData();
    } else {
      props.setLoginPopup(true);
    }
  }, [props.isLogin]);

  function getCustomerData() {
    Auth.getInstance()
      .getCustomerData()
      .then((data: any) => {
        //console.log("this is  customer data",data)
        setCustomerData(data?.data);
      });
  }

  function updateAddress() {
    //setOpenTab(openTab == 2 ? 0 : 2)
  }
  return (
    <div
      className="accordion-item bgbar ms-0"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 className="accordion-header">
        <button
          className="accordion-button font-sb collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <span className="wordtype">A</span>
        </button>
      </h2>
      <div>
        <p className="fs-12 font-sb">
          LOGIN
          <span>
            <AiOutlineCheck style={{ fontSize: 20, color: "#1bf56e" }} />
          </span>
        </p>
        <h1 className="fs-22  font-sb">
          {customerData?.data?.userDetails.name}
        </h1>
      </div>
      <h1 className="fs-22  font-sb mr-5">
        +91
        {" " + customerData?.data?.businessDetails?.whatsapp_number}
      </h1>
      <div></div>

      <div style={{ alignItems: "flex-end" }}>
        <button className="btn fs-14" type="button" onClick={updateAddress}>
          {/* Save &amp; Deliver Here */} Change
        </button>
      </div>
    </div>
  );
};

export default CheckoutStepA;
