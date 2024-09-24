export default function Footer() {
  return (
    <footer className="bg-[#E8F1DF] text-gray-500 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Penguin Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
