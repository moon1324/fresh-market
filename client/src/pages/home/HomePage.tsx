import Footer from "../../components/Footer";
import BackgroundImage from "../../components/Home/BackgroundImage";

export default function HomePage() {
  return (
    <div className="bg-[#E8F1DF]">
      <BackgroundImage />
      <section className="flex flex-col items-center justify-center mx-auto px-4 py-16 max-w-4xl">
        <img
          src="/img/penguins.jpg"
          alt="Penguins"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        <h3 className="text-2xl font-bold mb-4">Who We Are?</h3>
        <p className="text-lg text-center">
          We are future developers and the ones who created this application,
          Michael and Johnson
        </p>
      </section>
      <div className="px-4 py-8">
        <ul className="flex flex-wrap gap-8 justify-center">
          <li className="flex flex-col items-center">
            <p className="mb-2 font-bold" style={{ color: "#A17D60" }}>
              Apple
            </p>
            <img
              src="/img/products/Apples.jpg"
              alt="Apple"
              className="w-60 h-60 object-cover" // Increased size
            />
          </li>
          <li className="flex flex-col items-center">
            <p className="mb-2 font-bold" style={{ color: "#A17D60" }}>
              Banana
            </p>
            <img
              src="/img/products/Bananas.jpg"
              alt="Banana"
              className="w-60 h-60 object-cover" // Increased size
            />
          </li>
          <li className="flex flex-col items-center">
            <p className="mb-2 font-bold" style={{ color: "#A17D60" }}>
              Kiwi
            </p>
            <img
              src="/img/products/kiwi.jpg"
              alt="Kiwi"
              className="w-60 h-60 object-cover" // Increased size
            />
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
