import FetchData from "./components/FetchData";
import Cats from "./components/cats";
import Dogs from "./components/dogs";
import Events from "./components/events";
import Uspop from "./components/uspop";


function App() {
  return (
    <div className="App">
      <FetchData/>
      <Cats/>
      <Events/>
      <Uspop/>
      <Dogs/>
    </div>
  );
}

export default App;
