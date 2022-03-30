import Biography from "./components/Biography/biography";
import { DataContextProvider } from "./contexts/data.context";

function App() {
  return (
    <div id="App" className="container p-5 my-0 my-sm-5">
      <DataContextProvider>
        <Biography />
      </DataContextProvider>
    </div>
  );
}

export default App;
