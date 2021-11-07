import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import ChooseYourPlan from "./components/ChooseYourPlan/ChooseYourPlan";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ChooseYourPlan />
    </div>
  );
}

export default App;
