
import React from "react";
import getOrder from "@/actions/get-orders";
import OrderList from "@/components/order-list";
import getProducts from "@/actions/get-products";
import SubNavbar from "@/components/subnavbar";
import ProductList from "@/components/product-list";

const Orders = async () => {
const orders = await getOrder("");
const product = await getProducts({});
const products = await getProducts({ isFeatured: true });
  return (
    <div>
           <SubNavbar/>
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-md shadow-lg">
 
     <OrderList data={orders} products={product} />
     <div className="px-4 py-6 sm:px-6 lg:px-8">
      <ProductList title="Produkte" items={products} />
      </div>
  </div>
     
</div>
  );
};

export default Orders;
