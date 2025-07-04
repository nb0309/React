/**
 * 🏗️  DEVELOPMENT GUIDE - Module3 Service
 *
 * 📋 Original Requirements: Generate TypeScript interfaces and React components for a report header module that matches the VB6 Module3 specification. The module should include: 1) A TypeScript interface for report_header with SchoolName, SchoolAddress, SY (school year), and SectionName fields, 2) A React component to display the header information, 3) A service to fetch header data from an API, and 4) A page component that uses the header component and service.
 *
 * 🚀 Enhancement Ideas:
 * - Add request/response interceptors for error handling
 * - Implement retry logic for failed requests
 * - Add caching layer (React Query, SWR)
 * - Include request cancellation support
 * - Add batch operations (bulkCreate, bulkUpdate)
 * - Implement optimistic updates
 *
 * 💡 Methods to Consider Adding:
 * - search(query: string): Promise<Module3[]>
 * - bulkDelete(ids: string[]): Promise<void>
 * - export(): Promise<Blob>
 * - getStats(): Promise<{Module3Stats}>
 *
 * 🔧 Error Handling:
 * - Create custom error classes
 * - Add request/response logging
 * - Implement exponential backoff for retries
 *
 * 🚀 Performance:
 * - Add request deduplication
 * - Implement response caching
 * - Consider using React Query for state management
 */

import axios from "axios";
import {
  Module3,
  Module3CreateRequest,
  Module3UpdateRequest,
} from "../types/Module3Types";

const API_BASE_URL = "http://localhost:3000/api/module3";

export const module3Service = {
  getAll: async (): Promise<Module3[]> => {
    const response = await axios.get<Module3[]>(API_BASE_URL);
    return response.data;
  },
  create: async (data: Module3CreateRequest): Promise<Module3> => {
    const response = await axios.post<Module3>(API_BASE_URL, data);
    return response.data;
  },
  update: async (id: string, data: Module3UpdateRequest): Promise<Module3> => {
    const response = await axios.put<Module3>(`${API_BASE_URL}/${id}`, data);
    return response.data;
  },
  delete: async (id: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/${id}`);
  },
};
