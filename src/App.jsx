import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Menu from "./components/Menu";
import Experience from "./components/Experience";
import Gallery from "./components/Gallery";
import Reservations from "./components/Reservations";
import Footer from "./components/Footer";


export default function App() {
  return (
    <main className="min-h-screen bg-[#11140f] text-[#f3efe5]">
      <Navbar />
      <Hero />
      <Story />
      <Menu />
      <Experience />
      <Gallery />
      <Reservations />
      <Footer />
    </main>
  );
}
