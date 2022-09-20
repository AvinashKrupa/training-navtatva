import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { TypeSenseService } from "../../../network/gateway/TypeSenseService";
import SearchPopupItem from "./SearchPopupItem";

const SearchPopup = (props: any) => {

    const [q, setQ] = useState<any>("");
    const [categories, setCategories] = useState<any>([]);
    const [materials, setMaterials] = useState<any>([]);
    const [occasions, setOccasions] = useState<any>([]);
    const [works, setWorks] = useState<any>([]);

    useEffect(() => {
        getFacetAttributes();
        return () => { };
    }, [])

    function getFacetAttributes() {
        TypeSenseService.getInstance()
            .getFacetAttributes("search")
            .then((response: any) => {
                if (response.data) {
                    let filtersList = response?.data?.data;
                    //console.log("filtersList",filtersList)
                    filtersList.map((item: any) => {
                        setFiltersData(item)
                    })
                } else {
                    console.log("ERROR:", response.data);
                }
            })
            .catch((error) => { });
    }

    function setFiltersData({ display_name, attribute_name, possible_values }: any) {

        switch (attribute_name) {
            case "category":
                setCategories({
                    title: display_name,
                    name: attribute_name,
                    data: getFormatedData(possible_values, attribute_name)
                })
                break;
            case "material":
                setMaterials({
                    title: display_name,
                    name: attribute_name,
                    data: getFormatedData(possible_values, attribute_name)
                })
                break;

            case "print":
                setWorks({
                    title: display_name,
                    name: attribute_name,
                    data: getFormatedData(possible_values, attribute_name)
                })
                break;
            case "occasion":
                setOccasions({
                    title: display_name,
                    name: attribute_name,
                    data: getFormatedData(possible_values, attribute_name)
                })
                break;
            default:
                break;
        }
    }

    function getFormatedData(data: any, attribute_name: string) {
        let newObje: any = [];
        data?.map((item: any, index: number) => {
            newObje.push({
                id: index,
                name: item.name,
                background_image: item.background_image,
                isSelected: false
            })
        })
        return newObje;
    }

    const setSearchOption = (type: string, value: string) => {
       if(type=="q"){
        setQ(value)
       }else{
        // do something
       }
    }

    return (
        <Modal
            show={props.openSearchBox}
            animation={true}
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
                        onClick={() => {
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
                                    onChange={ (e) => setSearchOption("q", e.target.value)}
                                    value={q}
                                />
                            </div>
                            <div className="searchbar-popup-contnet">
                                <SearchPopupItem {...categories} setSearchOption={setSearchOption} />
                                <SearchPopupItem {...materials} setSearchOption={setSearchOption} />
                                <SearchPopupItem {...works} setSearchOption={setSearchOption} />
                                <SearchPopupItem {...occasions} setSearchOption={setSearchOption} />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Dialog>
        </Modal>
    )
}

export default SearchPopup;