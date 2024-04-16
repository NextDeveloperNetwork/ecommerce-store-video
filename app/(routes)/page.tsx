import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import getCategories from "@/actions/get-categories";
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
import MainNavSide from "@/components/main-nav-side";
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("5cac23fe-625f-4154-aa98-5c5b58804320");
  const { userId } = await auth();

  const categories = await getCategories();

  if (!userId) {
    console.log("NOT LOGGED IN");
  } else {
    console.log("YOU ARE LOGGED IN WITH THE ID " + userId);
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-7">
        <div className="hidden  lg:block lg:col-span-1 lg:w-1/7 bg-white shadow-md p-4 ">
          <MainNavSide data={categories} />
        </div>
        <div className="col-span-1 lg:col-span-5">
          <Container>
            <SubNavbar />
            <div className="space-y-1 pb-1 ">
              {/* <Billboard data={billboard} /> */}
              <div>
               
                  <Carousel />
              
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
