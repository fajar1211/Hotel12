import { Routes, Route } from "react-router-dom";
import { SiteLayout } from "./components/SiteLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Romantic from "./pages/Romantic";
import WeddingMeeting from "./pages/WeddingMeeting";
import RestaurantPool from "./pages/RestaurantPool";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="romantic" element={<Romantic />} />
        <Route path="wedding-meeting" element={<WeddingMeeting />} />
        <Route path="restaurant-pool" element={<RestaurantPool />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
