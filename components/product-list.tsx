"use client"
import { useState, useEffect } from 'react';
import ProductCard from "@/components/ui/product-card";
import ProductCardV from "@/components/ui/product-card-variant";
import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import React from 'react';

interface ProductListProps {
  title: string;
  items: Product[]
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  items
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust the breakpoint as needed
    };

    handleResize(); // Call initially to set the correct screen size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            {isSmallScreen ? (
              <ProductCardV key={item.id} data={item} />
            ) : (
              <ProductCard key={item.id} data={item} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProductList;