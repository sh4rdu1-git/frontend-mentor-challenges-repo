import { useEffect, useState } from "react";
import "./ResultsSection.css";

const ResultsSection = () => {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);

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

    const totalScoreReducer = (accumulator, currentValue) =>
      accumulator + currentValue.score;

    const totalScore = data.reduce(totalScoreReducer, 0);
    const averageScore = totalScore / data.length;

    setScore(Math.round(averageScore));
  }, [data]);

  return (
    <>
      <aside className="results-section">
        <p className="results__title">Your Result</p>
        <article className="results__circle">
          <p className="results__circle__score">{score}</p>
          <p className="results__circle__scoreoutof">of 100</p>
        </article>
        <article className="results__info">
          <p className="results__info__tagline">Great</p>
          <p className="results__info__quote">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </article>
      </aside>
    </>
  );
};

export default ResultsSection;
