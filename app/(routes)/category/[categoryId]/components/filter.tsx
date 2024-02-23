"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {  Subcategory } from "@/types";

interface FilterProps {
  data: Subcategory[];
  name: string;
  valueKey: string;
};

const Filter: React.FC<FilterProps> = ({
  data,
  name,
  valueKey,
  
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);
  
  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipNull: true });

    router.push(url);
  }

  return ( 
<div className="mb-8">
  <h3 className="text-lg font-semibold">
    {name}
  </h3>
  <hr className="my-4" />
  <div className="flex flex-col items-center">
    {data.map((filter) => (
      <div key={filter.id} className="flex items-center mb-2">
        <Button
          className={cn(
            'rounded-md text-sm text-gray-800 p-2 border border-gray-300 transition duration-300 ease-in-out w-48',
            selectedValue === filter.id ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md' : 'bg-white'
          )}
          onClick={() => onClick(filter.id)}
        >
          {filter.name}
        </Button>
      </div>
    ))}
  </div>
</div>

  );
};

export default Filter;
