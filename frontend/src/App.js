import LoginPage from './Authentication/login';
import Signup from './Authentication/signup';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<LoginPage/>}></Route>
          <Route path="signup" element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;