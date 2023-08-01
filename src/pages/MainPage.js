import Banner from "../components/banner/Banner";
import Courses from "../components/courses/Courses";
import Home from "../components/home/Home";
import Learning from "../components/learning/Learning";
import Stats from "../components/stats/Stats";
import Teachers from "../components/teachers/Teachers";

const MainPage = () => {
  return (
    <main>
      <Home />
      <Stats />
      <Teachers />
      <Learning />
      <Courses />
      <Banner />
    </main>
  );
}

export default MainPage;