import React from "react";
import CatForm from "./CatForm";

const AddCatPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Cat</h1>
      <CatForm />
    </div>
  );
};

export default AddCatPage;
