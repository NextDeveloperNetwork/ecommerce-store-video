
import Container from '@/components/ui/container';
import Billboard from '@/components/billboard';
import ProductCard from '@/components/ui/product-card';
import NoResults from '@/components/ui/no-results';
import SubNavbar from '@/components/subnavbar'
import getProducts from "@/actions/get-products";
import getSubategory from '@/actions/get-subcategory';
import getSizes from '@/actions/get-sizes';
import getColors from '@/actions/get-colors';

import Filter from './components/sub-filter';
import MobileFilters from './components/sub-mobile-filters';
import Back from '@/components/back';


export const revalidate = 0;

interface CategoryPageProps {
  params: {
    subcategoryId: string;
    categoryId: string;
  },
  searchParams: {
    colorId: string;
    sizeId: string;
  }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ 
  params, 
  searchParams
}) => {
  const products = await getProducts({ 
    subcategoryId: params.subcategoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes({subcategoryId: params.subcategoryId} );
  const colors = await getColors({subcategoryId: params.subcategoryId} );
  const subcategory = await getSubategory(params.subcategoryId);
  
  console.log(colors)
  console.log(sizes)
  
console.log("text",products)
  return (
    <div className="bg-gray-100">
    <Container >
      <SubNavbar  />
  
      <div className="flex items-center justify-between px-5 py-1">
        <Back />
        {/* <div className="flex-grow"></div>
          <MobileFilters sizes={sizes} colors={colors} /> */}
      </div>
      <Billboard
        data={subcategory.billboard}
        
      />
      <div className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.length === 0 && <NoResults />}
          {products.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </Container>
  </div>
  );
};

export default CategoryPage;
