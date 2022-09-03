const OrderItem = (props: any) => {


    function getSize() {
        let data = props.meta?.variant.filter((info: any) => {
            return info.name == "Size";
        });
        if (data && data.length > 0) return data[0].options?.name;
    }

    function getColor() {

        let data = props.meta?.variant.filter((info: any) => {
            return info.name == "Color";
        });
        if (data && data.length > 0) return data[0].options?.name;
    }

    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    function getDate(data: any) {
        let newDate = new Date(data)
        newDate.setDate(newDate.getDate() + 3);

        return newDate.getDate() + " " + months[newDate.getMonth()] + " " + newDate.getFullYear()
    }
    return (<>
        <div className="bgbar position-relative mt-4 ms-0">
            <div className="row mb-3">
                <div className="col-md-12 col-lg-9">
                    <div className="row mt-3">
                        <div className="col-md-4 col-lg-3">
                            <div className="imgbar"><img className="w-100" src={props.attributes.mainImage} alt="" /></div>
                        </div>
                        <div className="col-md-8 col-lg-8 position-relative">
                            <h3 className="fs-16 font-sb text-color-2">{props.name}</h3>
                            <p className="fs-14 font-r text-color-1 pt-1 prodes">{props.attributes.description}</p>
                            <div className="d-flex pt-3 pb-2">
                                <p className="fs-14 font-sb text-color-1">Size: <span className="text-color-2">{getSize()}</span></p>
                                <p className="fs-14 font-sb text-color-1 ms-4">Colour: <span className="text-color-2">{getColor()}</span></p>
                                <p className="fs-14 font-sb text-color-1 ms-4">QTY: <span className="text-color-2">{props.quantity}</span></p>
                            </div>
                            {/* <div className="d-flex">
                                                    <p className="fs-14 font-sb text-color-1">Size: <span className="text-color-2">XL</span></p>
                                                    <p className="fs-14 font-sb text-color-1 ms-4">Colour: <span className="text-color-2">Blue</span></p>
                                                    <p className="fs-14 font-sb text-color-1 ms-4">QTY: <span className="text-color-2">2</span></p>
                                                </div> */}
                        </div>
                        <div className="col-md-12 col-lg-10 col-xl-6 mt-3">
                            <a href="#" className="btn-gray d-inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-arrow-up-right me-2" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
                                </svg>
                                Arriving {getDate(props.meta.timestamps.created_at)}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-3 offet-1">
                    <a href="#" className="btn-new btn-bor d-block mb-2 mt-2 mt-xl-0" >
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16" style={{ marginRight: 5 }}>
                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        Track Package
                    </a>
                    <a href="#" className="btn-new  btn-bor d-block mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" style={{ marginRight: 5 }}>
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                        Cancel Order
                    </a>
                    <a href="#" className="btn-new btn-bor d-block mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16" style={{ marginRight: 5 }}>
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                        </svg>
                        Leave Feedback
                    </a>
                    <a href="#" className="btn-new btn-bor d-block text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-file-text" viewBox="0 0 16 16" style={{ marginRight: 5 }}>
                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                        </svg>
                        Invoice
                    </a>
                </div>
            </div>
        </div>
    </>)
}

export default OrderItem;