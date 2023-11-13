"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {useDebounce} from "use-debounce"

const SE=()=>{
   const router=useRouter()
    const[text,setText]=useState('')
    const[query]=useDebounce(text,500)

    useEffect(()=>{ 
        
        if (query !== undefined && query !== '') {
            router.push(`/search?search=${query}`);
          }
    },[query,router])
    return(
<div className="relative rounded-md shadow-sm px-2">
    <div className="pointer-event-none absolute inset-y-0 left-0 flex items-center px-3">
<AiOutlineSearch
className="h-5 w-5 text-gray-400"
aria-hidden='true'
/>
    </div>
    <input
    value={text}
    placeholder="Search Products..."
    onChange={e=>setText(e.target.value)}
    className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900"
    />
</div>
    );
}

export default SE;