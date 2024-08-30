import Slider from "../../components/Slider";

export default function HomePage() {
  return (
    <div>
      <section
        className="bg-white py-16"
        style={{ backgroundImage: "url(/img/market.jpg)" }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Fresh Market</h2>
          <p className="text-lg mb-8">
            Find the best products at unbeatable prices!
          </p>
        </div>
      </section>
      <Slider />
    </div>
  );
}
