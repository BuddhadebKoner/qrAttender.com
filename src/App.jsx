import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <header className="z-50 w-full h-fit flex flex-1 justify-between items-center pt-5 px-5 md:px-[5rem] lg:px-[7rem] fixed">
        <Navbar />
      </header>
      <main className="w-full h-full  py-10 -z-30">
        <Home />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

export default App;
