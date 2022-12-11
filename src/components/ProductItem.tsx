import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
  onAddToWishList: (id: number) => void;
}

export function ProductItemComponent({
  product,
  onAddToWishList,
}: ProductItemProps) {
  return (
    <div style={{ margin: "8px 0" }}>
      {product.title} - <strong>{product.price}</strong>
      <button
        style={{ display: "block" }}
        onClick={() => onAddToWishList(product.id)}
      >
        Add to wishlist
      </button>
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
