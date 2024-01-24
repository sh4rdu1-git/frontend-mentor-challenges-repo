/* eslint react/prop-types: 0 */
import SummaryCategories from "./SummaryCategories";
import "./SummarySection.css";

const SummarySection = ({ scoreData }) => {
  return (
    <>
      <aside className="summary-section">
        <article className="summary__heading">
          <h2>Summary</h2>
        </article>
        <SummaryCategories scoreData={scoreData} />
        <button className="btn__continue">Continue</button>
      </aside>
    </>
  );
};

export default SummarySection;
