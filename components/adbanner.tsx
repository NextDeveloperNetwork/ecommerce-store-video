"use client"

import React, { useEffect } from "react";

type AdBannerTypes={
    dataAdSlot:string,
    dataAdFormat:string,
    dataFullWidthResponsive:boolean,
}
const AdBanner = ({
    dataAdSlot,
dataAdFormat,
dataFullWidthResponsive
}:AdBannerTypes) => {
    useEffect( ()=>{
        try {
            ((window as any).adsbygoogle= (window as any).adsbygoogle || []).push({});  // eslint-disable

        } catch (error) {
            console.log(error);
        }

    },[])



    return ( 

<ins
 className="adsbygoogle"
style={{display:'block'}}
data-ad-client="ca-pub-12345678"
data-ad-slot= {dataAdSlot}
data-ad-format= {dataAdFormat}
data-full-width-responsive= {dataFullWidthResponsive.toString()}
>

</ins>
    );
}
 
export default AdBanner; 