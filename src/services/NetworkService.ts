import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { NetworkConfig, RequestConfig, NetworkError } from '@/types';

// Extend AxiosRequestConfig to include metadata
interface ExtendedAxiosRequestConfig extends AxiosRequestConfig {
  metadata?: {
    startTime: Date;
  };
}

/**
 * Singleton Network Service class for handling all API requests
 * This class provides a centralized way to manage HTTP requests with Axios
 */
class NetworkService {
  private static instance: NetworkService;
  private axiosInstance: AxiosInstance;
  private config: NetworkConfig;

  private constructor() {
    this.config = {
      baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api',
      timeout: 30000, // 30 seconds
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    };

    this.axiosInstance = axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout,
      headers: this.config.headers,
    });
    this.setupInterceptors();
  }

  /**
   * Get singleton instance of NetworkService
   */
  public static getInstance(): NetworkService {
    if (!NetworkService.instance) {
      NetworkService.instance = new NetworkService();
    }
    return NetworkService.instance;
  }

  /**
   * Setup request and response interceptors
   */
  private setupInterceptors(): void {
    // Request interceptor
    this.axiosInstance.interceptors.request.use(
      (config: any) => {
        // Add auth token if available
        const token = this.getAuthToken();
        if (token) {
          config.headers = config.headers || {};
          config.headers.Authorization = `Bearer ${token}`;
        }

        // Add request timestamp for debugging
        config.metadata = { startTime: new Date() };
        
        console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
      },
      (error) => {
        console.error('❌ Request Error:', error);
        return Promise.reject(this.handleError(error));
      }
    );

    // Response interceptor
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        const config = response.config as any;
        const duration = config.metadata?.startTime ?
          new Date().getTime() - config.metadata.startTime.getTime() : 0;
        console.log(`✅ API Response: ${config.method?.toUpperCase()} ${config.url} (${duration}ms)`);
        return response;
      },
      (error) => {
        console.error('❌ Response Error:', error);
        return Promise.reject(this.handleError(error));
      }
    );
  }

  /**
   * Get authentication token from localStorage or cookies
   */
  private getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken') || null;
    }
    return null;
  }

  /**
   * Handle and format errors consistently
   */
  private handleError(error: any): NetworkError {
    const networkError: NetworkError = {
      message: 'An unexpected error occurred',
      status: 0,
      code: 'UNKNOWN_ERROR',
    };

    if (error.response) {
      // Server responded with error status
      networkError.message = error.response.data?.message || error.message;
      networkError.status = error.response.status;
      networkError.code = error.response.data?.code || `HTTP_${error.response.status}`;
      networkError.details = error.response.data;
    } else if (error.request) {
      // Request was made but no response received
      networkError.message = 'Network error. Please check your connection.';
      networkError.code = 'NETWORK_ERROR';
    } else {
      // Something else happened
      networkError.message = error.message;
      networkError.code = 'REQUEST_ERROR';
    }

    return networkError;
  }

  /**
   * Generic request method
   */
  public async request<T>(config: RequestConfig): Promise<T> {
    try {
      const axiosConfig: AxiosRequestConfig = {
        method: config.method,
        url: config.url,
        data: config.data,
        params: config.params,
        headers: { ...this.config.headers, ...config.headers },
      };

      const response = await this.axiosInstance.request<T>(axiosConfig);
      return response.data;
    } catch (error) {
      throw error; // Error is already handled by interceptor
    }
  }

  /**
   * GET request
   */
  public async get<T>(url: string, params?: Record<string, any>, headers?: Record<string, string>): Promise<T> {
    return this.request<T>({
      method: 'GET',
      url,
      params,
      headers,
    });
  }

  /**
   * POST request
   */
  public async post<T>(url: string, data?: any, headers?: Record<string, string>): Promise<T> {
    return this.request<T>({
      method: 'POST',
      url,
      data,
      headers,
    });
  }

  /**
   * PUT request
   */
  public async put<T>(url: string, data?: any, headers?: Record<string, string>): Promise<T> {
    return this.request<T>({
      method: 'PUT',
      url,
      data,
      headers,
    });
  }

  /**
   * PATCH request
   */
  public async patch<T>(url: string, data?: any, headers?: Record<string, string>): Promise<T> {
    return this.request<T>({
      method: 'PATCH',
      url,
      data,
      headers,
    });
  }

  /**
   * DELETE request
   */
  public async delete<T>(url: string, headers?: Record<string, string>): Promise<T> {
    return this.request<T>({
      method: 'DELETE',
      url,
      headers,
    });
  }

  /**
   * Update base configuration
   */
  public updateConfig(newConfig: Partial<NetworkConfig>): void {
    this.config = { ...this.config, ...newConfig };
    
    // Update axios instance defaults properly
    if (newConfig.baseURL) {
      this.axiosInstance.defaults.baseURL = newConfig.baseURL;
    }
    if (newConfig.timeout) {
      this.axiosInstance.defaults.timeout = newConfig.timeout;
    }
    if (newConfig.headers) {
      Object.assign(this.axiosInstance.defaults.headers.common, newConfig.headers);
    }
  }

  /**
   * Set authentication token
   */
  public setAuthToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  /**
   * Remove authentication token
   */
  public removeAuthToken(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
    }
    delete this.axiosInstance.defaults.headers.common['Authorization'];
  }

  /**
   * Cancel all pending requests
   */
  public cancelAllRequests(): void {
    // Implementation for canceling requests if needed
    console.log('Canceling all pending requests...');
  }

  /**
   * Get current configuration
   */
  public getConfig(): NetworkConfig {
    return { ...this.config };
  }
}

// Export singleton instance
export const networkService = NetworkService.getInstance();
export default NetworkService;