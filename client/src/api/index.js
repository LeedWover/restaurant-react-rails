
const API_URL = 'http://localhost:3000';

export const getCategories = async () => {
  const response = await fetch(`${API_URL}/food_categories`);
  const data = await response.json();
  return data;
};

export const addCategory = async newCategory => {
  return await fetch(`${API_URL}/food_categories`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: newCategory
    })
  });
};

export const deleteCategory = async categoryId => {
  return await fetch(`${API_URL}/food_categories/${categoryId}`, {
    method: "DELETE"
  });
};