import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CatForm: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setimage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const catData = {
      name,
      description,
      image,
    };

    try {
      const response = await fetch("http://localhost:5000/add-cat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(catData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit cat data");
      }

      const result = await response.json();
      console.log("Cat created:", result);

      // Reset form
      setName("");
      setDescription("");
      setimage("");
    } catch (error) {
      setError((error as Error).message);
    } finally {
      navigate("/");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-8 p-4 bg-white shadow-md rounded-lg"
    >
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Cat Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={4}
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="image"
        >
          Image URL
        </label>
        <input
          id="image"
          type="url"
          value={image}
          onChange={(e) => setimage(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>

      <button
        type="submit"
        className={`w-full bg-indigo-500 text-white py-2 px-4 rounded-lg ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-indigo-600"
        } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default CatForm;
