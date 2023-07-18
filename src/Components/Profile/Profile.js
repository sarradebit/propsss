// Creating a profile folder under src.
import React from "react";
import PropTypes from "prop-types";


function Profile(props) {
    const {fullName, bio, profession} = props;

    const handleAlert = () => {
        // the function handleName functions is a prop that sends an alert message with the name of the profile user
        alert(`Profile user's name is ${fullName}`);
    };

    return (
        <div style={{padding: "10px", }}>
            {/* profile component gets data (fullName, bio, profession) as props*/}
            <h2>{fullName}</h2>
            <p>{profession}</p>
            <p>{bio}</p>
            <button onClick={handleAlert}>Show Name</button>
        </div>
    );
}

Profile.defaultProps = {
    fullName: "John Doe",
    bio: "No bio available",
    profession: "Unknown",
  };
  
  Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string,
    profession: PropTypes.string,
    children: PropTypes.element.isRequired,
    handleName: PropTypes.func.isRequired,
  };
  

export default Profile;

