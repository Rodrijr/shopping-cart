import axiosInstance from "../api/axiosInstance";

const createUser = async (user) => {
  try {
    const response = await axiosInstance.post('/users', user);
    return response.data;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
};

export default {
  createUser,
};