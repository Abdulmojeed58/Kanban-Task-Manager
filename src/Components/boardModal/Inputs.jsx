import React, { useState } from "react";

const DynamicInputForm = ({ onInputChange }) => {
  const [inputs, setInputs] = useState([""]);

  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  const handleInputChange = (index, value) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);

    // Pass the updated input values back to the parent component
    onInputChange(updatedInputs);
  };

  const removeInput = (index) => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
    onInputChange(updatedInputs);
  };

  const inputFields = inputs.map((input, index) => (
    <div key={index} className="subtask_input">
      <input
        type="text"
        value={input}
        onChange={(e) => handleInputChange(index, e.target.value)}
      />
      <button type="button" onClick={() => removeInput(index)}>
        x
      </button>
    </div>
  ));

  return (
    <div>
      {inputFields}
      <button type="button" onClick={addInput}>
        +Add New Subtask
      </button>
    </div>
  );
};

export default DynamicInputForm;
