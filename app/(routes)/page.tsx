import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import NavbarSearch from "@/components/search-bar/navbar-search";
import Link from "next/link";





export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("35ff2e70-65d1-4eed-9d65-5694ddd6c08a");

  return (
    <Container>
      <div className="md:hidden lg:hidden flex justify-center py-2">
  <NavbarSearch />
</div>
      <div className="space-y-1 pb-1">
     
      <Billboard 
          data={billboard}
        />
        
        <div className="px-6 grid grid-cols-2 gap-8">
  <Link
    href="/sellout"
    className="block max-w-xlg p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700"
    style={{ backgroundImage: 'url("/images/action/A11.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sellout -  Nen Kosto</h5>
  </Link>

  <Link
    href="/oferta"
    className="block max-w-xlg p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700"
    style={{ backgroundImage: 'url("/images/action/A12.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Produktet ne Oferte</h5>
  </Link>
</div>
</div>

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Produkte" items={products} />
        </div>
     
    </Container>
  )
  
};

export default HomePage;