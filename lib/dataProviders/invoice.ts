import { DataProvider } from '../services/dataProvider';

// Mock uuid function since we're having issues installing the package
const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// Mock data for invoices
const mockInvoices = [
  {
    id: '1',
    customerName: 'John Doe',
    items: [
      { id: '1', name: 'Web Development', price: 1200, quantity: 1 },
      { id: '2', name: 'SEO Services', price: 500, quantity: 1 },
    ],
    total: 1700,
    createdAt: new Date('2023-05-15').toISOString(),
    paidAt: new Date('2023-05-20').toISOString(),
    status: 'paid',
    paymentLink: 'https://example.com/pay/1',
  },
  {
    id: '2',
    customerName: 'Jane Smith',
    items: [
      { id: '3', name: 'Logo Design', price: 300, quantity: 1 },
      { id: '4', name: 'Business Cards', price: 150, quantity: 2 },
    ],
    total: 600,
    createdAt: new Date('2023-06-10').toISOString(),
    paidAt: null,
    status: 'pending',
    paymentLink: 'https://example.com/pay/2',
  },
  {
    id: '3',
    customerName: 'Robert Johnson',
    items: [
      { id: '5', name: 'Content Writing', price: 800, quantity: 1 },
    ],
    total: 800,
    createdAt: new Date('2023-07-05').toISOString(),
    paidAt: new Date('2023-07-10').toISOString(),
    status: 'paid',
    paymentLink: 'https://example.com/pay/3',
  },
  {
    id: '4',
    customerName: 'Emily Davis',
    items: [
      { id: '6', name: 'Social Media Management', price: 450, quantity: 1 },
      { id: '7', name: 'Email Marketing', price: 350, quantity: 1 },
    ],
    total: 800,
    createdAt: new Date('2023-08-20').toISOString(),
    paidAt: null,
    status: 'pending',
    paymentLink: 'https://example.com/pay/4',
  },
  {
    id: '5',
    customerName: 'Michael Wilson',
    items: [
      { id: '8', name: 'Website Maintenance', price: 200, quantity: 3 },
    ],
    total: 600,
    createdAt: new Date('2023-09-15').toISOString(),
    paidAt: new Date('2023-09-25').toISOString(),
    status: 'paid',
    paymentLink: 'https://example.com/pay/5',
  },
];

// Mock data for service purchases that can be added to invoices
export const mockServicePurchases = [
  { id: '101', name: 'Web Development', price: 1200 },
  { id: '102', name: 'SEO Services', price: 500 },
  { id: '103', name: 'Logo Design', price: 300 },
  { id: '104', name: 'Business Cards', price: 150 },
  { id: '105', name: 'Content Writing', price: 800 },
  { id: '106', name: 'Social Media Management', price: 450 },
  { id: '107', name: 'Email Marketing', price: 350 },
  { id: '108', name: 'Website Maintenance', price: 200 },
];

// Keep a local copy of the data that we can modify
let invoices = [...mockInvoices];

export const InvoiceDataProvider: DataProvider = {
  name: 'InvoiceDataProvider',
  getList: async (args) => {
    // Apply search if provided
    let filteredData = [...invoices];
    if (args.search) {
      const searchLower = args.search.toLowerCase();
      filteredData = filteredData.filter(
        (invoice) =>
          invoice.customerName.toLowerCase().includes(searchLower) ||
          invoice.items.some((item) => item.name.toLowerCase().includes(searchLower))
      );
    }

    // Apply filters if provided
    if (args.filters && args.filters.length > 0) {
      filteredData = filteredData.filter((invoice) => {
        return args.filters.every((filter) => {
          const value = invoice[filter.field];
          
          switch (filter.operator) {
            case 'equals':
              return value === filter.value;
            case 'contains':
              return typeof value === 'string' && value.toLowerCase().includes(filter.value.toLowerCase());
            case 'gt':
              return value > filter.value;
            case 'lt':
              return value < filter.value;
            case 'gte':
              return value >= filter.value;
            case 'lte':
              return value <= filter.value;
            default:
              return true;
          }
        });
      });
    }

    // Apply sorting if provided
    if (args.sorters && args.sorters.length > 0) {
      const sorter = args.sorters[0];
      filteredData.sort((a, b) => {
        const aValue = a[sorter.field];
        const bValue = b[sorter.field];
        
        if (aValue < bValue) return sorter.order === 'asc' ? -1 : 1;
        if (aValue > bValue) return sorter.order === 'asc' ? 1 : -1;
        return 0;
      });
    }

    // Apply pagination
    const startIndex = (args.pagination.page - 1) * args.pagination.perPage;
    const endIndex = startIndex + args.pagination.perPage;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    return {
      data: paginatedData,
      total: filteredData.length,
      page: args.pagination.page,
      perPage: args.pagination.perPage,
      totalPages: Math.ceil(filteredData.length / args.pagination.perPage),
    };
  },

  getOne: async (args) => {
    const invoice = invoices.find((i) => i.id === args.id);
    return {
      data: invoice || null,
    };
  },

  create: async (args) => {
    const newId = uuidv4();
    const newInvoice = {
      id: newId,
      ...args.variables,
      createdAt: new Date().toISOString(),
      paymentLink: `https://example.com/pay/${newId}`,
    };
    
    invoices.push(newInvoice);
    
    return {
      id: newId,
    };
  },

  update: async (args) => {
    const index = invoices.findIndex((i) => i.id === args.id);
    if (index !== -1) {
      invoices[index] = {
        ...invoices[index],
        ...args.variables,
      };
    }
    
    return {
      id: args.id,
    };
  },

  deleteOne: async (args) => {
    invoices = invoices.filter((i) => i.id !== args.id);
    
    return {
      id: args.id,
    };
  },
}; 