import request from './request';

const BASE_URL = process.env.REACT_APP_API_URL;

class User {
  constructor(id) {
    this.id = id;
  }

  async getInfo() {
    const response = await request(`${BASE_URL}/user/${this.id}`);
    return response.data;
  }

  async getActivity() {
    const response = await request(`${BASE_URL}/user/${this.id}/activity`);
    return response.data;
  }

  async getAverageSessions() {
    const response = await request(
      `${BASE_URL}/user/${this.id}/average-sessions`
    );
    return response.data;
  }

  async getPerformance() {
    const response = await request(`${BASE_URL}/user/${this.id}/performance`);
    return response.data;
  }
}

export default User;
