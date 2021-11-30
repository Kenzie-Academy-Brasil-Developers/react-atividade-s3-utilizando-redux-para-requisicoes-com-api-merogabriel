import "./App.css";
import Digimons from "./components/Digimons";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <main className="main">
        <Search />
        <Digimons />
      </main>
    </div>
  );
}

export default App;
