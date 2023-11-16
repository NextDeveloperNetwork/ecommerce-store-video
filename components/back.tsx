"use client";

import { FiChevronLeft } from "react-icons/fi";
import Button from "./ui/Button";

const handleGoBack = () => {
    window.history.back();
  };

const Back=()=>{
    return(
        <div className="px-0 py-2">
<Button  onClick={handleGoBack}>
{<FiChevronLeft  
    size={15}
    color="white"
     /> } 
         
        </Button>
        </div>

    );
}

export default Back;