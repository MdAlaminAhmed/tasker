import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import TaskBOard from "./task/TaskBoard";
export default function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBOard />
      </div>
      <Footer />
    </>
  );
}
