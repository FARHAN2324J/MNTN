import Hero from "../features/Home/components/Hero";
import About from "../features/Home/components/About";
import Footer from "../components/layout/Footer"

const HomePage = () => {
  return (
    <>
      <Hero />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
