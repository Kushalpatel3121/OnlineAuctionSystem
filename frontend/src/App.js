import LoginPage from './Authentication/login';
import Signup from './Authentication/signup';
import Dashboard from './Pages/Dashboard/Dashboard';
import ProfilePage from './Pages/Profile/Profile';
import Home from './Pages/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyListing from "./Pages/Dashboard/Components/MyListing";

function App() {


  return (

    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="login" element={<LoginPage/>}></Route>
          <Route path="signup" element={<Signup/>}></Route>
      </Routes>

      <Routes>
        <Route path='dashboard'>
          <Route index element={<Dashboard/>}></Route>
          <Route path='profile' element={<ProfilePage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;