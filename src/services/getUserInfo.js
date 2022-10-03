const BASE_URL = '';

const getUserInfo = async (id) => {
  const response = await fetch(`${BASE_URL}/user/${id}`);
  return response.json();
};

export default getUserInfo;
