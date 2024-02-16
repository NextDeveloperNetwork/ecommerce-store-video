"use client";
import React, { useState, useEffect } from "react";
import { useClerk } from "@clerk/clerk-react";
import { Order as OrderType, OrderItem, Product } from "@/types";
import Image from "next/image";
import { format } from "date-fns";
import { FaExclamationTriangle } from 'react-icons/fa'
interface OrderListProps {
  data: OrderType[];
  products: Product[];
}

const OrderList: React.FC<OrderListProps> = ({ data, products }) => {
  const { user } = useClerk();
  const [filteredOrders, setFilteredOrders] = useState<OrderType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3; // Number of items per page
  const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>(
    {}
  );
  useEffect(() => {
    if (user) {
      // Filter orders based on the logged-in user ID
      const userOrders = data.filter((order) => order.userId === user.id);
      setFilteredOrders(userOrders);
    }
  }, [user, data]);

  const getProductName = (productId: string): string => {
    const product = products.find((product) => product.id === productId);
    return product ? product.name : "Product not found"; // Handle the case if product is not found
  };

  const getProductPrice = (productId: string): number | string => {
    const product = products.find((product) => product.id === productId);
    return product ? (product.price as number) : "Product not found"; // Handle the case if product is not found
  };

  const getProductImage = (productId: string): string | undefined => {
    const product = products.find((product) => product.id === productId);
    return product ? product.images[0]?.url : undefined;
  };

  const totalPages = Math.ceil(filteredOrders.length / pageSize);

  const handleClickPage = (page: number) => {
    setCurrentPage(page);
  };
  const toggleRow = (key: string) => {
    setExpandedRows((prevExpandedRows) => ({
      ...prevExpandedRows,
      [key]: !prevExpandedRows[key],
    }));
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-md shadow-lg">
      <h1 className="text-4xl font-bold mb-8">Artikujt e Porositur</h1>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>

              <th scope="col" className="px-6 py-3">
                Total
              </th>

              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders
              .slice((currentPage - 1) * pageSize, currentPage * pageSize)
              .map((order, index) =>
                order.orderItems?.map((item: OrderItem, itemIndex: any) => (
                  <React.Fragment key={`${index}-${itemIndex}`}>
                    <tr onClick={() => toggleRow(`${index}-${itemIndex}`)}>
                      <td className="px-6 py-4">
                        {getProductImage(item.productId) ? (
                          <Image
                            src={getProductImage(item.productId) as string}
                            alt={getProductName(item.productId)}
                            width={120}
                            height={120}
                            className="object-cover rounded"
                          />
                        ) : (
                          <div>No Image Available</div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {getProductName(item.productId)}
                      </td>
                      <td className="px-6 py-4">{item.metadata.quantity}</td>

                      <td className="px-6 py-4">
                        {Number(getProductPrice(item.productId)) *
                          Number(item.metadata.quantity)}
                        -Leke
                      </td>

                      <td className={`px-6 py-4 rounded`}>
                        {order.isPaid ? (
                          <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                            Paid
                          </span>
                        ) : (
                          <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                            Not Paid
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {format(order.createdAt, "yyyy-MM-dd HH:mm:ss")}
                      </td>
                    </tr>
        
          <div className="relative flex justify-center bg-white px-4">
            <span className="text-red-500 bg-white px-2"> ^ Click on product to see details</span>
            <hr className="my-2 border-t border-red-500" />
          </div>
         
                    {expandedRows[`${index}-${itemIndex}`] && (
                      <tr>
                        <td colSpan={10}>
                          <div className="bg-orange-50 p-1 border border-slate-200 shadow-md rounded-lg">
                          <div className="flex flex-col items-center">
  <span className="text-black">Tracking Number: {order.tracking}</span>
  <span className="text-black">Ngjyra: {item.color}</span>
  <span className="text-black">Masa: {item.size}</span>
  <span className="text-black">Adresa: {order.address ? order.address : "N/A"}</span>
  <span className={`text-${order.status === 'Bllokuar' ? 'red' : 'black'}`}>
    Status: {order.status}
  </span>
  {order.status === 'Bllokuar' && (
    <div className="text-red-500">
      Your item has been blocked by Customs Office. Please take actions!
    </div>
  )}
  {['Tranzit', 'Dogana'].includes(order.status) && (
    <div className="text-yellow-600">
      Your item Is still in Transit. No actions needed at this moment!!!
    </div>
  )}
  {order.status === 'Kthyer' && (
    <div className="text-blue-500">
      You have sent back this item! And you have been refunded the amount!
    </div>
  )}
  {['Tranzit', 'Kthyer', 'Dogana', 'Bllokuar'].includes(order.status) && (
    <FaExclamationTriangle className="inline-block text-red-500" style={{ fontSize: '24px' }} />
  )}
</div>
                            
                            <div className="mt-4">
                              <div className="flex space-x-5 px-32">
                                {[
                                  {
                                    label: "Ne pritje",
                                    icon: (
                                      <svg
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                    ),
                                  },
                                  {
                                    label: "Postuar",
                                    icon: (
                                      <svg
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                    ),
                                  },
                                  {
                                    label: "Ne rruge",
                                    icon: (
                                      <svg
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                    ),
                                  },
                                  {
                                    label: "Dorezuar",
                                    icon: (
                                      <svg
                                        className="w-4 h-4 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                    ),
                                  },
                                ].map((step, index) => (
                                  <div
                                    key={step.label}
                                    className="flex items-center"
                                  >
                                    <div
                                      className={`w-8 h-8 flex items-center justify-center rounded-full ${
                                        order.status === step.label
                                          ? "bg-green-500"
                                          : order.status === "Dorezuar" &&
                                            (index === 0 ||
                                              index === 1 ||
                                              index === 2)
                                          ? "bg-green-500"
                                          : order.status === "Ne rruge" &&
                                            (index === 0 || index === 1)
                                          ? "bg-green-500"
                                          : order.status === "Postuar" &&
                                            index === 0
                                          ? "bg-green-500"
                                          : "bg-gray-500"
                                      }`}
                                    >
                                      {order.status === step.label ||
                                      (order.status === "Dorezuar" &&
                                        (index === 0 ||
                                          index === 1 ||
                                          index === 2)) ||
                                      (order.status === "Ne rruge" &&
                                        (index === 0 || index === 1)) ||
                                      (order.status === "Postuar" &&
                                        index === 0) ? (
                                        <svg
                                          className="w-4 h-4 text-white"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                          />
                                        </svg>
                                      ) : null}
                                    </div>
                                    <span className="ml-2">{step.label}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))
              )}
          </tbody>
        </table>
        {totalPages > 1 && (
          <div className="flex justify-center mt-4">
            {Array.from(Array(totalPages).keys()).map((page) => (
              <button
                key={page}
                onClick={() => handleClickPage(page + 1)}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === page + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {page + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderList;
