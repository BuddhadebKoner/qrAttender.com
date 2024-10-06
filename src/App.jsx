import { Route, Routes } from "react-router-dom";
import RootLayout from "./_root/RootLayout";
import { About, Contact, Explore, Footer, Home } from "./_root/pages";

const App = () => {
  return (
    <main>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App;
