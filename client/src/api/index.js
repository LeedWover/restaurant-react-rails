
const API_URL = 'http://localhost:3000';

export const getData = async () => {
  const res = await fetch(`${API_URL}/food_categories`, {
    method: "GET",
    headers: {
      "access-control-allow-origin": "*"
    }
  });
  console.log(res);
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
