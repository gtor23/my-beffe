// Type definitions

export interface Appointment {
  id: string;
  patientName: string;
  date: string;
  time: string;
  providerName: string;
  status: 'SCHEDULED' | 'COMPLETED' | 'CANCELED';
}

export interface Invoice {
  id: string;
  amount: number;
  status: 'PAID' | 'UNPAID' | 'OVERDUE';
  dueDate: string;
}
