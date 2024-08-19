import "./App.css";
import bakery from "./assets/media/cookieShop.jpg";
import { ProductItem } from "./components/ProductItem";
import ProductList from "./components/ProductList";
// import products from "./products";

function App() {
  // let TheProducts = products.map((product) => {
  //   return (
  //     <div>
  //       <img src={product.image} className="image-style" />
  //       <p>{product.name}</p>
  //       <p>{product.Price}</p>
  //     </div>
  //   );
  // });
  return (
    <div className="containor1">
      <h1>Cookies and Beyond</h1>
      <h5>Where cookies maniacs gather</h5>
      <img src={bakery} alt="bakeryimagd" height={500} />
      <div className="containor2">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
