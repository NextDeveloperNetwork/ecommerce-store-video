import { Subsub } from "@/types";
import qs from "query-string";



const URL = `${process.env.NEXT_PUBLIC_API_URL}/subsub`;

interface Query {
  subcategoryId?: string;
}

const getSubsubs = async (query: Query): Promise<Subsub[]> => {
  
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      subcategoryId: query.subcategoryId,
    },
  });

  
    const res = await fetch(url);
    const subsubs = await res.json();
    
    return subsubs;

};

export default getSubsubs;
