import { Society_Create, Society_Delete, Society_Get, Society_List, Society_Update } from '@/graphql/declarations/societies';
import { apolloClient } from '../apollo/ApolloClient';
import { DataProvider } from '../services/dataProvider';

export const SocietiesDataProvider: DataProvider = {
    name: 'SocietiesDataProvider',
    getList: async (args) => {
        try {
            const data = await apolloClient.query({
                query: Society_List,
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

            const retData = data.data.api_society_list;
            const total = retData.page.total ?? 0;
            const totalPages = Math.ceil(total / args.pagination.perPage);

            return {
                data: retData.data?.map((society) => society),
                total: total,
                page: args.pagination.page,
                perPage: args.pagination.perPage,
                totalPages: totalPages,
            };
        } catch (error) {
            console.error('Error fetching societies:', error);
            throw error;
        }
    },
    getOne: async (args) => {
        try {
            const data = await apolloClient.query({
                query: Society_Get,
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
                data: data.data.api_society_get.data
            };
        } catch (error) {
            console.error('Error fetching society:', error);
            throw error;
        }
    },
    create: async (args) => {
        try {
            const data = await apolloClient.mutate({
                mutation: Society_Create,
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
                id: data.data.api_society_create.ids[0]
            };
        } catch (error) {
            console.error('Error creating society:', error);
            throw error;
        }
    },
    update: async (args) => {
        try {
            const data = await apolloClient.mutate({
                mutation: Society_Update,
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
                id: data.data.api_society_update.ids[0]
            };
        } catch (error) {
            console.error('Error updating society:', error);
            throw error;
        }
    },
    deleteOne: async (args) => {
        try {
            const data = await apolloClient.mutate({
                mutation: Society_Delete,
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
                id: data.data.api_society_delete.ids[0]
            };
        } catch (error) {
            console.error('Error deleting society:', error);
            throw error;
        }
    }
}; 