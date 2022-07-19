import React, { Suspense, useEffect, useState } from "react";
import type { NextPage } from "next";
import ThemeOne from "../app/themes/themeOne";

const HomeScreen: NextPage = () => {

  const [theme, setTheme] = useState<string>("ThemeOne"); 
  
  useEffect( ()=> {
    //setTheme("ThemeTwo");
  },[]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {
          theme == "ThemeOne" && <ThemeOne/>
        }        
      </Suspense>
    </>
  );
};

export default HomeScreen;
