import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/HomeMain/Home/Home';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Contact from './components/Contact/Contact';
import DrawLink from './components/DrawLink/DrawLink/DrawLink';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import BottomNavbar from './components/Shared/BottomNavbar/BottomNavbar';
function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <BottomNavbar></BottomNavbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/drawlink">
            <DrawLink></DrawLink>
          </Route>
          <Route path="/privacypolicy">
            <PrivacyPolicy></PrivacyPolicy>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
