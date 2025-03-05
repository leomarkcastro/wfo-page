import { DataProvider } from '../services/dataProvider';

// Mock data for testing
const mockMembershipApplications = [
    {
        id: '1',
        name: 'John Smith',
        email: 'john.smith@example.com',
        phoneNumber: '+1-555-123-4567',
        country: 'United States',
        applicationDate: new Date('2023-10-15T09:00:00').getTime(),
        status: 'Pending',
        memberType: 'WFO Fellow',
        society: 'American Association of Orthodontists',
        createdAt: new Date('2023-10-15T09:00:00').getTime(),
        updatedAt: new Date('2023-10-15T09:00:00').getTime(),
    },
    {
        id: '2',
        name: 'Maria Garcia',
        email: 'maria.garcia@example.com',
        phoneNumber: '+34-612-345-678',
        country: 'Spain',
        applicationDate: new Date('2023-11-20T10:00:00').getTime(),
        status: 'Approved',
        memberType: 'WFO Member',
        society: 'Spanish Society of Orthodontics',
        createdAt: new Date('2023-11-20T10:00:00').getTime(),
        updatedAt: new Date('2023-12-05T14:30:00').getTime(),
    },
    {
        id: '3',
        name: 'Hiroshi Tanaka',
        email: 'hiroshi.tanaka@example.com',
        phoneNumber: '+81-3-1234-5678',
        country: 'Japan',
        applicationDate: new Date('2024-01-10T13:00:00').getTime(),
        status: 'Pending',
        memberType: 'WFO Associate',
        society: 'Japanese Orthodontic Society',
        createdAt: new Date('2024-01-10T13:00:00').getTime(),
        updatedAt: new Date('2024-01-10T13:00:00').getTime(),
    },
    {
        id: '4',
        name: 'Sarah Johnson',
        email: 'sarah.johnson@example.com',
        phoneNumber: '+1-555-987-6543',
        country: 'Canada',
        applicationDate: new Date('2024-02-15T11:30:00').getTime(),
        status: 'Rejected',
        memberType: 'WFO Student',
        society: 'Canadian Association of Orthodontists',
        createdAt: new Date('2024-02-15T11:30:00').getTime(),
        updatedAt: new Date('2024-02-28T09:45:00').getTime(),
    },
    {
        id: '5',
        name: 'Ahmed Hassan',
        email: 'ahmed.hassan@example.com',
        phoneNumber: '+20-2-1234-5678',
        country: 'Egypt',
        applicationDate: new Date('2024-03-05T14:15:00').getTime(),
        status: 'Pending',
        memberType: 'WFO Fellow',
        society: 'Egyptian Orthodontic Society',
        createdAt: new Date('2024-03-05T14:15:00').getTime(),
        updatedAt: new Date('2024-03-05T14:15:00').getTime(),
    },
    {
        id: '6',
        name: 'Emma Wilson',
        email: 'emma.wilson@example.com',
        phoneNumber: '+44-20-1234-5678',
        country: 'United Kingdom',
        applicationDate: new Date('2024-04-12T10:00:00').getTime(),
        status: 'Approved',
        memberType: 'WFO Member',
        society: 'British Orthodontic Society',
        createdAt: new Date('2024-04-12T10:00:00').getTime(),
        updatedAt: new Date('2024-04-20T16:30:00').getTime(),
    },
    {
        id: '7',
        name: 'Carlos Rodriguez',
        email: 'carlos.rodriguez@example.com',
        phoneNumber: '+52-55-1234-5678',
        country: 'Mexico',
        applicationDate: new Date('2024-05-08T09:30:00').getTime(),
        status: 'Pending',
        memberType: 'WFO Associate',
        society: 'Mexican Association of Orthodontics',
        createdAt: new Date('2024-05-08T09:30:00').getTime(),
        updatedAt: new Date('2024-05-08T09:30:00').getTime(),
    },
    {
        id: '8',
        name: 'Anna Schmidt',
        email: 'anna.schmidt@example.com',
        phoneNumber: '+49-30-1234-5678',
        country: 'Germany',
        applicationDate: new Date('2024-06-15T13:45:00').getTime(),
        status: 'Approved',
        memberType: 'WFO Fellow',
        society: 'German Orthodontic Society',
        createdAt: new Date('2024-06-15T13:45:00').getTime(),
        updatedAt: new Date('2024-06-22T11:20:00').getTime(),
    }
];

