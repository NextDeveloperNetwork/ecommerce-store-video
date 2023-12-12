import { Star, StarHalf } from "lucide-react";

interface StarListProps {
    raiting: number;
}

const StarList = ({
    raiting
}: StarListProps) => {

    const renderStars = () => {
        const fullStars = Math.floor(raiting);
        const hasHalfStar = raiting - fullStars >= 0.5;
    
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= fullStars) {
            stars.push(<Star className="w-4 h-4 star-gold stroke-none"  />);
          } else if (i === fullStars + 1 && hasHalfStar) {
            stars.push(<StarHalf className="w-4 h-4 star-gold stroke-none"  />);
          } else {
            stars.push(<Star className="w-4 h-4 star-gray stroke-none"  />);
          }
        }
        return stars;
    };
    
    return (
        <div className="flex items-center justify-start gap-x-2 mt-2">
            {renderStars()}
            
        </div>
    );

}
 
export default StarList;