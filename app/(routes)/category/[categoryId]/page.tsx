
import Container from '@/components/ui/container';
import Billboard from '@/components/billboard';
import ProductCard from '@/components/ui/product-card';
import NoResults from '@/components/ui/no-results';
import getProducts from "@/actions/get-products";
import getCategory from '@/actions/get-category';
import Filter from './components/filter';
import getSubcategories from '@/actions/get-subcategories';
import MobileFilters from '../../category/[categoryId]/components/mobile-filters';
import MobileFiltersC from "@/components/category-filter-sub";
import Back from '@/components/back';
import SubNavbar from '@/components/subnavbar'
import Icon from '@/components/icon';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  },
  searchParams: {
    subcategoryId:string;
  }
}
const CategoryPage: React.FC<CategoryPageProps> = async ({ 
  params, 
  searchParams
}) => {
  const products = await getProducts({ 
    categoryId: params.categoryId,
    subcategoryId: searchParams.subcategoryId,
  });
  const subcategories = await getSubcategories({ categoryId: params.categoryId });
  const filteredSubcategories = subcategories.filter(subcategory => subcategory.categoryId === params.categoryId);
  const category = await getCategory(params.categoryId);
  return (
    <div className="bg-gray-100 min-h-screen">
    

    <div className="grid grid-cols-1 lg:grid-cols-7">
      {/* Menu (Filter) */}
      <div className="hidden lg:block lg:col-span-1 lg:w-1/7 bg-white shadow-md p-4 ">
        
        <Filter
          valueKey="subcategoryId"
          name="Nenkategori"
          data={filteredSubcategories}
        />
        <div className="mt-auto py-24">


<div className="text-center flex-auto items-center md:text-center flex flex-col">
<h4 className="text-xl font-semibold text-black-500">Socials</h4> {/* Red color */}

<div className="flex items-center">
<a href="https://www.facebook.com/profile.php?id=61553134485424" target="_blank" rel="noopener noreferrer">
<div className="flex items-center"> {/* Added this container */}
<FaFacebook className="text-blue-500 hover:text-blue-600 hover:animate-spin" />
<span>-facebook: EdiStore</span>
</div>
</a>
</div>

<div className="flex items-center">
<a href="https://www.instagram.com/edistoreal" target="_blank" rel="noopener noreferrer">
<div className="flex items-center"> {/* Added this container */}
<FaInstagram className="text-blue-500 hover:text-blue-600 hover:animate-spin" /> 
<span>-Instagram: EdiStoreAl</span>
</div>
</a>
</div> {/* Blue color with hover effect */}

<div className="flex items-center">
<a href="https://www.tiktok.com/@edistoreal" target="_blank" rel="noopener noreferrer">
<div className="flex items-center"> {/* Added this container */}
<FaTiktok className="text-blue-500 hover:text-blue-600 hover:animate-spin" />
<span>-tik tok: edistoreal</span>
</div>
</a>
</div> {/* Blue color with hover effect */}
</div>

          <div className="text-center text-xs py-4">
            &copy; 2023 Store, Inc. All rights reserved.
          </div>

</div>
      </div>
  
      {/* Main Content */}
      <div className="col-span-1 lg:col-span-5">
        <Container>
          <SubNavbar />
  
          <div className="flex items-center gap-x-3 px-5 py-1 lg:hidden">
  <Back />
  <div className="flex-grow"></div>
  <MobileFilters subcategories={filteredSubcategories} />
</div>
          <Billboard data={category.billboard} />
         
          <div className="px-4 sm:px-6 lg:px-8 pb-24">
            <div className="font-bold text-2xl px-2 py-2">
              <h1>Produkte</h1>
            </div>
            {products.length === 0 && <NoResults />}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {products.map((item) => (
                <ProductCard key={item.id} data={item} />
              ))}
            </div>
          </div>
        
        </Container>
      </div>
      {/* Right Menu (Filter) */}
  <div className="hidden lg:block lg:col-span-1 lg:w-1/7 bg-white shadow-md p-4 ">
   
  </div>
    </div>
  </div>
  );
};

export default CategoryPage;
