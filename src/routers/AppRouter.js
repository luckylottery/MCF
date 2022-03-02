import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { HomePage } from "../pages/HomePage";
import { VettedPage } from "../pages/VettedPage";
import { VettedProjectPage } from "../pages/VettedProjectPage";
import { CreateCoinPage } from "../pages/CreateCoinPage";

export const AppRouter = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 overflow-hidden">
          <Navbar />

          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/vetted" component={VettedPage} />
            <Route exact path="/vetted/:projectId" component={VettedProjectPage} />
            <Route exact path="/create-coin/:crypto?" component={CreateCoinPage} />

            <Redirect to="/home" />
          </Switch>

          <Footer />
        </div>
      </div>
    </Router>
  )
}
