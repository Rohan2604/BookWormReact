import Home from "./Home";
import SignUp from "./SignUp";


export default function Register() {
	const isLoggedIn = false;
	if (isLoggedIn) {
		return <Home />;
	}
	return <SignUp />;
}