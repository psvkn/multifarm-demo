import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiClient {
  protected client: AxiosInstance;

  constructor(options?: AxiosRequestConfig) {
    this.client = axios.create(options);
  }

  get<ResponseType extends unknown>(
    url: string,
    options: AxiosRequestConfig,
  ): Promise<AxiosResponse<ResponseType>> {
    return this.client.get<ResponseType>(url, options);
  }
}

export default ApiClient;
