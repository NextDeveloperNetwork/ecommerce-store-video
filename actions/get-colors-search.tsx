import { Size } from "@/types";

import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors/search`;

interface Query {
    searchValue?: string;
}

const getColorsSearch = async (query: Query) : Promise<Size[]> => {

    const url = qs.stringifyUrl({
        url: URL,
        query: {
            searchValue: query.searchValue,
        }
    });

    const res = await fetch(url);
    
    return res.json();
}

export default getColorsSearch;