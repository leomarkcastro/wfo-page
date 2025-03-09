import { Application_Create, Application_Delete, Application_Get, Application_List, Application_Update } from '@/graphql/declarations/membershipApplications';
import { apolloClient } from '../apollo/ApolloClient';
import { DataProvider } from '../services/dataProvider';

export const MembershipApplicationsDataProvider: DataProvider = {
    name: 'MembershipApplicationsDataProvider',
    getList: async (args) => {
        try {
            const data = await apolloClient.query({
                query: Application_List,
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

            const retData = data.data.api_application_list;
            const total = retData.page.total ?? 0;
            const totalPages = Math.ceil(total / args.pagination.perPage);

            return {
                data: retData.data?.map((application) => application),
                total: total,
                page: args.pagination.page,
                perPage: args.pagination.perPage,
                totalPages: totalPages,
            };
        } catch (error) {
            console.error('Error fetching membership applications:', error);
            throw error;
        }
    },
    getOne: async (args) => {
        try {
            const data = await apolloClient.query({
                query: Application_Get,
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
                data: data.data.api_application_get.data
            };
        } catch (error) {
            console.error('Error fetching membership application:', error);
            throw error;
        }
    },
    create: async (args) => {
        try {
            const data = await apolloClient.mutate({
                mutation: Application_Create,
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
                id: data.data.api_application_create.ids[0]
            };
        } catch (error) {
            console.error('Error creating membership application:', error);
            throw error;
        }
    },
    update: async (args) => {
        try {
            const data = await apolloClient.mutate({
                mutation: Application_Update,
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
                id: data.data.api_application_update.ids[0]
            };
        } catch (error) {
            console.error('Error updating membership application:', error);
            throw error;
        }
    },
    deleteOne: async (args) => {
        try {
            const data = await apolloClient.mutate({
                mutation: Application_Delete,
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
                id: data.data.api_application_delete.ids[0]
            };
        } catch (error) {
            console.error('Error deleting membership application:', error);
            throw error;
        }
    }
}; 