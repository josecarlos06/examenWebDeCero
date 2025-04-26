export class HttpClient {
   private baseUrl: string;

   constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
   }

   private async request<T>(url: string, method: string, body?: any, token?: string): Promise<T> {
      const headers: HeadersInit = {
         'Content-Type': 'application/json',
         'Access-Control-Allow-Origin': 'http://localhost:5173',
         'Access-Control-Allow-Credentials': 'true'
      };

      if (token) {
         headers['Authorization'] = `Bearer ${token}`;
       }
       debugger
      const response = await fetch(`${this.baseUrl}${url}`, {
         method,
         headers,
         body: body ? JSON.stringify(body) : undefined,
      });

      if (!response.ok) {
         const errorText = await response.text();
         throw new Error(`Error ${response.status}: ${errorText}`);
      }

      return response.json();
   }

   get<T>(url: string, token: string): Promise<T> {
      return this.request<T>(url, 'GET', null ,token);
   }

   post<T>(url: string, body: any, token: string): Promise<T> {
      return this.request<T>(url, 'POST', body, token);
   }
}
