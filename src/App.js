import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Home from "./pages/Home"

import Navbar from "./components/Navbar/Navbar";
import classes from "./App.module.css";
import FooterBanner from "./components/FooterBanner/FooterBanner";

const App = () => {
  return (
    <div className={classes.App}>
      <header>
        <div className={classes.navContainer}>
          <Navbar />
        </div>
      </header>
      <main className={classes.app_main}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </main>
      <FooterBanner />
    </div>
  );
};

export default App;
