// Define GQL Schema
// Ensure Non-Nullability and Type Safety with Enums and Scalars
export const typeDefs = `#graphql
    enum AppointmentStatus {
        SCHEDULED
        COMPLETED
        CANCELED
        CONFIRMED
    }

    enum InvoiceStatus {
        PAID
        UNPAID
        OVERDUE
    }
        
    type Appointment {
        id: ID!
        patientId: String!
        patientName: String!
        date: String!
        providerName: String!
        serviceName: String!
        status: AppointmentStatus!
    }

    type Invoice {
        id: ID!
        amount: Float!
        description: String!
        dueDate: String!
        status: InvoiceStatus!
    }
    
    type Query {
        appointments: [Appointment!]!
        invoices: [Invoice!]!
    }
`;
