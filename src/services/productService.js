import axiosInstance from "../api/axiosInstance";
const productService = {
  getProducts: async () => {
    try {
      const response = await axiosInstance.get('/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
};

export default productService;