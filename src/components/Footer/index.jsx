// Importing React for building the Footer component
import React from "react";

// Footer component definition
function Footer() {
       // Array of social media icons with their respective links
    const icons = [
        {
            name: "fab fa-github", 
            links: "https://github.com/Ifylee"
        },
        {
            name: "fab fa-linkedin", 
            links: "https://www.linkedin.com/in/ifeyinwa-ekezie-565a6b154/"
        }
    ];
    // Inline styles for the links (GitHub, LinkedIn) to remove underline and set color
    const LinkStyle = {
        textDecoration: "none",
        color: "white",
        cursor: "pointer"
    }
    // Inline styles for the footer
    const FooterStyle = {
        height: "50px",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridGap: "15px"
    }

     // Returning the JSX structure for the footer, which includes dynamic icon links
    return (
        <footer style={FooterStyle}>
            {/* Creating a grid layout for the footer content */}
            <section style={{display: "grid", gridTemplateColumns: "max-content 1fr 1fr", gridGap: "20px"}}>
                {/* Displaying the current year dynamically */}
               <span style={{paddingRight: "15px"}}>© {new Date().getFullYear()}</span>
              {/* Mapping over the icons array to create clickable icons for social media */}
                {icons.map(icon => {
                    return (
                        // Creating an anchor tag for each icon with the respective link
                        <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer" style={LinkStyle}>
                            <i className={icon.name}></i>
                        </a>
                    );
                })}
            </section>
        </footer>
    );
}

// Exporting the Footer component
export default Footer;
