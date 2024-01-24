/* eslint react/prop-types: 0 */
import { useEffect, useState } from "react";
import "./ResultsSection.css";

const ResultsSection = ({ scoreData }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const totalScoreReducer = (accumulator, currentValue) =>
      accumulator + currentValue.score;

    const totalScore = scoreData.reduce(totalScoreReducer, 0);
    const averageScore = totalScore / scoreData.length;

    setScore(Math.round(averageScore));
  }, [scoreData]);

  return (
    <>
      <aside className="results-section">
        <h2 className="results__title">Your Result</h2>
        <article className="results__circle">
          <p className="results__circle__score">{score.toString()}</p>
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
