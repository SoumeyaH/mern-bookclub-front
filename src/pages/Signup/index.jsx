import LoginSignupForm from "../../components/LoginSignupForm";

const SignupPage = () => {
  return (
    <div>
      <h2>Signup title</h2>
      <LoginSignupForm pathname={"/signup"} />
    </div>
  );
};

export default SignupPage;