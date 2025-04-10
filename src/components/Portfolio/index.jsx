// Importing useState from React and Activity component for displaying portfolio items
import { useState } from 'react';
import Activity from "../Activity";

function Portfolio() {

  
  const [activities] = useState([
  // Using useState to manage the list of activities/projects for the portfolio
  // Each activity contains a name, description, link to the live project, and GitHub repository link
    {
      name: 'blogVista',
      description: 'A CMS-style blog site where developers can publish and comment on blog posts.',
      link: "https://blog-vista-q2wd.onrender.com",
      repo: "https://github.com/Ifylee/blog_vista"
    },
    {
      name: 'weatherChannel',
      description: 'Get a 5-day weather forecast for any city or state with The Weather Channel app. Simply search and plan your trips with ease!',  
      link: "https://ifylee.github.io/weather-channel/",
      repo: "https://github.com/Ifylee/weather-channel"
    },
    {
      name: 'listIt',
      description: 'An MVC full-stack app for tracking hobbies, with user accounts, CRUD functionality, and secure authentication.',
      link: "https://list-it-z3t7.onrender.com",
      repo: "https://github.com/Ifylee/List-It"
    },
    {
      name: 'DigitalNotebook',
      description: 'A user-friendly application designed to help users organize their thoughts and also keep track of notes, ideas and tasks efficiently.',
      link: "https://digital-notebook.onrender.com",
      repo: "https://github.com/Ifylee/digital-notebook"
    },
    {
      name: 'ScheduleBoard',
      description: 'A project management application i built in order to help user keep track of task to dos, due dates and task progress.',
      link: "https://ifylee.github.io/schedule-board/",
      repo: "https://github.com/Ifylee/schedule-board"
    },
     {
      name: 'graphbooks',
      description: 'A full-stack app using the Google Books API and GraphQL with Apollo Server, allowing users to search and save books to a MongoDB database.',
      link: "https://graphbooks.onrender.com",
      repo: "https://github.com/Ifylee/graphBooks"
    },
  ]);

  // Rendering a list of activities by mapping over the activities state array
  // Each Activity component receives an activity object as a prop and a unique key
  return (
    <div>
      <div className="flex-row">
        {activities.map((activity, idx) => (
          <Activity
            activity={activity}
            key={"activity" + idx}
          />
        ))}
      </div>
    </div>
  );
};

// Exporting the Portfolio component
export default Portfolio;
