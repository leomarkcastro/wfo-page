import { Events_Create, Events_Delete, Events_Get, Events_List, Events_Update } from '@/graphql/declarations/events';
import { apolloClient } from '../apollo/ApolloClient';
import { DataProvider } from '../services/dataProvider';

export const EventsDataProvider: DataProvider = {
    name: 'EventsDataProvider',
    getList: async (args) => {
        try {
            const data = await apolloClient.query({
                query: Events_List,
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

            const retData = data.data.api_event_list;
            const total = retData.page.total ?? 0;
            const totalPages = Math.ceil(total / args.pagination.perPage);

            return {
                data: retData.data?.map((event) => event),
                total: total,
                page: args.pagination.page,
                perPage: args.pagination.perPage,
                totalPages: totalPages,
            };
        } catch (error) {
            console.error('Error fetching events:', error);
            throw error;
        }
    },
    getOne: async (args) => {
        try {
            const data = await apolloClient.query({
                query: Events_Get,
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
                data: data.data.api_event_get.data
            };
        } catch (error) {
            console.error('Error fetching event:', error);
            throw error;
        }
    },
    create: async (args) => {
        try {
            const data = await apolloClient.mutate({
                mutation: Events_Create,
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
                id: data.data.api_event_create.ids[0]
            };
        } catch (error) {
            console.error('Error creating event:', error);
            throw error;
        }
    },
    update: async (args) => {
        try {
            const data = await apolloClient.mutate({
                mutation: Events_Update,
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
                id: data.data.api_event_update.ids[0]
            };
        } catch (error) {
            console.error('Error updating event:', error);
            throw error;
        }
    },
    deleteOne: async (args) => {
        try {
            const data = await apolloClient.mutate({
                mutation: Events_Delete,
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
                id: data.data.api_event_delete.ids[0]
            };
        } catch (error) {
            console.error('Error deleting event:', error);
            throw error;
        }
    }
}; 