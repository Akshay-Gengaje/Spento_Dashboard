import Button from "../Button";

const Modal = ({ showModal, title, setShowModal, children }) => {
  console.log(showModal);
  return (
    <div className="fixed left-0 top-0 h-screen w-screen bg-gray bg-opacity-90">
      <div className="flex h-full items-center justify-center text-black">
        <div className="h-72 w-96 bg-white bg-opacity-100">
          <div className="relative h-16 bg-darkBlue pl-7 pt-6 align-text-bottom text-2xl text-white">
            <h1>{title}</h1>
            <button
              className="absolute right-5 top-5 text-white"
              onClick={() => setShowModal(!showModal)}
            >
              X
            </button>
          </div>
          <div className="relative mt-8 h-full w-full text-black">
            <div>{children}</div>
            <div className="mt-10 flex justify-around">
              <Button className="rounded-md bg-darkBlue px-4 py-3 text-white hover:border hover:border-darkBlue hover:bg-transparent hover:text-darkBlue">
                Submit
              </Button>
              <Button className="rounded-md border border-darkBlue px-4 py-3 hover:bg-darkBlue hover:text-white" onClick={()=>setShowModal(!showModal)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
