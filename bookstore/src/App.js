import HomePage from "./screens/HomePage"
import ProductPage from "./screens/ProductPage";
import SearchPage from "./screens/SearchPage";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Routes>
        {/* routing here */}
        <Route path='/' element={ <HomePage/> } exact/>
        <Route path='/book/:id' element={ <ProductPage/> } />
        <Route path='/' element={ <SearchPage/> } />
      </Routes>
    </Router>
  );
}

export default App;
