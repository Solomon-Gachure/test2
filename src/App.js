import FetchData from "./components/FetchData";
import Cats from "./components/cats";
import Dogs from "./components/dogs";
import Events from "./components/events";
import Paka from "./components/paka";
import Uspop from "./components/uspop";


function App() {
  return (
    <div className="App">
      <FetchData/>
      <Cats/>
      <Events/>
      <Uspop/>
      <Dogs/>
      <Paka/>
    </div>
  );
}

export default App;
