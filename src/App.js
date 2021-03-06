import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import WorkshopsList from "./pages/WorkshopsList";
import WorkshopDetails from "./pages/WorkshopDetails";
import CheckoutModal from "./components/Modal";

function App() {
  const isModalOn = useSelector((state) => state.isModalOn);
  const isCheckout = useSelector((state) => state.isCheckout);

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <WorkshopsList />
        </Route>
        <Route exact path="/:cat">
          <WorkshopsList />
        </Route>
        <Route path="/details/:id">
          <WorkshopDetails />
        </Route>
      </Switch>

      <Footer />
      {isModalOn && <CheckoutModal checkout={isCheckout} />}
    </div>
  );
}

export default App;
