const Modal = ({ showModal, title, content, setShowModal }) => {
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
          <div className="relative text-black">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
