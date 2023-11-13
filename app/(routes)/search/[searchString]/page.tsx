import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Container from "@/components/ui/container";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilters from "./components/mobile-filters";
import Back from "@/components/back";

export const revalidate = 0;

interface FilterPropsPage {
    params: {
        searchString: string;
    },
    searchParams: {
        colorId: string;
        sizeId: string;
    }
}

const FilterPage = async ({
    params, searchParams
}: FilterPropsPage) => {

    const products = await getProducts({
        searchValue: params.searchString,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    });

    const sizes = await getSizes();``
    const colors = await getColors();

    return ( 
        <div className="bg-white">
            <Container>
           
            <div className="flex items-center gap-x-3 px-5 py-2">
      <Back/>
      <div className="flex-grow "></div>
                <MobileFilters
                            sizes={sizes}
                            colors={colors}
                        />
                        </div>
                <div className="pt-2 px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                
                        
                        <div className="hidden lg:block">
                            <Filter
                                valueKey="sizeId"
                                name="Sizes"
                                data={sizes}
                            />
                             <Filter
                                valueKey="colorId"
                                name="Colors"
                                data={colors}
                            />
                        </div>
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            {products.length === 0 && <NoResults />}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {products.map((item) => (
                                    <ProductCard 
                                        key={item.id}
                                        data={item}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
     );
}
 
export default FilterPage;