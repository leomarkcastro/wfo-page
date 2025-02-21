import { Education_Get, Education_List } from '@/graphql/declarations/education';
import { apolloClient } from '../apollo/ApolloClient';
import { DataProvider } from '../services/dataProvider';

export const WpPortalUserDataProvider: DataProvider = {
    name: 'WpPortalUserDataProvider',
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
        throw new Error('Method not implemented.');
    },

    update: async (args) => {
        throw new Error('Method not implemented.');
    },

    deleteOne: async (args) => {
        throw new Error('Method not implemented.');
    },
};
