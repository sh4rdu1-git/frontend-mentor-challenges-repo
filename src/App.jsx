import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import ResultsSection from "./components/ResultsSection";
import SummarySection from "./components/SummarySection";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../data.json");
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <main>
        <section className="container">
          <ResultsSection scoreData={data} />
          <SummarySection scoreData={data} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
