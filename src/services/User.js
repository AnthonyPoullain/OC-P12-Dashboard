import request from './request';

/* Assets */
import CaloriesIcon from '../assets/icons/dashboard/icon_calories.svg';
import ProteinIcon from '../assets/icons/dashboard/icon_protein.svg';
import CarbsIcon from '../assets/icons/dashboard/icon_carbs.svg';
import FatIcon from '../assets/icons/dashboard/icon_fat.svg';

const BASE_URL = process.env.REACT_APP_API_URL;

/**
 * Class representing a user.
 */
class User {
  /**
   * Create a user.
   * @param {number} id - The user ID
   */
  constructor(id) {
    this.id = id;
  }

  /**
   * Get basic user data.
   *
   * @returns {Promise<Object>} Basic user information.
   */
  async getInfo() {
    const response = await request(`${BASE_URL}/user/${this.id}`);
    const { data } = response;
    return {
      firstName: data.userInfos.firstName,
      lastName: data.userInfos.lastName,
      age: data.userInfos.age,
      todayScore: data.todayScore * 100,
    };
  }

  /**
   * Get user calories & macronutrients data.
   *
   * @returns {Promise<Array<Object>>} List of information about calories & macronutrients.
   */
  async getNutrients() {
    const response = await request(`${BASE_URL}/user/${this.id}`);
    const { data } = response;
    return [
      {
        icon: CaloriesIcon,
        label: 'Calories',
        amount: data.keyData.calorieCount,
        unit: 'kCal',
      },
      {
        icon: ProteinIcon,
        label: 'Protéines',
        amount: data.keyData.proteinCount,
        unit: 'g',
      },
      {
        icon: CarbsIcon,
        label: 'Glucides',
        amount: data.keyData.carbohydrateCount,
        unit: 'g',
      },
      {
        icon: FatIcon,
        label: 'Lipides',
        amount: data.keyData.lipidCount,
        unit: 'g',
      },
    ];
  }

  /**
   * Get user activity data.
   *
   * @returns {Promise<Array<Object>>} List of informaton about user sessions.
   */
  async getActivity() {
    const response = await request(`${BASE_URL}/user/${this.id}/activity`);
    const { data } = response;
    return data.sessions.map((session, i) => ({
      date: session.day,
      day: i + 1,
      bodyweight: session.kilogram,
      calories: session.calories,
    }));
  }

  /**
   * Get user sessions data.
   *
   * @returns {Promise<Array<Object>>} List of information about user sessions.
   */
  async getAverageSessions() {
    const response = await request(
      `${BASE_URL}/user/${this.id}/average-sessions`
    );
    const { data } = response;
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return data.sessions.map((session) => ({
      day: days[session.day - 1],
      sessionDuration: session.sessionLength,
    }));
  }

  /**
   * Get user performance data.
   *
   * @returns {Promise<Array<Object>>} List of information about user performance.
   */
  async getPerformance() {
    const response = await request(`${BASE_URL}/user/${this.id}/performance`);
    const { data } = response;

    const TRANSLATE = {
      cardio: 'Cardio',
      energy: 'Energie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité',
    };

    return data.data.map((item) => ({
      value: item.value,
      kind: TRANSLATE[data.kind[item.kind]],
    }));
  }
}

export default User;
