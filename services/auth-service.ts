import apiClient from '@/lib/api-client';

export const authService = {
  registerSeeds: async (userData: any) => {
    const response = await apiClient.post('auth/register/', userData);
    return response.data;
  },
  
  generateToken: async (credentials: any) => {
    const response = await apiClient.post('auth/login/', credentials);
    return response.data;
  },

  tokenverify: async () => {
    const response = await apiClient.post('auth/token/verify/');
    return response.data;
  }
};