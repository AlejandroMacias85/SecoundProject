import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { AuthContexProvider } from "../Context/AuthContext";

import { Home } from "./views/home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Account from "./component/Account";
import injectContext from "./store/appContext";

import { Footer } from "./component/footer";
import Navbar from "./component/Navbar";
import Main from "./component/Main";
import ProtectedRoute from "./component/ProtectedRoute";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="w-full h-screen bg-dark text-white">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <AuthContexProvider>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Login">
                <Login />
              </Route>
              <Route exact path="/Signup">
                <Signup />
              </Route>
              <Route exact path="/Account">
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              </Route>
            </Switch>
          </AuthContexProvider>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
