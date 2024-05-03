import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";

import getProducts from "@/actions/get-products";
import getSubcategory from "@/actions/get-subcategory";
import getSizes from "@/actions/get-sizes";
import getColors from "@/actions/get-colors";

import Filter from "./components/sub-filter";
import MobileFilters from "./components/sub-mobile-filters";
import Back from "@/components/back";
import getSubsubs from "@/actions/get-subsubs";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import FilterSS from "./components/ss-filter";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
    subcategoryId: string;
  };
  searchParams: {
    productcolorId: string;
    productsizeId: string;
    subsubId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    subcategoryId: params.subcategoryId,
    subsubId: searchParams.subsubId,
  });
  const sizes = await getSizes({subcategoryId: params.subcategoryId} );
  const colors = await getColors({subcategoryId: params.subcategoryId} );
  //const subcategory = await getSubategory(params.subcategoryId);
  //const subsub= await getSubsub(searchParams.subsubId)

  const subsub = await getSubsubs({ subcategoryId: params.subcategoryId });
  const filteredSubsub = subsub.filter(
    (subsub) => subsub.subcategoryId === params.subcategoryId
  );
  const subcategory = await getSubcategory(params.subcategoryId);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-7">
        {/* Menu (Filter) */}
        <div className="hidden lg:block lg:col-span-1 lg:w-1/7 bg-white shadow-md p-4 ">
          <FilterSS
            valueKey="subsubId"
            name="Nenkategori"
            data={filteredSubsub}
          />
          <div className="mt-auto py-24">
            <div className="text-center flex-auto items-center md:text-center flex flex-col">
              <h4 className="text-xl font-semibold text-black-500">Socials</h4>{" "}
              {/* Red color */}
              <div className="flex items-center">
                <a
                  href="https://www.facebook.com/profile.php?id=61553134485424"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center">
                    {" "}
                    {/* Added this container */}
                    <FaFacebook className="text-blue-500 hover:text-blue-600 hover:animate-spin" />
                    <span>-facebook: EdiStore</span>
                  </div>
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="https://www.instagram.com/edistoreal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center">
                    {" "}
                    {/* Added this container */}
                    <FaInstagram className="text-blue-500 hover:text-blue-600 hover:animate-spin" />
                    <span>-Instagram: EdiStoreAl</span>
                  </div>
                </a>
              </div>{" "}
              {/* Blue color with hover effect */}
              <div className="flex items-center">
                <a
                  href="https://www.tiktok.com/@edistoreal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center">
                    {" "}
                    {/* Added this container */}
                    <FaTiktok className="text-blue-500 hover:text-blue-600 hover:animate-spin" />
                    <span>-tik tok: edistoreal</span>
                  </div>
                </a>
              </div>{" "}
              {/* Blue color with hover effect */}
            </div>

            <div className="text-center text-xs py-4">
              &copy; 2023 Store, Inc. All rights reserved.
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-5">
          <Container>
           

            <div className="flex items-center justify-between px-5 py-1">
              <Back />
              <div className="flex-grow"></div>
            </div>
            <Billboard data={subcategory.billboard} />
            <div className="px-4 sm:px-6 lg:px-8 pb-24">
              {/* <Filter valueKey="subcategoryId" name="Permasa" data={sizes} />
          <Filter valueKey="subcategoryId" name="Ngjyra" data={colors} /> */}

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {products.length === 0 && <NoResults />}
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </Container>
        </div>
        <div className="hidden lg:block lg:col-span-1 lg:w-1/7 bg-white shadow-md p-4 ">


        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
