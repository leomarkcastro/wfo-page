import { Education_Aggregate, Education_Create, Education_Delete, Education_Get, Education_List, Education_Update } from '@/graphql/declarations/education';
import { apolloClient } from '../apollo/ApolloClient';
import { DataProvider } from '../services/dataProvider';


export const EducationDataProvider: DataProvider = {
    name: 'EducationDataProvider',
    getList: async (args) => {
        const data = await apolloClient.query({
            query: Education_List,
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

        let retData = data.data.api_education_list;
        const total = retData.page.total ?? 0;
        const totalPages = Math.ceil(total / args.pagination.perPage);

        return {
            data: retData.data?.map((education) => education),
            total: total,
            page: args.pagination.page,
            perPage: args.pagination.perPage,
            totalPages: totalPages,
        };
    },

    getOne: async (args) => {
        const data = await apolloClient.query({
            query: Education_Get,
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
            data: data.data.api_education_get.data
        };
    },

    create: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Education_Create,
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
            id: data.data.api_education_create.ids[0]
        };
    },

    update: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Education_Update,
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
            id: data.data.api_education_update.ids[0]
        };
    },

    deleteOne: async (args) => {
        const data = await apolloClient.mutate({
            mutation: Education_Delete,
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
            id: data.data.api_education_delete.ids[0]
        };
    },
    aggregate: async (args) => {
        const data = await apolloClient.query({
            query: Education_Aggregate,
            variables: {
                input: {
                    data: {
                        countBy: args.countBy,
                        groupBy: args.groupBy,
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
        })
        return data.data.api_education_aggregate;
    },

};
