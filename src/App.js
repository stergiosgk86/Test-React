import "./App.css";
import Navbar from "./components/Navbar";
import CreateGlass from "./components/CreateGlass";
import Offers from "./components/Offers";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CreateGlass />
      <Offers />
      <Carousel />
      <Categories />
    </div>
  );
}

export default App;
