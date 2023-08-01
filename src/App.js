import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";

import './app.scss';

import Footer from "./components/footer/Footer";
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CoursePage from './pages/CoursePage';
import PlansPage from './pages/PlansPage';
import TeacherPage from './pages/TeacherPage';
import ScrollToTop from './utils/scrollToTop';


function App() {
  return (
    <div className="App">

      <Router>
        <ScrollToTop />
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/teacher/*" element={<TeacherPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
