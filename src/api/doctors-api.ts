import { doctorsClient } from './doctors-client';
import { DoctorsList, Pagination } from './types';

export const doctorsApi = {
  getDoctors: async (params: Pagination): Promise<DoctorsList> => {
    const { data } = await doctorsClient.get('/doctors', { params });
    return data;
  },
};
