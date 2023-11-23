"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"
import * as z from "zod";


const formSchema = z.object({
  search: z.string().min(1).max(50),
})

const NavbarSearch = () => {

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            search: "",
        },
    });
    
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        router.push(`/search/${values.search}`);
    };

    return (
      <form onSubmit={form.handleSubmit(onSubmit)} className="relative px-1">
        <label htmlFor="default-search" className="sr-only">
          Search
        </label>
        <div className="flex items-center">
          <input
            type="search"
            id="default-search"
            className="w-full  sm:w-72 p-2 pl-14 text-base text-gray-600 border bg-gray-100 rounded-full focus:ring-1 focus:ring-gray-200 focus:border-gray-400 outline-none"
            placeholder="Search..."
            {...form.register('search')}
          />
          <button
            type="submit"
            className="absolute left-4  p-1.5 bg-grey-300 hover:bg-blue-200 focus:outline-none rounded-full border "
          >
            <svg
              className="w-5 h-5 text-black"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
        </div>
      </form>
    );
    
    
      
      
      
      
      
      
}
 
export default NavbarSearch;
