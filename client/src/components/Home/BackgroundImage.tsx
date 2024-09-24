export default function BackgroundImage() {
  return (
    <div>
      <section
        className="py-16 mb-8 h-80" // Add bottom margin here
        style={{
          backgroundImage: "url(/img/market.jpg)",
          backgroundSize: "cover", // Cover the full width
          backgroundPosition: "center", // Center the image
        }}
      >
        <div className="container mx-auto text-center">
          <div className="bg-white p-4 max-w-2xl mx-auto mt-16">
            <h2 className="text-4xl font-bold">Fresh Everywhere</h2>
          </div>
        </div>
      </section>
    </div>
  );
}
