import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Back from "@/components/back";
import ProductList from "@/components/product-list";

import Container from "@/components/ui/container";




export const revalidate = 0;

const OfertaPage = async () => {
  const products = await getProducts({ isOffered: true });
  

  return (
    <Container>
      <div className="space-y-1 pb-1">
        <Back/>
 

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Ofertat e reja" items={products} />
        </div>
      </div>
    </Container>
  )
  
};

export default OfertaPage;