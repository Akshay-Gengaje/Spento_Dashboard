import Modal from "../../Modal/Modal";

const AddRole = ({ showModal, setShowModal }) => {
  return (
    <Modal title={"Add Role"} showModal={showModal} setShowModal={setShowModal}>
      <div className="flex justify-around p-2">
        <div className="flex flex-col">
          <label htmlFor="role">Role</label>
          <input type="text" className="w-48 rounded-md border border-black" />
        </div>
        <div>
          <input
            type="checkbox"
            name="isActive"
            id="isActive"
            className="mx-2 mt-8"
          />
          <label htmlFor="isActive">isActive</label>
        </div>
      </div>
    </Modal>
  );
};

export default AddRole;
