// import LoginBox from "../components/LoginBox";
import LoginBox from "../components/LoginBox";
import Devider from "../ui/Devider";
import Logo from "../ui/Logo";
import Footer from "../ui/Footer";

const LoginPage = () => {
  return (
    <div className="relative flex h-screen w-screen  bg-login bg-cover bg-bottom bg-no-repeat">
      {/* Left  */}
      <div className="h-full md:flex-1"></div>
      {/* Right  */}
      <div className="bg-login-grediant  h-full flex-1  overflow-y-scroll  ">
        <div className="w- flex h-full flex-col items-center px-10">
          <Logo className="mt-20 h-10 md:mt-20 md:h-16" />
          <Devider
            className=" my-10 h-[2px] w-[250px] md:w-[400px]"
            backgroundColor="dark_blue"
          />
          <LoginBox />
          <img
            src="/images/Group.svg"
            alt=""
            className="absolute bottom-1 right-1 hidden w-36 md:block xl:w-44"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
