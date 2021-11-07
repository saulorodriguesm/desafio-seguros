import "./App.css";
import Desktop from "./components/Header/Desktop";
import Mobile from "./components/Header/Mobile";
import Banner from "./components/Banner/Banner";
import ChooseYourPlan from "./components/ChooseYourPlan/ChooseYourPlan";
import Footer from "./components/Footer/Footer";
import { BrowserView, MobileView } from "react-device-detect";

function App() {
  return (
    <div className="App">
      <BrowserView>
        {" "}
        <Desktop />{" "}
      </BrowserView>
      <MobileView>
        {" "}
        <Mobile />
      </MobileView>
      <Banner />
      <ChooseYourPlan />
      <Footer />
    </div>
  );
}

export default App;