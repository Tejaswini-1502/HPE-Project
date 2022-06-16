import HomePage from "./screens/HomePage"
import ProductPage from "./screens/ProductPage";
import SearchPage from "./screens/SearchPage";
import CartPage from "./screens/CartPage";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Routes>
        {/* routing here */}
        <Route path='/' element={ <HomePage/> } exact/>
        <Route path='/product/:id' element={ <ProductPage/> } />
        <Route path='/' element={ <SearchPage/> } />
        <Route path='/cart' element={<CartPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
