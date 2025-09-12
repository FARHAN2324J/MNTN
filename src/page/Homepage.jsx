import Hero from "../features/Home/components/Hero";
import About from "../features/Home/components/About";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