// Helper function to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const MembershipApplicationsDataProvider: DataProvider = {
    name: 'MembershipApplicationsDataProvider',
    getList: async (args) => {
        // Simulate API delay
        await delay(500);

        let filteredApplications = [...mockMembershipApplications];
        
        // Apply search if provided
        if (args.search) {
            const searchLower = args.search.toLowerCase();
            filteredApplications = filteredApplications.filter(application => 
                application.name.toLowerCase().includes(searchLower) || 
                application.email.toLowerCase().includes(searchLower) ||
                application.country.toLowerCase().includes(searchLower) ||
                application.status.toLowerCase().includes(searchLower) ||
                application.memberType.toLowerCase().includes(searchLower) ||
                application.society.toLowerCase().includes(searchLower)
            );
        }
        
        // Apply filters if provided
        if (args.filters && args.filters.length > 0) {
            filteredApplications = filteredApplications.filter(application => {
                return args.filters.every(filter => {
                    const value = application[filter.field];
                    
                    switch (filter.operator) {
                        case 'contains':
                            return value.toLowerCase().includes(filter.value.toLowerCase());
                        case 'equals':
                            return value === filter.value;
                        case 'lt':
                            return value < filter.value;
                        case 'lte':
                            return value <= filter.value;
                        case 'gt':
                            return value > filter.value;
                        case 'gte':
                            return value >= filter.value;
                        default:
                            return true;
                    }
                });
            });
        }
        
        // Apply sorting if provided
        if (args.sorters && args.sorters.length > 0 && args.sorters[0].field) {
            const { field, order } = args.sorters[0];
            filteredApplications.sort((a, b) => {
                if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
                if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
                return 0;
            });
        }
        
        // Apply pagination
        const total = filteredApplications.length;
        const totalPages = Math.ceil(total / args.pagination.perPage);
        const start = (args.pagination.page - 1) * args.pagination.perPage;
        const end = start + args.pagination.perPage;
        const paginatedApplications = filteredApplications.slice(start, end);

        return {
            data: paginatedApplications,
            total: total,
            page: args.pagination.page,
            perPage: args.pagination.perPage,
            totalPages: totalPages,
        };
    },
    getOne: async (args) => {
        // Simulate API delay
        await delay(300);
        
        const application = mockMembershipApplications.find(a => a.id === args.id);
        
        if (!application) {
            throw new Error(`Membership application with id ${args.id} not found`);
        }
        
        return {
            data: application
        };
    },
    create: async (args) => {
        // Simulate API delay
        await delay(700);
        
        const newId = (parseInt(mockMembershipApplications[mockMembershipApplications.length - 1].id) + 1).toString();
        const now = new Date().getTime();
        
        const newApplication = {
            id: newId,
            ...args.variables,
            createdAt: now,
            updatedAt: now
        };
        
        mockMembershipApplications.push(newApplication);
        
        return {
            id: newId
        };
    },
    update: async (args) => {
        // Simulate API delay
        await delay(600);
        
        const index = mockMembershipApplications.findIndex(a => a.id === args.id);
        
        if (index === -1) {
            throw new Error(`Membership application with id ${args.id} not found`);
        }
        
        mockMembershipApplications[index] = {
            ...mockMembershipApplications[index],
            ...args.variables,
            updatedAt: new Date().getTime()
        };
        
        return {
            id: args.id
        };
    },
    deleteOne: async (args) => {
        // Simulate API delay
        await delay(500);
        
        const index = mockMembershipApplications.findIndex(a => a.id === args.id);
        
        if (index === -1) {
            throw new Error(`Membership application with id ${args.id} not found`);
        }
        
        mockMembershipApplications.splice(index, 1);
        
        return {
            id: args.id
        };
    }
}; 