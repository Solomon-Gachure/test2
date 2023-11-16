import FetchData from "./components/FetchData";
import Cats from "./components/cats";
import Events from "./components/events";


function App() {
  return (
    <div className="App">
      <FetchData/>
      <Cats/>
      <Events/>
    </div>
  );
}

export default App;
