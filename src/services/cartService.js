import axiosInstance from "../api/axiosInstance";

const CartService = {
  getCart: async (userId) => {
    try {
      const response = await axiosInstance.get(`/cart/${userId}`);
      return response.data;
    } catch (error) {
      console.error("Error al obtener el carrito:", error);
      throw new Error("No se pudo obtener el carrito. Por favor, inténtalo nuevamente.");
    }
  },

  updateCart: async (cart) => {
    try {
      const response = await axiosInstance.put(`/cart/${cart.userId}`, cart);
      return response.data;
    } catch (error) {
      console.error("Error al actualizar el carrito:", error);
      throw new Error("No se pudo actualizar el carrito. Por favor, inténtalo nuevamente.");
    }
  },
};

export default CartService;