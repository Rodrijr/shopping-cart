import axiosInstance from "../api/axiosInstance";

const orderService = {
  confirmOrder: async (orderData) => {
    try {
      const response = await axiosInstance.post("/orders", orderData);
      return response.data;
    } catch (error) {
      console.error("Error al confirmar la orden:", error);
      throw new Error("No se pudo confirmar la orden. Intenta nuevamente.");
    }
  },
};

export default orderService;
