// Importing necessary components and hooks
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Page from "./components/Page";
import { useLocation } from "react-router-dom";

// Defining the main App component
function App() {
  // Getting the current page's pathname using useLocation hook
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Header>
       {/* Render Header component and pass Nav component with currentPage prop */}
        <Nav currentPage={currentPage} />
      </Header>
      <main>
       {/* Render Page component and pass currentPage prop */}
        <Page currentPage={currentPage} />
      </main>
     {/* Render Footer component */}
      <Footer />
    </div>
  );
}

// Exporting the App component
export default App;
