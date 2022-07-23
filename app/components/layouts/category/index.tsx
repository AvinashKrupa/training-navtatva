import React, { useEffect } from "react";

interface iProps {
  onClick?: () => void;
  title: string;
  image: string;
  isLoading?: boolean;
}

function NavMenuCategory(props: iProps) {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="thumb position-relative text-center category-thumb">
      <a
        onClick={props.onClick}
        onMouseEnter={props.onClick}
        // onMouseLeave={props.onClick}
      >
        <img
          style={{ maxHeight: 204, height: 210 }}
          className="img-fluid"
          src={props.image}
          alt={props.title}
        />
        <p className="fs-20">{props.title}</p>
        <div className="overlay" />
      </a>
    </div>
  );
}

export default NavMenuCategory;
