import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import { Container } from "@material-ui/core";
import Mainnav from "./Components/Mainnav";
import Trending from "./Components/Pages/Trending/Trending"
import Movies from "./Components/Pages/Movies";
import Series from "./Components/Pages/Series";
import Search from "./Components/Pages/Search/Search";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route exact path="/" component={Trending} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <Mainnav />
    </BrowserRouter>
  );
}

export default App;

// const API_KEY = "e0d6713d535315f7f85fe59c128e3945"
