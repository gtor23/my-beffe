import axios from "axios";
import type { Appointment, Invoice } from "./types.ts";

const MOCK_API_BASE = process.env.MOCK_API_BASE;

export const resolvers = {
    Query: {
        appointments: async (): Promise<Appointment[]> => {
            try {
                const { data } = await axios.get(`${MOCK_API_BASE}/appointments`);
                return data.appointments;
            } catch (error) {
                console.error("Error fetching appointments:", error);
                throw new Error("Failed to fetch appointments");
            }
        },
        invoices: async (): Promise<Invoice[]> => {
            try {
                const { data } = await axios.get(`${MOCK_API_BASE}/billing`);
                return data.invoices;
            } catch (error) {
                console.error("Error fetching invoices:", error);
                throw new Error("Failed to fetch invoices");
            }
        }
    }
};