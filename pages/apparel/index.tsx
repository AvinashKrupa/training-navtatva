import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Header from "../../app/themes/themeOne/components/Header";
import { apparelData } from "../../app/constants/sampleData";


const APPARELSCREEN: NextPage = () => {


  return (
    <div className=""  style={{backgroundColor:'#ffffff'}}>
      <div className="wrapper  ">
        {/* Header */}
        <Header />
        {/* End Header */}



      </div>
      <section className="tt text-center bannerChoose position-absolute">
            <div className="bannerContent bg-white border  w-75 m-auto" style={{borderRadius:25}}>
               <h2 className="fs-32 font-Bsoul m-4 ">Choose Your Apparel</h2>
               <ul>

               {apparelData.map((info:any) => {
                return (
                  <li className="list-inline-item image-background" style={{backgroundColor:'#d95c4e'}}>
                    <a href="/shop" tabIndex={0}>
                    {/* <img className="w-100" src={info.image} alt=""  style={{borderRadius:25}}/> */}

                           <p className="saree-info">{info.name}</p>
                           <div className="overlay"></div>
                     </a>
                </li>

                );
              })}

                 {/* <li className="list-inline-item">
                    <a href="#" tabIndex={0}>
                           <img className="w-100" src="images/apparel.jpg" alt=""  style={{borderRadius:25}}/>
                           <p className="fs-20">Sarees</p>
                           <div className="overlay"></div>
                     </a>
                </li>
                 <li className="list-inline-item">
                    <a href="#" tabIndex={0}>
                           <img className="w-100" src="images/apparel.jpg" alt="" style={{borderRadius:25}} />
                           <p className="fs-20">Sarees</p>
                           <div className="overlay"></div>
                     </a>
                </li>
                 <li className="list-inline-item">
                    <a href="#" tabIndex={0}>
                           <img className="w-100" src="images/apparel.jpg" alt="" style={{borderRadius:25}} />
                           <p className="fs-20">Sarees</p>
                           <div className="overlay"></div>
                     </a>
                </li>
                 <li className="list-inline-item">
                    <a href="#" tabIndex={0}>
                           <img className="w-100" src="images/apparel.jpg" alt="" style={{borderRadius:25}}/>
                           <p className="fs-20">Sarees</p>
                           <div className="overlay"></div>
                     </a>
                </li>
                 <li className="list-inline-item">
                    <a href="#" tabIndex={0}>
                           <img className="w-100" src="images/apparel.jpg" alt="" style={{borderRadius:25}}/>
                           <p className="fs-20">Sarees</p>
                           <div className="overlay"></div>
                     </a>
                </li>
                 <li className="list-inline-item">
                    <a href="#" tabIndex={0}>
                           <img className="w-100" src="images/apparel.jpg" alt="" style={{borderRadius:25}}/>
                           <p className="fs-20">Sarees</p>
                           <div className="overlay"></div>
                     </a>
                </li>
                 <li className="list-inline-item">
                    <a href="#" tabIndex={0}>
                           <img className="w-100" src="images/apparel.jpg" alt="" style={{borderRadius:25}} />
                           <p className="fs-20">Sarees</p>
                           <div className="overlay"></div>
                     </a>
                </li>
                 <li className="list-inline-item">
                    <a href="#" tabIndex={0}>
                           <img className="w-100" src="images/apparel.jpg" alt="" style={{borderRadius:25}}/>
                           <p className="fs-20">Sarees</p>
                           <div className="overlay"></div>
                     </a>
                </li>
                 <li className="list-inline-item">
                    <a href="#" tabIndex={0}>
                           <img className="w-100" src="images/apparel.jpg" alt="" style={{borderRadius:25}}/>
                           <p className="fs-20">Sarees</p>
                           <div className="overlay"></div>
                     </a>
                </li>
                 <li className="list-inline-item">
                    <a href="#" tabIndex={0}>
                           <img className="w-100" src="images/apparel.jpg" alt="" style={{borderRadius:25}}/>
                           <p className="fs-20">Sarees</p>
                           <div className="overlay"></div>
                     </a>
                </li>
                 <li className="list-inline-item">
                    <a href="#" tabIndex={0}>
                           <img className="w-100" src="images/apparel.jpg" alt="" style={{borderRadius:25}}/>
                           <p className="fs-20">Sarees</p>
                           <div className="overlay"></div>
                     </a>
                </li>
                 <li className="list-inline-item">
                    <a href="#" tabIndex={0}>
                           <img className="w-100" src="images/apparel.jpg" alt="" style={{borderRadius:25}}/>
                           <p className="fs-20">Sarees</p>
                           <div className="overlay"></div>
                     </a>
                </li>
                 <li className="list-inline-item">
                    <a href="#" tabIndex={0}>
                           <img className="w-100" src="images/apparel.jpg" alt="" style={{borderRadius:25}} />
                           <p className="fs-20">Sarees</p>
                           <div className="overlay"></div>
                     </a>
                </li>
                 <li className="list-inline-item">
                    <a href="#" tabIndex={0}>
                           <img className="w-100" src="images/apparel.jpg" alt="" style={{borderRadius:25}}/>
                           <p className="fs-20">Sarees</p>
                           <div className="overlay"></div>
                     </a>
                </li> */}
               </ul>
            </div>
        </section>



    </div>
  );
};

export default APPARELSCREEN;
