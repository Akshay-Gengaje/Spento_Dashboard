import { useEffect, useState } from "react";
import Button from "../Button";
import SearchBar from "../SearchBar";
import AddRole from "./AddModals/AddRole";
import AddReporting from "./AddModals/AddReporting";
import AddEmployee from "./AddModals/AddEmployee";
const TabMenu = ({ tab }) => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {}, [showModal]);
  return (
    <div className="flex items-center justify-between p-2">
      <Button
        className="rounded-md bg-darkBlue px-4 py-2 text-base text-white"
        onClick={() => setShowModal(true)}
      >
        &#43; Add
      </Button>
      <SearchBar className="shadow-search  flex h-10 max-w-full rounded-md bg-white pr-[10px] focus:ring-1" />
      {showModal && tab === 0 ? (
        <AddRole showModal={showModal} setShowModal={setShowModal} />
      ) : (
        <></>
      )}
      {showModal && tab === 1 ? <AddReporting /> : <></>}
      {showModal && tab === 2 ? <AddEmployee /> : <></>}
    </div>
  );
};

export default TabMenu;
