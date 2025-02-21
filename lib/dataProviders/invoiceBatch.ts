import { InvoiceBatch_Create, InvoiceBatch_Delete, InvoiceBatch_Get, InvoiceBatch_List, InvoiceBatch_Update } from '@/graphql/declarations/invoiceBatch';
import { apolloClient } from '../apollo/ApolloClient';
import { DataProvider } from '../services/dataProvider';

export const InvoiceBatchDataProvider: DataProvider = {
    name: 'InvoiceBatchDataProvider',
    getList: async (args) => {
        const data = await apolloClient.query({
            query: InvoiceBatch_List,
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

        let retData = data.data.api_invoiceBatch_list;
        const total = retData.page.total ?? 0;
        const totalPages = Math.ceil(total / args.pagination.perPage);

        return {
            data: retData.data?.map((batch) => batch),
            total: total,
            page: args.pagination.page,
            perPage: args.pagination.perPage,
            totalPages: totalPages,
        };
    },

    getOne: async (args) => {
        const data = await apolloClient.query({
            query: InvoiceBatch_Get,
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
            data: data.data.api_invoiceBatch_get.data
        };
    },

    create: async (args) => {
        const data = await apolloClient.mutate({
            mutation: InvoiceBatch_Create,
            variables: {
                input: {
                    data: {
                        data: [args.variables]
                    }
                }
            },
            fetchPolicy: 'no-cache',
            refetchQueries: ['InvoiceBatch_List', 'InvoiceBatch_Get']
        });

        return {
            id: data.data.api_invoiceBatch_create.ids[0]
        };
    },

    update: async (args) => {
        const data = await apolloClient.mutate({
            mutation: InvoiceBatch_Update,
            variables: {
                input: {
                    data: {
                        data: [{
                            id: args.id,
                            data: args.variables
                        }]
                    }
                }
            },
            fetchPolicy: 'no-cache',
            refetchQueries: ['InvoiceBatch_List', 'InvoiceBatch_Get']
        });

        return {
            id: data.data.api_invoiceBatch_update.ids[0]
        };
    },

    deleteOne: async (args) => {
        const data = await apolloClient.mutate({
            mutation: InvoiceBatch_Delete,
            variables: {
                input: {
                    data: {
                        data: [args.id]
                    }
                }
            },
            fetchPolicy: 'no-cache',
            refetchQueries: ['InvoiceBatch_List', 'InvoiceBatch_Get']
        });

        return {
            id: data.data.api_invoiceBatch_delete.ids[0]
        };
    }
};
