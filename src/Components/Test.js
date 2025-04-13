import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {

    if (typeof props.aboutText !== "number") {
      console.warn("this is warning - aboutText must be a number");
      console.log(process.env.NODE_ENV);

      // throw new Error("aboutText must be a number!"); // Manually throw an error
    }
  return (
    <nav>
      <h1>{props.title}</h1>
      <p>{props.aboutText}</p>
    </nav>
  );
};
console.log("Checking PropTypes execution...");
// PropTypes validation
Navbar.propTypes = {
  title: PropTypes.string.isRequired, // Should warn if missing
  aboutText: PropTypes.number, // Should warn if string is passed
};

// Default props
Navbar.defaultProps = {
  title: "Default Title",
  aboutText: 100,
};

export default Navbar;
