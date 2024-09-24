import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  return (
    <div>
      <Header></Header>
      <HomePage />
      {/* <HomePage></HomePage> */}
    </div>
  );
}

export default App;
