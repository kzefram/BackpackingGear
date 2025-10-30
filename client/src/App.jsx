import Header from "./Components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GearList from "../pages/inventory.jsx";
import Wishlist from "../pages/wishlist.jsx";
import About from "../pages/about.jsx";
import Home from "../pages/home.jsx";
import SignIn from "../pages/signin.jsx";
import SignUp from "../pages/signup.jsx";
import SignOut from "../pages/signout.jsx";
import Profile from "../pages/profile.jsx";
import Footer from "./Components/Footer.jsx";
import { SettingsProvider } from "./context/SettingsContext";

export default function App() {
  return (
    <BrowserRouter>
      <SettingsProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/gear' element={<GearList />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/about' element={<About />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/signout' element={<SignOut />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </SettingsProvider>
    </BrowserRouter>
  );
}
