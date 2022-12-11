interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
  onAddToWishList: (id: number) => void;
}

export function ProductItem({ product, onAddToWishList }: ProductItemProps) {
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
