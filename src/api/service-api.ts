import { serviceClient } from './service-client';
import { DoctorsList, Pagination } from './types';

export const serviceApi = {
  getDoctors: async (params: Pagination): Promise<DoctorsList> => {
    const { data } = await serviceClient.get('/doctors', { params });
    return data;
  },
};
