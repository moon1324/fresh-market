import Product from "../../components/Product";

export default function ShopPage() {
  return (
    <section id="shop">
      <h2>Fresh Shop</h2>

      <ul id="products">
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
