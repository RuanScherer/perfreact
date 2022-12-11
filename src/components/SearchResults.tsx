import { ProductDTO } from "../DTO/ProductDTO";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  result: Result;
  onAddToWishList: (id: number) => void;
}

interface Result {
  products: ProductDTO[];
  totalPrice: number;
}

export function SearchResults({ result, onAddToWishList }: SearchResultsProps) {
  return (
    <div>
      <h2>Total Price: {result.totalPrice}</h2>
      {result.products.map((product) => {
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
