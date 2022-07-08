import React from "react";

const SortByBlock = () => {
    return (
        <>
            <div className="sorting mt-4 mb-5">
                <span className="textlight">Sort</span>
                <button type="button" className="btn-sorting active">
                    Relevance
                </button>
                <button type="button" className="btn-sorting">
                    Popular
                </button>
                <button type="button" className="btn-sorting">
                    All New
                </button>
                <button type="button" className="btn-sorting">
                    Price <i className="fas fa-angle-down fa-fw" />
                </button>
                <button type="button" className="btn-sorting">
                    Min Order Qty <i className="fas fa-angle-down fa-fw" />
                </button>
            </div>
        </>
    )
}

export default SortByBlock;