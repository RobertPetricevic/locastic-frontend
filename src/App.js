import { Switch, Route } from "react-router-dom";

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
      {/* <CheckoutModal /> */}
    </div>
  );
}

export default App;
