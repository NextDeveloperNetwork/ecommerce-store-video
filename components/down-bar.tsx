import Link from "next/link";
import Container from "@/components/ui/container";
import { Home ,Truck, MessageSquare} from "lucide-react";

import Button from "./ui/Button";

const Downbar = () => {
  return (
    <div className="border-b sm:hidden sticky bottom-0 bg-slate-100 z-10">
      <Container>
        <div className="mx-auto max-w-7xl relative flex items-center px-5 py-1 justify-between">
          <Link href="/" className="flex items-center gap-x-2">
          <Button className="flex items-center rounded bg-black px-2 py-2">
              {<Home 
              size={20}
              color="white" />}
              <span className="px-3">Home</span>
              
            </Button>
          </Link>
          <Link href="/messages" className="flex items-center gap-x-2">
            <Button className="flex items-center rounded bg-black px-2 py-2">
              {<Truck 
              size={20}
              color="white" />}
              <span className="px-3">Track</span> 
            </Button>
              
           
          </Link>
          <Link href="/inbox" className="flex items-center gap-x-2">
          <Button className="flex items-center rounded bg-black px-2 py-2">
              {<MessageSquare 
              size={20}
              color="white" />}
              <span className="px-3">Help</span>
            </Button>
          </Link>
          
        </div>
      </Container>
    </div>
  );
};

export default Downbar;
