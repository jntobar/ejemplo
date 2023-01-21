import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import NotFound from "./pages/NotfoundPage";
import RegistroPage from "./pages/registroPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registro" element={<RegistroPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;