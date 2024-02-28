import { Icon } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/icons`;

const getIcon = async (id: string): Promise<Icon> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getIcon; 