import axios, { AxiosInstance, AxiosResponse } from "axios";

class ApiService {
  private static instance: ApiService;
  private api: AxiosInstance;

  private constructor() {
    this.api = axios.create({
      baseURL: process.env.BACKEND_URL, // Replace with your API base URL
      timeout: 1000,
      headers: { "Content-Type": "application/json" },
    });
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  public async get<T>(
    url: string,
    params?: Record<string, unknown>
  ): Promise<AxiosResponse<T>> {
    return this.api.get<T>(url, { params });
  }

  public async post<T>(url: string, data: unknown): Promise<AxiosResponse<T>> {
    return this.api.post<T>(url, data);
  }

  public async put<T>(url: string, data: unknown): Promise<AxiosResponse<T>> {
    return this.api.put<T>(url, data);
  }

  public async delete<T>(url: string): Promise<AxiosResponse<T>> {
    return this.api.delete<T>(url);
  }
}

export default ApiService;
