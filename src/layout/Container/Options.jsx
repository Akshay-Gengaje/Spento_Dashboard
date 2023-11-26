import Button from "../../components/Button";

const Options = () => {
  const grayBtn =
    "bg-lightGray min-w-fit min-w-fit rounded-lg px-6 py-3 text-darkBlue ";
  const blueBtn =
    "bg-darkBlue min-w-fit items-center rounded-lg px-6 py-3 text-white flex justify-center  ";
  return (
    <div className="mt-5 flex min-w-full items-center justify-between gap-5 overflow-x-scroll px-2 pb-3 md:px-10">
      <div className=" flex min-w-fit items-center space-x-2">
        <Button className={grayBtn}>CSV</Button>
        <Button className={grayBtn}>Excel</Button>
        <Button className={grayBtn}>PDF</Button>
        <Button className={grayBtn}>Print</Button>
        <Button className={grayBtn}>Column visiblity</Button>
      </div>
      <div className="flex min-w-fit items-center space-x-1">
        <Button className={blueBtn}>
          <img src="icons/import.svg" alt="" className="mr-2" />
          <span>Import Profile</span>
        </Button>
        <Button className={blueBtn}>
          <img src="icons/download.svg" alt="" className="mr-2" />
          <span>Sample Download Profile</span>
        </Button>
      </div>
    </div>
  );
};

export default Options;
