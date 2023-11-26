import { useNavigate } from "react-router-dom";
import Button from "./Button";
import TextField from "./TextField";

const LoginBox = () => {
  const navigate = useNavigate();
  return (
    <div className="shadow-login-box-shadow rounded-xl bg-[#0672A3] px-5 py-[60px] md:px-10">
      {/* Email ID Text Field  */}
      <TextField
        placeholder="Enter your Email Id"
        icon={"/icons/user.svg"}
        type={"text"}
      />
      {/* Password Text Field  */}
      <TextField
        placeholder="Enter your password"
        icon={"/icons/password.svg"}
        type={"password"}
        iconStyle="w-7 pr-2"
        marginTop="mt-5"
      />

      {/* Remember me and Forget Password */}
      <div className="flex items-center justify-between text-white">
        <div className="mt-6">
          <input
            type="checkbox"
            id="remeber-me"
            className="mr-2 h-5 w-5 bg-transparent"
          />
          <label htmlFor="remeber-me" className="text-[18px]">
            Remember Me
          </label>
        </div>

        <div className="mt-6 text-[16px]">Forget Password?</div>
      </div>
      <Button
        className={
          "mt-[40px] h-fit w-full rounded-md bg-white p-[10px] text-[#0672A3]"
        }
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Sign In
      </Button>
    </div>
  );
};

export default LoginBox;
