import { DataProvider } from '../services/dataProvider';

// Mock data for testing
const mockEvents = [
    {
        id: '1',
        title: 'Annual Conference 2023',
        description: 'Join us for the annual orthodontics conference featuring keynote speakers and workshops.',
        startDate: new Date('2023-10-15T09:00:00').getTime(),
        endDate: new Date('2023-10-17T17:00:00').getTime(),
        location: 'Chicago, IL',
        isCancelled: false,
        createdAt: new Date('2023-05-10T12:00:00').getTime(),
        updatedAt: new Date('2023-05-10T12:00:00').getTime(),
    },
    {
        id: '2',
        title: 'Regional Symposium',
        description: 'Regional symposium on the latest orthodontic techniques and research.',
        startDate: new Date('2023-11-20T10:00:00').getTime(),
        endDate: new Date('2023-11-21T16:00:00').getTime(),
        location: 'Boston, MA',
        isCancelled: false,
        createdAt: new Date('2023-06-15T14:30:00').getTime(),
        updatedAt: new Date('2023-06-15T14:30:00').getTime(),
    },
    {
        id: '3',
        title: 'Webinar: New Treatment Approaches',
        description: 'Online webinar discussing innovative treatment approaches in orthodontics.',
        startDate: new Date('2024-01-10T13:00:00').getTime(),
        endDate: new Date('2024-01-10T15:00:00').getTime(),
        location: 'Virtual',
        isCancelled: false,
        createdAt: new Date('2023-12-01T09:45:00').getTime(),
        updatedAt: new Date('2023-12-01T09:45:00').getTime(),
    },
    {
        id: '4',
        title: 'Spring Workshop Series',
        description: 'A series of hands-on workshops for orthodontic professionals.',
        startDate: new Date('2024-04-05T09:00:00').getTime(),
        endDate: new Date('2024-04-07T17:00:00').getTime(),
        location: 'San Francisco, CA',
        isCancelled: false,
        createdAt: new Date('2024-01-20T11:15:00').getTime(),
        updatedAt: new Date('2024-01-20T11:15:00').getTime(),
    },
    {
        id: '5',
        title: 'International Congress',
        description: 'International congress bringing together orthodontists from around the world.',
        startDate: new Date('2024-06-15T08:00:00').getTime(),
        endDate: new Date('2024-06-18T18:00:00').getTime(),
        location: 'London, UK',
        isCancelled: false,
        createdAt: new Date('2024-02-10T10:30:00').getTime(),
        updatedAt: new Date('2024-02-10T10:30:00').getTime(),
    },
    {
        id: '6',
        title: 'Summer Educational Retreat',
        description: 'Educational retreat focusing on professional development and networking.',
        startDate: new Date('2024-07-20T09:00:00').getTime(),
        endDate: new Date('2024-07-23T16:00:00').getTime(),
        location: 'Miami, FL',
        isCancelled: false,
        createdAt: new Date('2024-03-05T13:20:00').getTime(),
        updatedAt: new Date('2024-03-05T13:20:00').getTime(),
    },
    {
        id: '7',
        title: 'Fall Certification Course',
        description: 'Certification course for new orthodontic techniques and technologies.',
        startDate: new Date('2024-09-10T08:30:00').getTime(),
        endDate: new Date('2024-09-12T17:30:00').getTime(),
        location: 'Denver, CO',
        isCancelled: false,
        createdAt: new Date('2024-04-15T09:10:00').getTime(),
        updatedAt: new Date('2024-04-15T09:10:00').getTime(),
    },
    {
        id: '8',
        title: 'Annual Conference 2024',
        description: 'Join us for the annual orthodontics conference featuring keynote speakers and workshops.',
        startDate: new Date('2024-10-18T09:00:00').getTime(),
        endDate: new Date('2024-10-20T17:00:00').getTime(),
        location: 'New York, NY',
        isCancelled: false,
        createdAt: new Date('2024-05-01T11:45:00').getTime(),
        updatedAt: new Date('2024-05-01T11:45:00').getTime(),
    },
    {
        id: '9',
        title: 'Cancelled Workshop',
        description: 'This workshop has been cancelled due to unforeseen circumstances.',
        startDate: new Date('2024-08-15T09:00:00').getTime(),
        endDate: new Date('2024-08-16T17:00:00').getTime(),
        location: 'Seattle, WA',
        isCancelled: true,
        createdAt: new Date('2024-05-15T10:30:00').getTime(),
        updatedAt: new Date('2024-06-01T14:45:00').getTime(),
    }
];

