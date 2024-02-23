
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
    </div>
  </div>
  );
};

export default CategoryPage;
