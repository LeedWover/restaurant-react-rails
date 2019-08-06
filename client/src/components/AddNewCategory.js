import React, { useState } from 'react';

import { addCategory } from '../api';

const AddNewCategory = () => {
  const [categoryToSend, setCategoryToSend] = useState('');

  const handleChange = event => {
    setCategoryToSend(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    addCategory(categoryToSend);
    setCategoryToSend('');
  }

  return (
    <form>
      <input  type="text" value={categoryToSend} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>Add new category</button>
    </form>
  )
}

export default AddNewCategory;