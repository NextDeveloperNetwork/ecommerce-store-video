import { Order } from "@/types";


const URL=`${process.env.NEXT_PUBLIC_API_URL}/order`;

const getOrder = async (id: string): Promise<Order[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getOrder; 
