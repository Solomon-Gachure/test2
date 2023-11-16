import FetchData from "./components/FetchData";
import Cats from "./components/cats";
import Events from "./components/events";
import Uspop from "./components/uspop";


function App() {
  return (
    <div className="App">
      <FetchData/>
      <Cats/>
      <Events/>
      <Uspop/>
    </div>
  );
}

export default App;
