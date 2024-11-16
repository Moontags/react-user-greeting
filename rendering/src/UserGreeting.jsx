import PropTypes from "prop-types";

// This is the traditional if-else conditional statement option:

// function UserGreeting(props) {

//   if (props.isLoggedIn) {
//     return <h2>Welcome {props.username}</h2>;
//   }
//   return <h2>Please log in</h2>;
// }

// Here is the ternary operator option:

//   return props.isLoggedIn ? (
//     <h2 className="welcome-message">Welcome {props.username}</h2>
//   ) : (
//     <h2 className="login-prompt">Please log in</h2>
//   );
// }

// This is the most concise and recommended approach:
function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  );
  const loginPrompt = <h2 className="login-prompt">Please log in</h2>;

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

// PropTypes validation: ensures the correct prop types are provided
UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

export default UserGreeting;
