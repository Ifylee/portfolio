// Importing a helper function to capitalize the first letter of the page names
import { Link } from 'react-router-dom';
// Importing a helper function to capitalize the first letter of the page names
import { capitalizeFirstLetter } from '../../utils/helper';

// Defining the Nav component that accepts props to render child elements
function Nav({ currentPage }) {
  // Array of page names to be used in the navigation bar
  const pages = ['portfolio', 'contact', 'resume'];

  return (
    // JSX structure for the navigation bar
    <nav>
        {/* Creating an unordered list for navigation items */}
      <ul className="flex-row">
         {/* Rendering the "About" link and conditionally applying the 'navActive' class */}
        <li
          className={`mx-5 ${currentPage === '/' && 'navActive'}`}
          key="about"
        >
          <Link to="/">About</Link>
        </li>
        {/* Mapping over the pages array to create navigation links */}
        {pages.map((Page) => (
          <li
            className={`mx-5 ${currentPage === `/${Page}` && 'navActive'}`}
            key={Page}
          >
            {/* Creating a link for each page */}
            <Link to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Exporting the Nav component
export default Nav;