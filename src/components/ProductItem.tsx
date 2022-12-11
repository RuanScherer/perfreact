import { lazy, memo, useState } from "react";
import { ProductDTO } from "../DTO/ProductDTO";

const AddProductToWishlist = lazy(async () => {
  return import("./AddProductToWishlist").then((mod) => ({
    default: mod.AddProductToWishlist,
  }));
});

interface ProductItemProps {
  product: ProductDTO;
  onAddToWishList: (id: number) => void;
}

export function ProductItemComponent({
  product,
  onAddToWishList,
}: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div style={{ margin: "8px 0" }}>
      {product.title} - <strong>{product.priceFormatted}</strong>
      {isAddingToWishlist ? (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      ) : (
        <button
          style={{ display: "block" }}
          onClick={() => setIsAddingToWishlist(true)}
        >
          Adicionar aos favoritos
        </button>
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);

/**
 * Applies to
 * 1. Pure Functional Components
 * 2. Components that render too often
 * 3. Re-renders with same props
 * 4. Components from medium to big size
 */
