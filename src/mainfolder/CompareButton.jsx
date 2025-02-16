import React, { useState } from "react";
import HospitalModal from "./HospitalModal";
 // Import the modal component

const CompareButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Compare</button>
      {isModalOpen && <HospitalModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default CompareButton;
