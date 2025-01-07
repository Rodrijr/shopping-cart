import axiosInstance from "../api/axiosInstance";

const cartService = {
  getCart: async (userId) => {
    try {
      const response = await axiosInstance.get(`/cart/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener el carrito:", error);
      throw new Error("No se pudo obtener el carrito. Por favor, inténtalo nuevamente.");
    }
  },

  addToCart: async (product) => {
    try {
      const cartId = localStorage.getItem("cartId");
      const response = await axiosInstance.post(`cart/add/${cartId}`,product);
      return response.data;
    } catch (error) {
      throw new Error("Error al agregar el producto al carrito");
    }
  },

  cleanCart: async () => {
    try {
      const cartId = localStorage.getItem("cartId");
      const response = await axiosInstance.delete(`/cart/clean/${cartId}`);
      return response.data;
    } catch (error) {
      console.error("Error al actualizar el carrito:", error);
      throw new Error("No se pudo actualizar el carrito. Por favor, inténtalo nuevamente.");
    }
  },
};

export default cartService;
