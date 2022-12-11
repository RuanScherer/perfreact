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
  return (
    <ul>
      {results.map((product) => {
        return (
          <ProductItem
            product={product}
            onAddToWishList={onAddToWishList}
            key={product.id}
          />
        );
      })}
    </ul>
  );
}
