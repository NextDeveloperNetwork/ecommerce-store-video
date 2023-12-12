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
            return(
        <div className="bg-gray-100">
           <Container>
            <Back/>
            <div >
                <div className=" px-10 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <div className="py-2 ">
                            <Gallery images={product?.images}/>
                        </div>
                        <div className="mt-5 px-4 py-1 sm:mt-16 ms:px-0 lg:mt-0 ">
                          <Info data={product}/>
                        </div>
                        </div>
                    </div>
                   
                </div>
                <div className="bg-white shadow-md p-8 py-2">
                <Comment userId={userId} />
                        <CommentList
                          title="Komente"
                          items={comments}
                        />
                        </div>
                    <hr className="mt-10"/>
                    <ProductList title="Related Items" items={suggestedProducts}/>
           </Container>
        </div>
    );
}

export default ProductPage;