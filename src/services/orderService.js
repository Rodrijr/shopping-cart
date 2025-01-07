import axiosInstance from "../api/axiosInstance";

const orderService = {
  confirmOrder: async (orderData) => {
    console.log('JRBP -> orderData:', orderData);
    try {
      const response = await axiosInstance.post(`/orders/${orderData.userId}`, orderData);
      return response.data;
    } catch (error) {
      console.error("Error al confirmar la orden:", error);
      throw new Error("No se pudo confirmar la orden. Intenta nuevamente.");
    }
  },
  getUserOrders: async () => {
    const userString = localStorage.getItem("user");
    let user = JSON.parse(userString)
    try {
      const response = await axiosInstance.get(`/orders/${user.userId}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener ordenes de compra:", error);
      throw new Error("No se obtener ordenes de compra. Intenta nuevamente.");
    }
  }
};

export default orderService;
