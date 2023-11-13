"use client";

import{useRouter} from "next/navigation"
import React from "react";
import { useState } from "react";

const SearchInput = ()=>{
    const[searchquery,setSearchQuery]=useState("");
  

const onSearch=(event:React.FormEvent)=>{
event.preventDefault();
const encodeSearchQuery=encodeURI(searchquery);



};

return(
    <form className="w-[380px]  relative px-2 py-2" onSubmit={onSearch}>
      <input
      value={searchquery}  
        type="text"
        onChange={(event) => setSearchQuery(event.target.value)}
        placeholder="Search..."
        className="w-full p-2  border-b border-zinc-600 rounded-full bg-gray-100"
      />
      
 
      

    </form>
);
};

export default SearchInput;