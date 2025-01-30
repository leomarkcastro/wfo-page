import { DataProvider } from '../services/dataProvider';

const allData: {
    id: number;
    email: string;
    name: string;
    address: string;
}[] = [
        {
            id: 1,
            email: 'john.doe@email.com',
            name: 'John Doe',
            address: '123 Main St',
        },
        {
            id: 2,
            email: 'emma.wilson@email.com',
            name: 'Emma Wilson',
            address: '456 Oak Ave',
        },
        {
            id: 3,
            email: 'michael.brown@email.com',
            name: 'Michael Brown',
            address: '789 Pine Rd',
        },
        {
            id: 4,
            email: 'sarah.lee@email.com',
            name: 'Sarah Lee',
            address: '321 Elm St',
        },
        {
            id: 5,
            email: 'david.miller@email.com',
            name: 'David Miller',
            address: '654 Maple Dr',
        },
        {
            id: 6,
            email: 'lisa.taylor@email.com',
            name: 'Lisa Taylor',
            address: '987 Cedar Ln',
        },
        {
            id: 7,
            email: 'james.wilson@email.com',
            name: 'James Wilson',
            address: '147 Birch St',
        },
        {
            id: 8,
            email: 'anna.smith@email.com',
            name: 'Anna Smith',
            address: '258 Walnut Ave',
        },
        {
            id: 9,
            email: 'robert.jones@email.com',
            name: 'Robert Jones',
            address: '369 Spruce Rd',
        },
        {
            id: 10,
            email: 'emily.davis@email.com',
            name: 'Emily Davis',
            address: '741 Pine St',
        },
        {
            id: 11,
            email: 'william.clark@email.com',
            name: 'William Clark',
            address: '852 Oak Dr',
        },
        {
            id: 12,
            email: 'olivia.martin@email.com',
            name: 'Olivia Martin',
            address: '963 Maple Ln',
        },
        {
            id: 13,
            email: 'henry.white@email.com',
            name: 'Henry White',
            address: '159 Cedar Ave',
        },
        {
            id: 14,
            email: 'sophia.moore@email.com',
            name: 'Sophia Moore',
            address: '357 Elm Rd',
        },
        {
            id: 15,
            email: 'daniel.anderson@email.com',
            name: 'Daniel Anderson',
            address: '486 Birch Dr',
        },
        {
            id: 16,
            email: 'ava.thomas@email.com',
            name: 'Ava Thomas',
            address: '753 Walnut St',
        },
        {
            id: 17,
            email: 'joseph.jackson@email.com',
            name: 'Joseph Jackson',
            address: '951 Main Ave',
        },
        {
            id: 18,
            email: 'mia.harris@email.com',
            name: 'Mia Harris',
            address: '264 Oak Ln',
        },
        {
            id: 19,
            email: 'alexander.king@email.com',
            name: 'Alexander King',
            address: '835 Pine Dr',
        },
        {
            id: 20,
            email: 'isabella.wright@email.com',
            name: 'Isabella Wright',
            address: '147 Maple St',
        },
        {
            id: 21,
            email: 'benjamin.lopez@email.com',
            name: 'Benjamin Lopez',
            address: '369 Cedar Rd',
        },
        {
            id: 22,
            email: 'charlotte.hill@email.com',
            name: 'Charlotte Hill',
            address: '582 Elm Ave',
        },
        {
            id: 23,
            email: 'mason.scott@email.com',
            name: 'Mason Scott',
            address: '794 Birch Ln',
        },
        {
            id: 24,
            email: 'amelia.green@email.com',
            name: 'Amelia Green',
            address: '913 Walnut Dr',
        },
        {
            id: 25,
            email: 'ethan.adams@email.com',
            name: 'Ethan Adams',
            address: '246 Spruce St',
        },
        {
            id: 26,
            email: 'harper.baker@email.com',
            name: 'Harper Baker',
            address: '857 Main Rd',
        },
        {
            id: 27,
            email: 'lucas.gonzalez@email.com',
            name: 'Lucas Gonzalez',
            address: '139 Oak Ave',
        },
        {
            id: 28,
            email: 'victoria.nelson@email.com',
            name: 'Victoria Nelson',
            address: '468 Pine Ln',
        },
        {
            id: 29,
            email: 'owen.carter@email.com',
            name: 'Owen Carter',
            address: '725 Maple Dr',
        },
        {
            id: 30,
            email: 'scarlett.mitchell@email.com',
            name: 'Scarlett Mitchell',
            address: '914 Cedar St',
        },
    ];

export const SampleDataProvider: DataProvider = {
    getApiUrl: () => '/api/sample',
    create: async (args) => {
        return {
            data: allData.find((data) => data.id === parseInt(args.variables)),
        };
    },
    deleteOne: async (args) => {
        return { data: allData.find((data) => data.id === parseInt(args.id)) };
    },
    update: async (args) => {
        return { data: allData.find((data) => data.id === parseInt(args.id)) };
    },
    getOne: async (args) => {
        return { data: allData.find((data) => data.id === parseInt(args.id)) };
    },
    getList: async (args) => {
        let { page, perPage } = args.pagination;
        page = page - 1; // Convert to 0-based index

        // Apply filters
        let filteredData = [...allData];
        if (args.filters && args.filters.length > 0) {
            filteredData = allData.filter(item =>
                args.filters.every(filter => {
                    // @ts-ignore
                    const value = item[filter.field];
                    switch (filter.operator) {
                        case 'eq':
                            return value === filter.value;
                        case 'contains':
                            return value?.toString().toLowerCase().includes(filter.value.toLowerCase());
                        case 'gt':
                            return value > filter.value;
                        case 'lt':
                            return value < filter.value;
                        case 'gte':
                            return value >= filter.value;
                        case 'lte':
                            return value <= filter.value;
                        case 'neq':
                            return value !== filter.value;
                        default:
                            return true;
                    }
                })
            );
        }

        // Apply sorting
        if (args.sorters && args.sorters.length > 0) {
            const sorter = args.sorters[0];
            filteredData.sort((a, b) => {
                // @ts-ignore
                if (a[sorter.field] < b[sorter.field]) {
                    return sorter.order === 'asc' ? -1 : 1;
                }
                // @ts-ignore
                if (a[sorter.field] > b[sorter.field]) {
                    return sorter.order === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }

        // Apply pagination
        const paginatedData = filteredData.slice(
            page * perPage,
            (page + 1) * perPage
        );

        return {
            data: paginatedData,
            total: filteredData.length,
            page: page + 1,
            perPage,
            totalPages: Math.ceil(filteredData.length / perPage),
        };
    },
};
