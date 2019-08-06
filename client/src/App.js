import React, { useState, useEffect } from "react";
import AddCategory from './components/AddNewCategory';

import { getData } from "./api";

const App = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData()
      .then(data => {
        setCategories(data)
      })
  })
  return (
    <div>
      <AddCategory />
      {categories.map(category => <div key={category.id}>{category.name}</div>)}
    </div>
  );
}

export default App;
