import LoginSignupForm from "../../components/LoginSignupForm";

const LoginPage = () => {
  return (
    <div>
      <h2>login title</h2>
      <LoginSignupForm pathname={"/login"} />
    </div>
  );
};

export default LoginPage;