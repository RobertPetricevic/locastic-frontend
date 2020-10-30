import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WorkshopsList from "./pages/WorkshopsList";
import WorkshopDetails from "./pages/WorkshopDetails";
import CheckoutModal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <WorkshopsList /> */}
      <WorkshopDetails />
      <Footer />
      <CheckoutModal />
    </div>
  );
}

export default App;
