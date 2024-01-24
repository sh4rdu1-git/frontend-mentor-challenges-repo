/* eslint react/prop-types: 0 */
import "./SummaryCategories.css";
import ReactionIcon from "../assets/images/icon-reaction.svg";
import MemoryIcon from "../assets/images/icon-memory.svg";
import VerbalIcon from "../assets/images/icon-verbal.svg";
import VisualIcon from "../assets/images/icon-visual.svg";

const SummaryCategories = ({ scoreData }) => {
  const SVGIcons = [ReactionIcon, MemoryIcon, VerbalIcon, VisualIcon];

  const updatedData = scoreData.map((item) => {
    // Find the corresponding SVG icon by searching by category name
    const matchingIcon = SVGIcons.find((icon) =>
      icon.includes(item.category.toLowerCase())
    );
    // If found, replace the "icon" property
    if (matchingIcon) {
      return { ...item, icon: matchingIcon };
    }
    // If not found, return the original item
    return item;
  });

  return (
    <>
      <aside className="summary__categories">
        {updatedData.map((category, i) => {
          const {
            icon = "",
            category: categoryName = "",
            score = 0,
          } = category;
          console.log(icon, categoryName, score);
          return (
            <article key={i} className="summary__category__row">
              <img
                className="summary__category__icon"
                src={icon}
                alt={`${categoryName} icon`}
              />
              <article className="summary__category__text">
                <p className="summary__category__type">{categoryName}</p>{" "}
                <p className="summary__category__score">
                  <span className="summary__category__score__actual">
                    {score}
                  </span>{" "}
                  / 100{" "}
                </p>
              </article>
            </article>
          );
        })}
      </aside>
    </>
  );
};

export default SummaryCategories;
