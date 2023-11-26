import Button from "../../components/Button";

const Options = () => {
  const grayBtn =
    "bg-lightGray min-w-fit min-w-fit rounded-lg px-6 py-3 text-darkBlue ";
  const blueBtn =
    "bg-darkBlue min-h-fit min-w-fit  rounded-lg px-6 py-3 text-white flex justify-center  ";
  return (
    <div className="mt-5 flex items-center justify-between overflow-x-scroll px-2 md:px-10">
      <div className=" flex  space-x-3">
        <Button className={grayBtn}>CSV</Button>
        <Button className={grayBtn}>Excel</Button>
        <Button className={grayBtn}>PDF</Button>
        <Button className={grayBtn}>Print</Button>
        <Button className={grayBtn}>Column visiblity</Button>
      </div>
      <div className="flex items-center space-x-2">
        <Button className={blueBtn}>
          <img src="icons/import.svg" alt="" className="mr-2" />
          <span>Import Manage Profile</span>
        </Button>
        <Button className={blueBtn}>
          <img src="icons/download.svg" alt="" className="mr-2" />
          <span>Sample Download Manage Profile</span>
        </Button>
      </div>
    </div>
  );
};

export default Options;
