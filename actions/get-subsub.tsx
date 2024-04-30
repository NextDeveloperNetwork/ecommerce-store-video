import { Subsub } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/subsub`;

const getSubsub = async (id: string): Promise<Subsub> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getSubsub;