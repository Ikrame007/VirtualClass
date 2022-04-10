import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiscoverStudent from "./pages/student/DiscoverStudent";
import CourseDetails from './components/Courses/CourseDetails/CourseDetails';
import NewCourse from "./components/DashbordProf/layouts/courses/NewCourse";
import CourseInformations from "./components/DashbordProf/layouts/courses/CourseInformations";
import DiscoverProf from "./pages/prof/DiscoverProf";
import Home from "./pages/Home"
import Courses from './pages/student/Courses';
import Auth from "./pages/auth/Auth";
import Dashboard from "./pages/prof/DashboradProf";
// import { About } from "./components/Pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/student/discover" element={< DiscoverStudent/>} />
          <Route path="/professor/discover" element={< DiscoverProf/>} />
          <Route  path="/*" element={< Dashboard/>} />
          <Route path="/student/courses" element={< Courses/>} />
          <Route path="/student/categories" element={< Courses/>} />
          <Route path="/auth" element={< Auth/>} />
          <Route path="/student/courses/:courseId" element={<CourseDetails/>} />
          <Route path="/mycourses/new-course" element={<NewCourse />} />
          <Route path="/courses/course-informations/:courseId" element={<CourseInformations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


