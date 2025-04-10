import { removeHyphensAndCapitalize } from '../../utils/helper'; // Utility function to format activity names
import * as activities from '../../asset'; // Importing all activities images

function Activity({ activity }) {
  // Destructuring activity properties
  const { name, repo, link, description } = activity;

  return (
    <div className="activity" key={name}>
      <img
        src={activities[name]}
        alt={removeHyphensAndCapitalize(name)}
        className="activity-bg"
      />
      <div className="activity-text">
         {/* Display activity image with alt text formatted by removeHyphensAndCapitalize */}
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>
          &nbsp;
          <a href={repo}>
            <i className="fab fa-github" />
          </a>
        </h3>
         {/* Display activity description */}
        <p>{description}</p>
      </div>
    </div>
  );
}

// Exporting the Activity component
export default Activity;