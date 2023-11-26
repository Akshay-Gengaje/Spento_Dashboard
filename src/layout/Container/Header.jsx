import Devider from "../../ui/Devider";

const Header = ({ title, section }) => {
  return (
    <>
      <div className="flex justify-between px-10 pt-8">
        <p className="text-2xl">{title}</p>
        <p className="align-bottom uppercase">{section}</p>
      </div>
      <Devider
        backgroundColor="dark_gray"
        width="full"
        height="1px"
        className="mx-10 mt-2"
      />
    </>
  );
};

export default Header;
