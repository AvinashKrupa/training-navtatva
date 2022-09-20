import React, { useState } from 'react'

const SearchPopupItem = (props: any) => {

    const [categoryIcons,] = useState<any>({
        "men": {
            "class": "malebox",
            "icon": "mars",
        },
        "women": {
            "class": "femalebox",
            "icon": "venus",
        },
        "other": {
            "class": "otherbox",
            "icon": "transgender",
        },
    })
    return (
        <>
            <p className="textlight">{props?.title}</p>
            {
                props?.name == "category" && (
                    <ul className="list-inline mb-4">
                        {
                            props?.data?.length > 0 && props?.data?.map((item: any, index: number) => {
                                return (
                                    <li key={index} className="list-inline-item">
                                        <div className={"gender-box " + categoryIcons[item.name].class}
                                            onClick={() => props.setSearchOption(props?.name, item?.name)}
                                        >
                                            <i className={"fas fa-" + categoryIcons[item.name].icon + " fa-fw"}/>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }

            {
                props?.name != "category" && (
                    <ul className="list-inline mb-4">
                        {
                            props?.data?.map((item: any, index: number) => {
                                return (
                                    <li key={index} className="list-inline-item">
                                        <a onClick={() => props.setSearchOption(props?.name, item?.name)}>
                                            <div
                                                className="meterial-box"
                                                style={{
                                                    backgroundImage: item.background_image? `url(${item.background_image})` : "url(/images/month-bg2.jpg)" ,
                                                }}                                                
                                            >
                                                <span>{item.name}</span>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
            }

        </>
    )
}

export default SearchPopupItem;