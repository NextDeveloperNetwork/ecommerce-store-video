import getProducts from "@/actions/get-products";
import getCategories from "@/actions/get-categories";
import ProductList from "@/components/product-list";

import Container from "@/components/ui/container";
import SubNavbar from "@/components/subnavbar";

import BrandSelect from "@/components/ui/brand-slider";
import Carousel from "@/components/carosel";
import MainNavSide from "@/components/main-nav-side";
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import AdBanner from "@/components/adbanner";
export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const categories = await getCategories();

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4"> {/* Adjusted number of columns and added gap */}
        {/* MainNavSide on the left */}
        <div className="hidden lg:block lg:col-span-2 bg-white shadow-md p-4 rounded-lg"> {/* Adjusted width and added rounded corners */}
          <MainNavSide data={categories} />
      
          <div className="mt-auto py-24 ">

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
<span>--tik tok: edistoreal</span>
</div>
</a>
</div> {/* Blue color with hover effect */}
</div>

          <div className="text-center text-xs py-4">
            &copy; 2023 Store, Inc. All rights reserved.
          </div>

</div>
        </div>
        <div className="col-span-1 lg:col-span-8">
          <Container>
            <SubNavbar />
            <div className="space-y-1 pb-1">
             
              <Carousel />
            </div>
            <div className="py-2">
              <BrandSelect />
            </div>
            <div className="flex flex-col gap-y-8"> {/* Removed px values to allow natural spacing */}
              <ProductList title="Produkte" items={products} />
            </div>
          </Container>
        </div>
        {/* MainNavSide on the right */}
        <div className="hidden lg:block lg:col-span-2 bg-white shadow-md p-4 rounded-lg">
 
  <div className="bg-gradient-to-r from-white to-blue-200 border-emerald-800 rounded-lg p-4">
    <h2 className="text-black text-lg font-bold mb-2">Advertisement</h2>
    <AdBanner
      dataAdFormat="auto"
      dataFullWidthResponsive={true}
      dataAdSlot="5992574929"
    />
  </div>
  
</div>
      </div>
    </div>
  );
};

export default HomePage;
