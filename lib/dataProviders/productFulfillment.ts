import { ProductFulfillment_Aggregate, ProductFulfillment_Create, ProductFulfillment_Delete, ProductFulfillment_Get, ProductFulfillment_GroupBy, ProductFulfillment_List, ProductFulfillment_Update } from '@/graphql/declarations/productFulfillment';
import { apolloClient } from '../apollo/ApolloClient';
import { DataProvider } from '../services/dataProvider';

export const ProductFulfillmentDataProvider: DataProvider = {
    name: 'ProductFulfillmentDataProvider',
    getList: async (args) => {
        const data = await apolloClient.query({
            query: ProductFulfillment_List,
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

        let retData = data.data.api_productFulfillment_list;
        const total = retData.page.total ?? 0;
        const totalPages = Math.ceil(total / args.pagination.perPage);

        return {
            data: retData.data?.map((fulfillment) => fulfillment),
            total: total,
            page: args.pagination.page,
            perPage: args.pagination.perPage,
            totalPages: totalPages,
        };
    },

    getOne: async (args) => {
        const data = await apolloClient.query({
            query: ProductFulfillment_Get,
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
            data: data.data.api_productFulfillment_get.data
        };
    },

    create: async (args) => {
        const data = await apolloClient.mutate({
            mutation: ProductFulfillment_Create,
            variables: {
                input: {
                    data: {
                        data: [args.variables]
                    }
                }
            },
            refetchQueries: ['ProductFulfillment_List', 'ProductFulfillment_Get'],
            fetchPolicy: 'no-cache'
        });

        return {
            id: data.data.api_productFulfillment_create.ids[0]
        };
    },

    update: async (args) => {
        const data = await apolloClient.mutate({
            mutation: ProductFulfillment_Update,
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
            refetchQueries: ['ProductFulfillment_List', 'ProductFulfillment_Get'],
            fetchPolicy: 'no-cache'
        });

        return {
            id: data.data.api_productFulfillment_update.ids[0]
        };
    },

    deleteOne: async (args) => {
        const data = await apolloClient.mutate({
            mutation: ProductFulfillment_Delete,
            variables: {
                input: {
                    data: {
                        data: [args.id]
                    }
                }
            },
            refetchQueries: ['ProductFulfillment_List', 'ProductFulfillment_Get'],
            fetchPolicy: 'no-cache'
        });

        return {
            id: data.data.api_productFulfillment_delete.ids[0]
        };
    },

    aggregate: async (args) => {
        const data = await apolloClient.query({
            query: ProductFulfillment_Aggregate,
            variables: {
                input: {
                    data: {
                        countBy: args.countBy,
                        operation: args.operation,
                        page: {
                            filter: args.filters?.map((filter) => ({
                                field: filter.field,
                                operation: filter.operator,
                                value: filter.value,
                            })),
                        },
                    }
                }
            },
            fetchPolicy: 'no-cache'
        });
        return data.data.api_productFulfillment_aggregate;
    },
    groupBy: async (args) => {
        const data = await apolloClient.query({
            query: ProductFulfillment_GroupBy,
            variables: {
                input: {
                    data: {
                        countBy: args.countBy,
                        operation: args.operation,
                        groupBy: args.groupBy,
                        page: {
                            filter: args.filters?.map((filter) => ({
                                field: filter.field,
                                operation: filter.operator,
                                value: filter.value,
                            })),
                        },
                    }
                }
            },
            fetchPolicy: 'no-cache'
        });
        return data.data.api_productFulfillment_groupBy;
    }
};
