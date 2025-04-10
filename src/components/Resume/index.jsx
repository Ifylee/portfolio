// Resume component to display the user's resume and skill sets
function Resume() {
    return (
      <section className="my-5">
        <div className="my-2">
          {/* Link to download the resume */}  
        <p>
          Download my <a href="My-CV.docx">resume</a>
          </p>
          {/* Front-end competencies section */}
          <h3>Front-end Competencies</h3>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
           {/* Back-end competencies section */}
          <h3>Back-end Competencies</h3>
          <ul className="skills">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>PostgreSQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </section>
    );
  }
  
  // Exporting the Resume component
  export default Resume;
  