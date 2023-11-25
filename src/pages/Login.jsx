import LoginBox from "../components/LoginBox";
import Devider from "../ui/Devider";
import Footer from "../ui/Footer";
import Logo from "../ui/Logo";

const Login = () => {
  return (
    <div className="relative flex h-screen w-screen  bg-login bg-cover bg-bottom bg-no-repeat">
      {/* Left div*/}
      <div className="hidden md:block md:w-[50%]"></div>
      {/* Right Div  */}
      <div
        className="bg-login-grediant relative flex h-full
      justify-center  md:w-[50%]"
      >
        <div className="flex h-[628px] w-[560px] flex-col items-center justify-around">
          {/* Logo  */}
          <Logo />

          {/* divider  */}
          <Devider />

          {/* Login Box  */}
          <LoginBox />
        </div>
      </div>
      {/* SVG  */}
      <img
        src="/images/Group.svg"
        alt="group"
        className="absolute bottom-1 right-1 h-24 md:h-[212px] md:w-[224px]"
      />
      <Footer />
    </div>
  );
};

export default Login;
