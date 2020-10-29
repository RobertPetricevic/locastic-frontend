import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WorkshopsList from "./pages/WorkshopsList";
import WorkshopDetails from "./pages/WorkshopDetails";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <WorkshopsList /> */}
      <WorkshopDetails />
      <Footer />
    </div>
  );
}

export default App;
