import { Navbar, ReactSlider, BlogSection } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <section className="home__section">
        <ReactSlider />
      </section>
      <BlogSection />
    </>
  );
}

export default App;
