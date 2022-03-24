import {Route} from "react-router-dom"
import Home from "./component/Home";
import Review from "./component/Review";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/review/:what_day" exact component={Review}>
        {/* <Review></Review> */}
      </Route>
    </div>
  );
}

export default App;
