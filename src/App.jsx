import "./App.css";
import CustomNavBar from "./Components/CustomNavBar";
import GridGenerator from "./Components/GridGenerator";
import MyFooter from "./Components/MyFooter";
import MyHero from "./Components/MyHero";

function App() {
  return (
    <>
      <CustomNavBar />
      <MyHero />
      <GridGenerator />
      <MyFooter />
    </>
  );
}

export default App;
