import React from 'react';
// Importing an image to be used as the cover picture in the header


// Defining the Header component that accepts props to render child elements
function Header(props) {
    // Returning JSX structure for the header with a title, cover picture, and child elements
    return (
        <header className="flex-row space-between px-1">
        <h1>Ifeyinwa Ekezie</h1>
        {props.children}
        </header>
    );
}

// Exporting the Header component
export default Header;