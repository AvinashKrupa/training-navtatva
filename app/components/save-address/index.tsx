import React, { useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { Address } from "../../../network/gateway/Address";
import useUserStore from "../../../zustand/store";

const SaveAdress = () => {

    const [allAddress, setAllAddress] = useState<any>([]);
    const isLogin = useUserStore((state: any) => state.isLogin, shallow);
    const setLoginPopup = useUserStore((state: any) => state.showLogin);


    useEffect(() => {
        if (isLogin) {
            getAllAddress();
        } else {
            setLoginPopup(true);
        }
    }, [isLogin]);

    function getAllAddress() {
        Address.getInstance()
            .getAllAddress()
            .then((data: any) => {
                setAllAddress(data?.data.data);
            })
            .catch((error) => {

            });
    }


    function deleteAddress(id: any, index: any) {
        Address.getInstance()
            .deleteAddress(id)
            .then((response: any) => {
                if (response.statusText === "OK") {
                    let newAllAddress = allAddress;
                    newAllAddress.splice(index, 1);
                    setAllAddress([...newAllAddress]);
                    //   if (newAllAddress.length === 0) {
                    //     setShowAddress(false);
                    //   }
                }
            });
    }
    return (<div className="col-12 col-lg-8 col-xl-9 ">
        <div className="rightside-bar-area ">
            <button type="button" className="add-address-btn btn fs-13 btn-sm">
                <i className="fas fa-plus me-1" />
                <span>Add Address</span>
            </button>
            {allAddress.map((item: any, index: number) => {
                return (<>
                    <div className="address-box-area">
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <div className="address-box-content">
                                    <h5 className="location-name text-primary mb-2">{item.first_name}</h5>
                                    <p>{item.line_1} <br />{item.line_2} <br />{item.city}<br />{item.country}</p>
                                    <div className="address-button-area mt-4">
                                        <button type="button" className="address-btn">EDIT</button>
                                        <button type="button" className="address-btn">SHARE</button>
                                        <button type="button" className="address-btn" onClick={() => {
                                            deleteAddress(item.id, index)
                                        }}>DELETE</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="map-area">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030850.3776743794!2d132.52611295403742!3d-24.76215616266133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2sin!4v1661429956943!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                            </div>
                        </div>
                    </div>
                </>)
            })
            }
        </div>
    </div >)
}

export default SaveAdress;