// Importing necessary libraries and components
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './components/ProblemPage';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './index.css';

// Creating a browser router with defined routes
const router = createBrowserRouter([
  {
    // Defining the base route
    path: '/',
    element: <App />, // Rendering the main App component
    errorElement: <Error />, // Rendering the error page component
    children: [
      {
        index: true, // Default route when path is '/'
        element: <About />,  // Component to render for the default route
      },
      {
        path: 'portfolio', // Route for the Portfolio page
        element: <Portfolio />, // Component to render for the Portfolio page
      },
      {
        path: 'contact', // Route for the Contact page
        element: <Contact />, // Component to render for the Contact page
      },
      {
        path: 'resume', // Route for the Resume page
        element: <Resume />, // Component to render for the Resume page
      },
    ],
  },
]);

// Rendering the RouterProvider component with the router
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
