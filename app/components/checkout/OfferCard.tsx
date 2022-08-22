import React from "react";

const OfferCard = () => {
    return (
        <div className="w-100 mt-4">
            <a href="#">
                {" "}
                <img className="w-100" src="images/discountAd.png" alt="" />
            </a>{" "}
            <a
                href="button"
                className="font-sb text-color-3 fs-16 justify-content-end align-items-end d-flex ms-auto mt-3 me-2"
            >
                Multiple offers waiting for you after checkout
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    fill="currentColor"
                    className="bi bi-arrow-up-right ms-2"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"
                    />
                </svg>
            </a>{" "}
        </div>
    )
}

export default OfferCard;