// Helper function to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const EventsDataProvider: DataProvider = {
    name: 'EventsDataProvider',
    getList: async (args) => {
        // Simulate API delay
        await delay(500);

        let filteredEvents = [...mockEvents];
        
        // Apply search if provided
        if (args.search) {
            const searchLower = args.search.toLowerCase();
            filteredEvents = filteredEvents.filter(event => 
                event.title.toLowerCase().includes(searchLower) || 
                event.description.toLowerCase().includes(searchLower) ||
                event.location.toLowerCase().includes(searchLower)
            );
        }
        
        // Apply filters if provided
        if (args.filters && args.filters.length > 0) {
            filteredEvents = filteredEvents.filter(event => {
                return args.filters.every(filter => {
                    const value = event[filter.field];
                    
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
            filteredEvents.sort((a, b) => {
                if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
                if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
                return 0;
            });
        }
        
        // Apply pagination
        const total = filteredEvents.length;
        const totalPages = Math.ceil(total / args.pagination.perPage);
        const start = (args.pagination.page - 1) * args.pagination.perPage;
        const end = start + args.pagination.perPage;
        const paginatedEvents = filteredEvents.slice(start, end);

        return {
            data: paginatedEvents,
            total: total,
            page: args.pagination.page,
            perPage: args.pagination.perPage,
            totalPages: totalPages,
        };
    },
    getOne: async (args) => {
        // Simulate API delay
        await delay(300);
        
        const event = mockEvents.find(e => e.id === args.id);
        
        if (!event) {
            throw new Error(`Event with id ${args.id} not found`);
        }
        
        return {
            data: event
        };
    },
    create: async (args) => {
        // Simulate API delay
        await delay(700);
        
        const newId = (parseInt(mockEvents[mockEvents.length - 1].id) + 1).toString();
        const now = new Date().getTime();
        
        const newEvent = {
            id: newId,
            ...args.variables,
            createdAt: now,
            updatedAt: now
        };
        
        mockEvents.push(newEvent);
        
        return {
            id: newId
        };
    },
    update: async (args) => {
        // Simulate API delay
        await delay(600);
        
        const index = mockEvents.findIndex(e => e.id === args.id);
        
        if (index === -1) {
            throw new Error(`Event with id ${args.id} not found`);
        }
        
        mockEvents[index] = {
            ...mockEvents[index],
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
        
        const index = mockEvents.findIndex(e => e.id === args.id);
        
        if (index === -1) {
            throw new Error(`Event with id ${args.id} not found`);
        }
        
        mockEvents.splice(index, 1);
        
        return {
            id: args.id
        };
    },
    aggregate: async () => {
        // Simulate API delay
        await delay(400);
        
        // Return in the format expected by the interface
        return {
            breakdown: [
                {
                    countBy: 'status',
                    count: mockEvents.length
                }
            ]
        };
    },
    groupBy: async (params) => {
        // Simulate API delay
        await delay(400);
        
        // Return in the format expected by the interface
        const result = {
            breakdown: [] as { uniqueIdentifier: string; counts: { countBy: string; count: number }[] }[]
        };
        
        if (params.groupBy && params.groupBy.length > 0) {
            const groupByField = params.groupBy[0];
            const groups: Record<string, number> = {};
            
            // Count occurrences of each value for the groupBy field
            mockEvents.forEach(event => {
                const value = event[groupByField];
                if (!groups[value]) {
                    groups[value] = 0;
                }
                groups[value]++;
            });
            
            // Format the result according to the expected structure
            Object.entries(groups).forEach(([key, count]) => {
                result.breakdown.push({
                    uniqueIdentifier: key,
                    counts: [
                        {
                            countBy: groupByField,
                            count
                        }
                    ]
                });
            });
        }
        
        return result;
    }
}; 