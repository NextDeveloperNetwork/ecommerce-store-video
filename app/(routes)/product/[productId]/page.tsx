import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import getComments from "@/actions/get-comment";
import Back from "@/components/back";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import Comment from "@/components/ui/comment";
import CommentList from "@/components/ui/comment-list";
import { auth } from "@clerk/nextjs";
import NextImage from "next/image";
import Gall from "@/components/imageInfo";

export const revalidate = 0;

interface ProductPageProps{
    params:{
        productId:string;
    }
}

const ProductPage: React.FC<ProductPageProps> = async({
    params
})=>{
  
 
    const product = await getProduct(params.productId);
   const suggestedProducts= await getProducts({
        categoryId: product?.category?.id
    })
    const { userId } = await auth();
    const comments = await getComments(params.productId);
            return (
              <div className="bg-gray-100">
                <Container>
             
                  <div className="px-4">
                    <Back />
                  </div>

                  <div className=" bg-no-repeat px-4 py-6 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                      <div className="bg-white shadow-md p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg">
                        <Gallery images={product?.images} />
                      </div>
                      <div className="mt-8 sm:mt-0 lg:mt-0">
                        <Info data={product} />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-lg border-b-2">
                    <div className="p-6 md:p-8">
                      <h2 className="text-3xl font-bold mb-4 text-white border-b-2 pb-2">
                        Product Specifications
                      </h2>
                      <div className="text-white text-lg leading-relaxed mb-6">
                        {product?.info}
                      </div>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded-lg">
                      <Gall images={product?.images} />
                    </div>
                  </div>
                  <div className="bg-white shadow-md p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg">
                 <div className="font-bold text-2xl px-2 py-2">
                     <h1>Vleresimi i produktit /Rating</h1>
                   </div>
                    <Comment userId={userId} />
                    <hr className="my-6" />
                  
                    <CommentList title="Komente" items={comments} />
                  </div>                  

                  <hr className="my-6" />

                  <div className="px-4 py-6 sm:px-6 lg:px-8">
                    <ProductList
                      title="Produkte te ngjashem"
                      items={suggestedProducts}
                    />
                  </div>
                </Container>
              </div>
            );
}

export default ProductPage;