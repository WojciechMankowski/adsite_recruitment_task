import React from "react";
import Button from "./Button";

const TwoButtonComponent = () => {
  return (
    <div className="flex space-x-4">
      <Button
        className="bg-mainColor hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded"
        content={"Zobacz zdjęcia"}
      />
      <Button
        content={"Zadzwoń do nas"}
        className="border border-mainColor hover:bg-mainColor text-mainColor hover:text-white 
            font-bold py-2 px-4 rounded"
      />
    </div>
  );
};

export default TwoButtonComponent;
