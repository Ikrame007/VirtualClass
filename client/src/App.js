import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiscoverStudent from "./pages/student/DiscoverStudent";
import DiscoverProf from "./pages/prof/DiscoverProf";
import Home from "./pages/Home"
import Courses from './pages/student/Courses';
import Auth from "./pages/auth/Auth";
// import { About } from "./components/Pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={< Home/>} />
          <Route path="/discoverstudent" element={< DiscoverStudent/>} />
          <Route path="/discoverteacher" element={< DiscoverProf/>} />
          <Route path="/Courses" element={< Courses/>} />
          <Route path="/auth" element={< Auth/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


