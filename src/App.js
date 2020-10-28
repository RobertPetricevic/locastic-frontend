import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WorkshopsList from "./pages/WorkshopsList";

function App() {
  return (
    <div className="App">
      <Header />
      <WorkshopsList />
      <Footer />
    </div>
  );
}

export default App;
