import Features from "./Features";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

const Home = () => {
   return (
      <>
         <main className="w-full h-full py-10 -z-30">
            <Hero />
            <Features />
            <Testimonials />
         </main>
      </>
   )
}

export default Home;
