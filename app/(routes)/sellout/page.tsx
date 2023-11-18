import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

import Link from "next/link";
import Back from "@/components/back";
Back



export const revalidate = 0;

const SelloutPage = async () => {
  const products = await getProducts({ isUndercost: true });
  

  return (
    <Container>
      <div className="space-y-1 pb-1">
      <Back/>
 

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Shitje nen kosto-Sellout" items={products} />
        </div>
      </div>
    </Container>
  )
  
};

export default SelloutPage;