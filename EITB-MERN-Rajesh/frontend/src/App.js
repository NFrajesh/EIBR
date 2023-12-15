import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import OTT from "./views/OTT";
import NewArrivals from "./views/OTT/component/NewArrivals";
import OttListInfo from "./views/OTT/component/OttList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<OTT />}>
          <Route path="/" element={<OttListInfo />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
