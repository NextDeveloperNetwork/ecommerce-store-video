"use client";

import { FiChevronLeft } from "react-icons/fi";
import Button from "./ui/Button";

const handleGoBack = () => {
    window.history.back();
  };

const Back=()=>{
    return(
        <div className="px-0 py-0">
<Button className="bg-gray-300" onClick={handleGoBack}>
{<FiChevronLeft  
    size={15}
    color="black"
     /> } 
         
        </Button>
        </div>

    );
}

export default Back;