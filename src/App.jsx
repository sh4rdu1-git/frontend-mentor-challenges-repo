import "./App.css";
import Footer from "./components/Footer";
import ResultsSection from "./components/ResultsSection";

function App() {
  return (
    <>
      <main>
        <section className="container">
          <ResultsSection />
          <aside className="summary-section">
            Summary Reaction 80 / 100 Memory 92 / 100 Verbal 61 / 100 Visual 72
            / 100 Continue
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
