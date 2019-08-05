
const API_URL = 'http://localhost:3000';

export const getData = async () => {
  const response = await fetch(`${API_URL}/food_categories`);
  const data = await response.json()
  console.log(data)
};

export const addData = async () => {
  const res = await fetch(`${API_URL}/food_categories`, {
    method: "POST",
    headers: {
      "access-control-allow-origin": "*"
    },
    body: JSON.stringify({
      name: 'test'
    })
  });
  console.log(res);
};
