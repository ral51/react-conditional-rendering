import React from 'react';
import ReactDOM from 'react-dom';

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LogoutButton(props) {
	return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function LoginButton(props) {
	return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

class LoginControl extends React.Component {

	constructor(props) {
		super(props);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.state = {isLoggedIn: false};
	}

	handleLoginClick() {
		this.setState({
			isLoggedIn: true
		});
	}

	handleLogoutClick() {
		this.setState({
			isLoggedIn: false
		});
	}

	render() {
		var loggedIn = this.state.isLoggedIn;
		var button = loggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />;

		return (
			<div>
				<Greeting isLoggedIn={loggedIn} />
				{button}
			</div>
		);
	}

}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);