import { FormEvent, Suspense, useCallback, useState } from "react";
import { SearchResults } from "./components/SearchResults";
import { ProductDTO } from "./DTO/ProductDTO";

interface Result {
  products: ProductDTO[];
  totalPrice: number;
}

function App() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState<Result>({
    products: [],
    totalPrice: 0,
  });

  async function handleSearch(event: FormEvent) {
    event.preventDefault();
    if (!search.trim()) return;

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data: ProductDTO[] = await response.json();

    const formatter = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    const products = data.map((product) => {
      return {
        ...product,
        priceFormatted: formatter.format(product.price),
      };
    });

    const totalPrice = data.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);

    setResult({
      products,
      totalPrice,
    });
  }

  const addToWishList = useCallback((id: number) => {
    console.log(id);
  }, []);

  return (
    <Suspense fallback={<span>Carregando...</span>}>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button type="submit">Buscar</button>
      </form>

      <SearchResults result={result} onAddToWishList={addToWishList} />
    </Suspense>
  );
}

export default App;
