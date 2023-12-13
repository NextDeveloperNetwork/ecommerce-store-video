import getOrders from "@/actions/get-orders";
import { auth } from "@clerk/nextjs";
import React from "react";

const Orders = async () => {

  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  console.log("ORDER USER ID: " + userId)

  const orders = await getOrders(userId)

  const renderOrders = () => {
    return orders.map((order) => {
      return order.items.map((item) => {
        return (
          <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {item.productId}
            </th>
          </tr>
        );
      });
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-md shadow-lg ">
      <h1 className="text-4xl font-bold mb-8">Artikujt e Porositur </h1>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {renderOrders()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
