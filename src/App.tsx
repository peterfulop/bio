import Biography from "./components/Biography/biography";
import { DataContextProvider } from "./contexts/data.context";
import "../src/style/style.css";
import "./style/App.css";

function App() {
  return (
    <div className="App container">
      <DataContextProvider>
        <Biography />
      </DataContextProvider>
    </div>
  );
}

export default App;
