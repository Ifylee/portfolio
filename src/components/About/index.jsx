// This function defines the About component, which is a functional component in React.
function About() {
    return (
      // The section element with a class of 'my-5' is used to structure the content.
      <section className="my-5">
        <div className="my-2">
          {/* Profile image section with a margin class for spacing */}
          <div className="profile-img my-5">
            <img
              src="/profilePix.jpg" 
              alt="Ifeyinwa Ekezie"
              style={{ width: "150px", borderRadius: "50%" }}
            />
          </div>
          <p>Hi, I am someone who loves figuring things out — whether it’s a new idea, a tricky bug, or the best way to bring something to life on the web. I’m curious, thoughtful, and always up for a challenge (especially the kind that makes me better).
          </p>
          <p>I care about doing good work, growing along the way, and creating things that feel meaningful. When I build, I build with purpose — and a touch of creativity.</p>
          <p>Thanks for stopping by. If my work resonates with you, I’d be excited to hear about opportunities to collaborate or create something great together.</p> 
        </div>
    </section>
    );
  }
  
  // Exporting the About component to make it available for import in other files.
  export default About;
