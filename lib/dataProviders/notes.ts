import { Notes_Create, Notes_Delete, Notes_Get, Notes_List, Notes_Update } from '@/graphql/declarations/notes';
import { apolloClient } from '../apollo/ApolloClient';
import { DataProvider } from '../services/dataProvider';

export const NotesDataProvider: DataProvider = {
    name: 'NotesDataProvider',
    getList: async (args) => {
        const data = await apolloClient.query({
            query: Notes_List,
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

        let retData = data.data.api_note_list;
        const total = retData.page.total ?? 0;
        const totalPages = Math.ceil(total / args.pagination.perPage);

        return {
            data: retData.data?.map((note) => note),
            total: total,
            page: args.pagination.page,
            perPage: args.pagination.perPage,
            totalPages: totalPages,
        };
    },

    getOne: async (args) => {
        const data = await apolloClient.query({
            query: Notes_Get,
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
            data: data.data.api_note_get.data
        };
    },

    create: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Notes_Create,
            variables: {
                input: {
                    data: {
                        data: [args.variables]
                    }
                }
            },
            fetchPolicy: 'no-cache'
        });

        console.log('refetching queries');
        await apolloClient.refetchQueries({
            include: ['Notes_List', 'Notes_Get']
        })

        return {
            id: data.data.api_note_create.ids[0]
        };
    },

    update: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Notes_Update,
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
            fetchPolicy: 'no-cache'
        });

        await apolloClient.refetchQueries({
            include: ['Notes_List', 'Notes_Get']
        })

        return {
            id: data.data.api_note_update.ids[0]
        };
    },

    deleteOne: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Notes_Delete,
            variables: {
                input: {
                    data: {
                        data: [args.id]
                    }
                }
            },
            fetchPolicy: 'no-cache'
        });


        await apolloClient.refetchQueries({
            include: ['Notes_List', 'Notes_Get']
        })


        return {
            id: data.data.api_note_delete.ids[0]
        };
    }
};
