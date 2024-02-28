import { Icon as IconType} from "@/types";

interface IconProps{
    data:IconType
    
};
const Icon: React.FC<IconProps> = ({ data }) => {
  return (
    <div className="p-1 sm:p-1 lg:p-2 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl relative overflow-hidden bg-cover"
      >
        <div className="h-7 w-7 justify-between items-center "></div>
      </div>
    </div>
  );
};

export default Icon;
