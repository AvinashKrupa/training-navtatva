import React, {useState} from "react";

const CategoryBox = (props: any) => {

    const [active,setActive] = useState<boolean>(false);

    return (
        <div className="category-box">
          <h5 className="category-box-title">{props.title} 
            <button type="button" className="float-end categoty-btn" onClick={ ()=> setActive(!active)}>
                <i className="fas fa-angle-down fa-fw"></i>
            </button>
          </h5>
          <div className={"category-area" + (active ? " active": "") + (props?.name == "color" ? " category-color": "")}>
            {
              props?.data?.map( (item: any, index: number) => {
                return (
                  <label key={index} className="radio-container">{item.name}
                    {
                      item?.color_code && (
                        <b className="color-radio" style={{background: item.color_code}}></b>
                      )
                    }
                    <input type="radio" name={props.name} />
                    <span className="radio-checkmark"></span>
                  </label>
                )
              })
            }
            {
              props?.name == "price" && (
                <>
                  <div className="slider-box mb-4">
                      <input type="text" id="priceRange" readOnly={true}/>
                      <div id="price-range" className="slider"></div>
                  </div>
                  <button type="button" className="btn btn-sm w-100">Set Price</button>
                </>
              )
            }
          </div>
        </div>
    )
}

export default CategoryBox;