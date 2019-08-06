import React, { useState, useEffect } from "react";
import AddCategory from "./components/AddNewCategory";

import { getCategories, deleteCategory } from "./api";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [categoryToSend, setCategoryToSend] = useState('');
  
  useEffect(() => {
    getCategories().then(data => {
      setCategories(data);
    });
  }, [categoryToSend])

  return (
    <div>
      <AddCategory categoryToSend={categoryToSend} setCategoryToSend={setCategoryToSend} />
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
