import "./App.css";
import Navbar from "./components/Navbar";
import CreateGlass from "./components/CreateGlass";
import Offers from "./components/Offers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CreateGlass />
      <Offers />
    </div>
  );
}

export default App;
