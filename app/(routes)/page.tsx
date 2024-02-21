import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import SubNavbar from "@/components/subnavbar";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import MyCarousel from "@/components/carosel";
import SliderPage from "@/components/ui/slider";
import BrandSelect from "@/components/ui/brand-slider";
import Carousel from "@/components/carosel";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("5cac23fe-625f-4154-aa98-5c5b58804320");
  const { userId } = await auth();



  if (!userId) {
    console.log("NOT LOGGED IN");
  } else {
    console.log("YOU ARE LOGGED IN WITH THE ID " + userId);
  }

  return (
    <Container>
      <SubNavbar />
      <div className="space-y-1 pb-1 ">
        {/* <Billboard data={billboard} /> */}
        <div>
        <Carousel/>
        </div>
      
        <div className="px-5 grid grid-cols-2 gap-2 lg:gap-6">
  {/* <Link
    href="/sellout"
    className="block p-2 border border-gray-200 rounded-md hover:shadow-lg transition-transform transform hover:scale-105 h-full"
    style={{
      backgroundImage: 'url("/images/action/A11.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Okazion Nen Kosto
    </h5>
  </Link>

  <Link
    href="/oferta"
    className="block p-2 border border-gray-200 rounded-md hover:shadow-lg transition-transform transform hover:scale-105 h-full"
    style={{
      backgroundImage: 'url("/images/action/A12.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Oferta Combo
    </h5>
  </Link> */}
</div>



      </div>
      <div className="py-2">
          <BrandSelect />
        </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 ">
        <ProductList title="Produkte" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
