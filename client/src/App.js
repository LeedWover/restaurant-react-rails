import React, { useState, useEffect } from "react";
import AddCategory from "./components/AddNewCategory";

import { getCategories, deleteCategory } from "./api";

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(data => {
      setCategories(data);
    });
  }, [])

  return (
    <div>
      <AddCategory />
      {categories.map(category => (
        <div key={category.id}>
          {category.name}{" "}
          <button onClick={() => deleteCategory(category.id)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default App;
