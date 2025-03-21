import React, { useState } from "react";

const Prod = () => {
  const [isAvailable, setIsAvailable] = useState(true);

  const toggleAvailability = () => {
    setIsAvailable((prevState) => !prevState);
  };

  return (
    <div>
      <button
        onClick={toggleAvailability}
        style={{
          backgroundColor: isAvailable ? "green" : "red",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isAvailable ? "Available" : "Not Available"}
      </button>
    </div>
  );
};

export default Prod;