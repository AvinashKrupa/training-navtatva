import React from "react";

const Paging = () => {
    return (
        <nav>
            <ul className="pagination justify-content-center mt-5">
            <li className="page-item">
                <a className="prev" href="#">
                Previous
                </a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">
                1
                </a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">
                2
                </a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">
                3
                </a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">
                4
                </a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">
                ...
                </a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#">
                26
                </a>
            </li>
            <li className="page-item">
                <a className="next" href="#">
                Next
                </a>
            </li>
            </ul>
        </nav>
    )
}

export default Paging;