import LoginPage from './Authentication/login';
import Signup from './Authentication/signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import ProfilePage from './Pages/Profile/Profile';
import Listings from './Pages/Listings/Listings';
import Bids from './Pages/Bids/Bids';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {


  return (

    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="login" element={<LoginPage/>}></Route>
          <Route path="signup" element={<Signup/>}></Route>
          <Route path='about' element={<AboutUs />}/>
      </Routes>

      <Routes>
        <Route path='dashboard'>
          <Route index element={<Dashboard/>}></Route>
          <Route path='profile' element={<ProfilePage/>}></Route>
          <Route path='listings' element={<Listings/>}></Route>
          <Route path='bids' element={<Bids/>}></Route>
          <Route path='about' element={<AboutUs />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;