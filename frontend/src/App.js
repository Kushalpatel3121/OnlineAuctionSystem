import LoginPage from './Authentication/login';
import Signup from './Authentication/signup';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage/>}></Route>
        <Route path="signup" element={<Signup/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;