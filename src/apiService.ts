import axios, { AxiosInstance, AxiosResponse } from "axios";

class ApiService {
  private static instance: ApiService;
  private api: AxiosInstance;

  private constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
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

  public async getTransactions<T>(
    skip: number,
    limit: number
  ): Promise<AxiosResponse<T>> {
    console.log(process.env.REACT_APP_BACKEND_URL);
    return this.api.get<T>(`/transactions?skip=${skip}&limit=${limit}`);
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
