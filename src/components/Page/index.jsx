// Importing useEffect to handle side effects in the component
import { useEffect } from 'react';
// Importing the PageContent component to wrap the child elements
import PageContent from '../PageContent';

import { capitalizeFirstLetter } from '../../utils/helper';
// Importing Outlet from react-router-dom to display nested routes
import { Outlet } from 'react-router-dom';

// Defining the Page component that accepts props to render child elements
function Page({ currentPage }) {
  // Removing the leading slash from currentPage for easier handling
  currentPage = currentPage.substring(1);

  // Using the useEffect hook to update the document title based on the currentPage
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  // Returning the main structure of the page with a title and content
  return (
    <section>
      {/* Displaying the capitalized current page name as the heading */}
      <h2>{capitalizeFirstLetter(currentPage)}</h2>

      {/* Wrapping the child elements in the PageContent component */}
      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}
// Exporting the Page component
export default Page;
