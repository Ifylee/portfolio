// Importing useState hook to manage form state
import { useState } from 'react';
// import helper function to validate email
import { validateEmail } from '../../utils/helper';

function Contact() {
  // Using the useState hook to create a formState object with default key-value pairs
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Destructuring formState object for ease of use
  const [errorMessage, setErrorMessage] = useState('');
  // Destructure name, email, and message properties from formState object
  const { name, email, message } = formState;

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      //logs the formState object to the console
      console.log('Submit Form', formState);
    }
  };

  // Function to handle changes in the form elements
  const handleChange = (e) => {
    // Conditional statement to validate the form
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      // Conditional statement to check if the input field is empty
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        // If the input field is not empty, clear the error message
        setErrorMessage('');
      }
    }
    // If there is no error message, update the formState with the new input value
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    // JSX code
    <section>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            // defaultValue prop to set the initial value of the input field
            defaultValue={name}
            // onBlur event listener to handle changes in the input field
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            // onBlur event listener to handle changes in the input field
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            // rows prop to set the number of rows in the textarea element
            rows="5"
            defaultValue={message}
            // onBlur event listener to handle changes in the input field
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            {/* Conditional rendering of error message */}
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

// Exporting the Contact component
export default Contact;
