import axios from "axios";

const API_BASE_URL = "https://dhcase-mockapi.vercel.app/api/game/578080";

class GameAPI {
  async getOverview() {
    try {
      const response = await axios.get(`${API_BASE_URL}/overview`);
      return response.data;
    } catch (error) {
      console.error("Error fetching overview:", error);
      throw error;
    }
  }

  async getPerformance() {
    try {
      const response = await axios.get(`${API_BASE_URL}/performance`);
      return response.data;
    } catch (error) {
      console.error("Error fetching performance:", error);
      throw error;
    }
  }

  async getStreamData() {
    try {
      const response = await axios.get(`${API_BASE_URL}/stream`);
      return response.data;
    } catch (error) {
      console.error("Error fetching stream data:", error);
      throw error;
    }
  }
}

export default new GameAPI();
