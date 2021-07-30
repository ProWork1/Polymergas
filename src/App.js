import "./App.css";
import Index from "./Components/MahsulotInformation";
import Ourproduct from "./Components/Ourproduct/Ourproduct";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div className="App">
      <div>
        <Services />
        <Ourproduct />
        <Index />
      </div>
    </div>
  );
}

export default App;
