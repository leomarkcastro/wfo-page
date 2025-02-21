import { ServicePurchase_Aggregate, ServicePurchase_Create, ServicePurchase_Delete, ServicePurchase_Get, ServicePurchase_GroupBy, ServicePurchase_List, ServicePurchase_Update } from '@/graphql/declarations/servicePurchase';
import { apolloClient } from '../apollo/ApolloClient';
import { DataProvider } from '../services/dataProvider';

export const ServicePurchaseDataProvider: DataProvider = {
    name: 'ServicePurchaseDataProvider',
    getList: async (args) => {
        const data = await apolloClient.query({
            query: ServicePurchase_List,
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

        let retData = data.data.api_servicePurchase_list;
        const total = retData.page.total ?? 0;
        const totalPages = Math.ceil(total / args.pagination.perPage);

        return {
            data: retData.data?.map((purchase) => purchase),
            total: total,
            page: args.pagination.page,
            perPage: args.pagination.perPage,
            totalPages: totalPages,
        };
    },

    getOne: async (args) => {
        const data = await apolloClient.query({
            query: ServicePurchase_Get,
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
            data: data.data.api_servicePurchase_get.data
        };
    },

    create: async (args) => {
        const data = await apolloClient.mutate({
            mutation: ServicePurchase_Create,
            variables: {
                input: {
                    data: {
                        data: [args.variables]
                    }
                }
            },
            refetchQueries: ['ServicePurchase_List', 'ServicePurchase_Get'],
            fetchPolicy: 'no-cache'
        });

        return {
            id: data.data.api_servicePurchase_create.ids[0]
        };
    },

    update: async (args) => {
        const data = await apolloClient.mutate({
            mutation: ServicePurchase_Update,
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
            refetchQueries: ['ServicePurchase_List', 'ServicePurchase_Get'],
            fetchPolicy: 'no-cache'
        });

        return {
            id: data.data.api_servicePurchase_update.ids[0]
        };
    },

    deleteOne: async (args) => {
        const data = await apolloClient.mutate({
            mutation: ServicePurchase_Delete,
            variables: {
                input: {
                    data: {
                        data: [args.id]
                    }
                }
            },
            refetchQueries: ['ServicePurchase_List', 'ServicePurchase_Get'],
            fetchPolicy: 'no-cache'
        });

        return {
            id: data.data.api_servicePurchase_delete.ids[0]
        };
    },

    aggregate: async (args) => {
        const data = await apolloClient.query({
            query: ServicePurchase_Aggregate,
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
        return data.data.api_servicePurchase_aggregate;
    },
    groupBy: async (args) => {
        const data = await apolloClient.query({
            query: ServicePurchase_GroupBy,
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
        return data.data.api_servicePurchase_groupBy;
    }
};
