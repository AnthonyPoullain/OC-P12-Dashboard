const BASE_URL = process.env.REACT_APP_API_URL;

const getUserInfo = async (id) => {
  const response = await fetch(`${BASE_URL}/user/${id}`);
  console.log(BASE_URL);
  console.log(response);
  return response.json();
};

export default getUserInfo;
