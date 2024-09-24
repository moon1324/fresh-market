import React, { useEffect, useState } from "react";

export default function ShopPage() {
  // Define the Product interface within the component
  interface Product {
    Id: string;
    Name: string;
    Price: number;
    PictureUrl: string;
    StockQuantity: number;
    Category: string;
  }

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/product/get");
        if (!response.ok) {
          const errorMessage = await response.text(); // Get error details
          throw new Error(`Failed to fetch products: ${errorMessage}`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error(err); // Log the error for debugging
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Fresh Market</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.Id}
            className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.PictureUrl}
              alt={product.Name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.Name}</h3>
            <p className="text-gray-700">Price: ${product.Price}</p>
            <p className="text-gray-600 mb-2">Stock: {product.StockQuantity}</p>
            <button className="flex items-center bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300 p-2">
              Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
