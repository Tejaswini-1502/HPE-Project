import HomePage from "./screens/HomePage"
import ProductPage from "./screens/ProductPage";
import SearchPage from "./screens/SearchPage";
import CartPage from "./screens/CartPage";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";
import ProfilePage from "./screens/ProfilePage";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Routes>
        {/* routing here */}
        <Route path='/' element={ <HomePage/> } exact/>
        <Route path='/products/:id' element={ <ProductPage/> } />
        <Route path='/' element={ <SearchPage/> } />
        <Route path='/cart/*' element={ <CartPage/> } />
        <Route path='/login' element={ <LoginPage/> } />
        <Route path='/register' element={ <RegisterPage/> } />
        <Route path='/profile' element={ <ProfilePage/> } />
      </Routes>
    </Router>
  );
}

export default App;
