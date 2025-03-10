import { Invoice_Create, Invoice_Delete, Invoice_Get, Invoice_List, Invoice_Update } from '@/graphql/declarations/invoice';
import { apolloClient } from '../apollo/ApolloClient';
import { DataProvider } from '../services/dataProvider';

export const InvoiceDataProvider: DataProvider = {
    name: 'InvoiceDataProvider',
    getList: async (args) => {
        try {
            const data = await apolloClient.query({
                query: Invoice_List,
                variables: {
                    input: {
                        data: {
                            page: {
                                page: args.pagination.page,
                                pageSize: args.pagination.perPage,
                                search: args.search,
                                sort: args.sorters?.[0]?.field ? {
                                    field: args.sorters?.[0]?.field,
                                    order: args.sorters?.[0]?.order,
                                } : undefined,
                                filter: args.filters?.map((filter) => ({
                                    field: filter.field,
                                    operation: filter.operator,
                                    value: filter.value,
                                })),
                            }
                        }
                    },
                },
                fetchPolicy: 'no-cache'
            });

            const retData = data.data.api_invoice_list;
            const total = retData.page.total ?? 0;
            const totalPages = Math.ceil(total / args.pagination.perPage);

            return {
                data: retData.data?.map((invoice) => invoice),
                total: total,
                page: args.pagination.page,
                perPage: args.pagination.perPage,
                totalPages: totalPages,
            };
        } catch (error) {
            console.error('Error fetching invoices:', error);
            throw error;
        }
    },

    getOne: async (args) => {
        try {
            const data = await apolloClient.query({
                query: Invoice_Get,
                variables: {
                    input: {
                        data: {
                            id: args.id
                        }
                    },
                },
                fetchPolicy: 'no-cache'
            });

            return {
                data: data.data.api_invoice_get.data
            };
        } catch (error) {
            console.error('Error fetching invoice:', error);
            throw error;
        }
    },

    create: async (args) => {
        try {
            const data = await apolloClient.mutate({
                mutation: Invoice_Create,
                variables: {
                    input: {
                        data: {
                            data: [
                                args.variables
                            ]
                        }
                    }
                },
                fetchPolicy: 'no-cache'
            });

            return {
                id: data.data.api_invoice_create.ids[0]
            };
        } catch (error) {
            console.error('Error creating invoice:', error);
            throw error;
        }
    },

    update: async (args) => {
        try {
            const data = await apolloClient.mutate({
                mutation: Invoice_Update,
                variables: {
                    input: {
                        data: {
                            data: [
                                {
                                    id: args.id,
                                    data: args.variables
                                }
                            ]
                        }
                    }
                },
                fetchPolicy: 'no-cache'
            });

            return {
                id: data.data.api_invoice_update.ids[0]
            };
        } catch (error) {
            console.error('Error updating invoice:', error);
            throw error;
        }
    },

    deleteOne: async (args) => {
        try {
            const data = await apolloClient.mutate({
                mutation: Invoice_Delete,
                variables: {
                    input: {
                        data: {
                            data: [args.id]
                        }
                    }
                },
                fetchPolicy: 'no-cache'
            });

            return {
                id: data.data.api_invoice_delete.ids[0]
            };
        } catch (error) {
            console.error('Error deleting invoice:', error);
            throw error;
        }
    }
}; 