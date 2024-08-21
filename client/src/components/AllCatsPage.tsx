import React, { useEffect, useState } from "react";

interface Cat {
  id: string;
  name: string;
  description: string;
  image: string;
}

const AllCatsPage: React.FC = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/cats")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        setCats(data);
      })
      .catch((error) => console.error("Error fetching cats:", error));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Cats</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cats.map((cat) => (
          <div key={cat.id} className="bg-white shadow-md rounded-lg p-4">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold mt-4">{cat.name}</h2>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCatsPage;
