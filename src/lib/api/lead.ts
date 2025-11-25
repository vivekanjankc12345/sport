import { apiClient } from "./client";
import type { LeadFormData, LeadApiResponse } from "@/types";
import { API_CONFIG } from "@/constants";

export const leadApi = {
  submit: async (data: LeadFormData): Promise<LeadApiResponse> => {
    return apiClient.post<LeadFormData>(API_CONFIG.ENDPOINTS.LEAD, data);
  },
};

