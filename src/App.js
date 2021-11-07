import "./App.css";
import Desktop from "./components/Header/Desktop";
import Mobile from "./components/Header/Mobile";
import Banner from "./components/Banner/Banner";
import ChooseYourPlan from "./components/ChooseYourPlan/ChooseYourPlan";
import Form from "./components/Form/Form";
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
      <BrowserView>
        {" "}
        <Banner />{" "}
      </BrowserView>
      <ChooseYourPlan />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
