import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({
  results,
  onAddToWishList,
}: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
  }, [results]);

  return (
    <div>
      <h2>Total Price: {totalPrice}</h2>
      {results.map((product) => {
        return (
          <ProductItem
            product={product}
            onAddToWishList={onAddToWishList}
            key={product.id}
          />
        );
      })}
    </div>
  );
}
