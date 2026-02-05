import { networkService } from './NetworkService';
import { 
  Product, 
  ProductsResponse, 
  Category, 
  SearchParams, 
  ApiResponse,
  Cart,
  CartItem 
} from '@/types';
import { API_ENDPOINTS } from '@/constants';

/**
 * API Service class that handles all API calls using the NetworkService
 * This provides a clean interface for components to interact with the backend
 */
class ApiService {
  /**
   * Get all products with optional filters and pagination
   */
  static async getProducts(params?: SearchParams): Promise<ProductsResponse> {
    try {
      const queryParams = {
        page: params?.page || 1,
        limit: params?.limit || 12,
        category: params?.category,
        query: params?.query,
        sort: params?.sort,
        ...params?.filters,
      };

      const response = await networkService.get<ApiResponse<ProductsResponse>>(
        API_ENDPOINTS.PRODUCTS,
        queryParams
      );

      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  /**
   * Get a single product by ID
   */
  static async getProduct(id: string): Promise<Product> {
    try {
      const response = await networkService.get<ApiResponse<Product>>(
        `${API_ENDPOINTS.PRODUCTS}/${id}`
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }

  /**
   * Get all categories
   */
  static async getCategories(): Promise<Category[]> {
    try {
      const response = await networkService.get<ApiResponse<Category[]>>(
        API_ENDPOINTS.CATEGORIES
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }

  /**
   * Search products
   */
  static async searchProducts(query: string, filters?: SearchParams): Promise<ProductsResponse> {
    try {
      const params = {
        query,
        page: filters?.page || 1,
        limit: filters?.limit || 12,
        ...filters?.filters,
      };

      const response = await networkService.get<ApiResponse<ProductsResponse>>(
        API_ENDPOINTS.SEARCH,
        params
      );

      return response.data;
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  }

  /**
   * Get featured products
   */
  static async getFeaturedProducts(limit: number = 8): Promise<Product[]> {
    try {
      const response = await networkService.get<ApiResponse<Product[]>>(
        `${API_ENDPOINTS.PRODUCTS}/featured`,
        { limit }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching featured products:', error);
      throw error;
    }
  }

  /**
   * Get products by category
   */
  static async getProductsByCategory(categoryId: string, params?: SearchParams): Promise<ProductsResponse> {
    try {
      const queryParams = {
        page: params?.page || 1,
        limit: params?.limit || 12,
        sort: params?.sort,
        ...params?.filters,
      };

      const response = await networkService.get<ApiResponse<ProductsResponse>>(
        `${API_ENDPOINTS.CATEGORIES}/${categoryId}/products`,
        queryParams
      );

      return response.data;
    } catch (error) {
      console.error('Error fetching products by category:', error);
      throw error;
    }
  }

  /**
   * Get related products
   */
  static async getRelatedProducts(productId: string, limit: number = 4): Promise<Product[]> {
    try {
      const response = await networkService.get<ApiResponse<Product[]>>(
        `${API_ENDPOINTS.PRODUCTS}/${productId}/related`,
        { limit }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching related products:', error);
      throw error;
    }
  }

  // Cart API methods (for future implementation)
  /**
   * Get user's cart
   */
  static async getCart(): Promise<Cart> {
    try {
      const response = await networkService.get<ApiResponse<Cart>>(
        API_ENDPOINTS.CART
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching cart:', error);
      throw error;
    }
  }

  /**
   * Add item to cart
   */
  static async addToCart(item: Omit<CartItem, 'product'>): Promise<Cart> {
    try {
      const response = await networkService.post<ApiResponse<Cart>>(
        `${API_ENDPOINTS.CART}/items`,
        item
      );
      return response.data;
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  }

  /**
   * Update cart item quantity
   */
  static async updateCartItem(itemId: string, quantity: number): Promise<Cart> {
    try {
      const response = await networkService.patch<ApiResponse<Cart>>(
        `${API_ENDPOINTS.CART}/items/${itemId}`,
        { quantity }
      );
      return response.data;
    } catch (error) {
      console.error('Error updating cart item:', error);
      throw error;
    }
  }

  /**
   * Remove item from cart
   */
  static async removeFromCart(itemId: string): Promise<Cart> {
    try {
      const response = await networkService.delete<ApiResponse<Cart>>(
        `${API_ENDPOINTS.CART}/items/${itemId}`
      );
      return response.data;
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
  }

  /**
   * Clear cart
   */
  static async clearCart(): Promise<void> {
    try {
      await networkService.delete<ApiResponse<void>>(
        API_ENDPOINTS.CART
      );
    } catch (error) {
      console.error('Error clearing cart:', error);
      throw error;
    }
  }

  // Authentication methods (for future implementation)
  /**
   * Login user
   */
  static async login(email: string, password: string): Promise<{ token: string; user: any }> {
    try {
      const response = await networkService.post<ApiResponse<{ token: string; user: any }>>(
        `${API_ENDPOINTS.AUTH}/login`,
        { email, password }
      );
      
      // Set auth token in network service
      networkService.setAuthToken(response.data.token);
      
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  }

  /**
   * Register user
   */
  static async register(userData: any): Promise<{ token: string; user: any }> {
    try {
      const response = await networkService.post<ApiResponse<{ token: string; user: any }>>(
        `${API_ENDPOINTS.AUTH}/register`,
        userData
      );
      
      // Set auth token in network service
      networkService.setAuthToken(response.data.token);
      
      return response.data;
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    }
  }

  /**
   * Logout user
   */
  static async logout(): Promise<void> {
    try {
      await networkService.post<ApiResponse<void>>(
        `${API_ENDPOINTS.AUTH}/logout`
      );
      
      // Remove auth token from network service
      networkService.removeAuthToken();
    } catch (error) {
      console.error('Error logging out:', error);
      // Remove token even if logout fails
      networkService.removeAuthToken();
      throw error;
    }
  }
}

export default ApiService;