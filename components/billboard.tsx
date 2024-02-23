import { Billboard as BillboardType} from "@/types";

interface BillboardProps{
    data:BillboardType
};
const Billboard: React.FC<BillboardProps>=({
    data
})=>{
  return ( 
    <div className="p-1 sm:p-1 lg:p-2 rounded-xl overflow-hidden">
    <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="rounded-xl relative overflow-hidden bg-cover">
      <div className="h-40 w-full flex flex-col justify-center items-center text-center gap-y-8">
        <div className="font-bold text-xl sm:text-3xl lg:text-4xl sm:max-w-xl max-w-xs"
          style={{
            background: 'rgba(255, 255, 255, 0.5)',
            textShadow: '0 0 10px grey',
          }}
        >
          {data.label}
        </div>
      </div>
    </div>
  </div>
   );
};
export default Billboard;
