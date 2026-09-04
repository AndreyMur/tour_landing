import { useCallback, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import Tours from "./components/Tours";
import Advantages from "./components/Advantages";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import BookingCTA, { Prefill } from "./components/BookingCTA";
import Footer from "./components/Footer";
import { Tour } from "./data";
import { scrollToId } from "./hooks";

export default function App() {
  const [searchDest, setSearchDest] = useState("");
  const [prefill, setPrefill] = useState<Prefill | null>(null);

  const handleSearch = useCallback((dest: string) => {
    setSearchDest(dest);
    setPrefill({ dest: dest === "any" ? undefined : dest, ts: Date.now() });
    scrollToId("tours");
  }, []);

  const handleBook = useCallback((tour: Tour) => {
    setPrefill({ dest: tour.dest, tour: tour.title, ts: Date.now() });
    scrollToId("booking");
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-foam font-body text-ink">
      <div aria-hidden className="noise-overlay" />
      <Header />
      <main>
        <Hero onSearch={handleSearch} />
        <Destinations />
        <Tours
          searchDest={searchDest}
          onClearSearch={() => setSearchDest("")}
          onBook={handleBook}
        />
        <Advantages />
        <Gallery />
        <Testimonials />
        <BookingCTA prefill={prefill} />
      </main>
      <Footer />
    </div>
  );
}
