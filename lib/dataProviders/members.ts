import { Members_List } from '@/graphql/declarations/members';
import { apolloClient } from '../apollo/ApolloClient';
import { DataProvider } from '../services/dataProvider';
import { OrderDirection } from '@/graphql/generated/graphql';

export const MembersDataProvider: DataProvider = {
    create: async (args) => {
        return {
            data: allData.find((data) => data.id === parseInt(args.variables)),
        };
    },
    deleteOne: async (args) => {
        return { data: allData.find((data) => data.id === parseInt(args.id)) };
    },
    update: async (args) => {
        return { data: allData.find((data) => data.id === parseInt(args.id)) };
    },
    getOne: async (args) => {
        return { data: allData.find((data) => data.id === parseInt(args.id)) };
    },
    getList: async (args) => {

        let skipCount = 0;
        if (args.pagination.page > 1) {
            skipCount = args.pagination.page * args.pagination.perPage;
        }

        const data = await apolloClient.query({
            query: Members_List,
            variables: {
                skip: skipCount,
                take: args.pagination.perPage,
                orderBy: args.sorters.map((sorter) => ({
                    [sorter.field]: sorter.order === "asc" ? OrderDirection.Asc : OrderDirection.Desc,
                })),
                where: args.filters.reduce((acc, filter) => {
                    return {
                        ...acc,
                        [filter.field]: {
                            [filter.operator]: filter.value,
                            mode: filter.operator === "contains" ? "insensitive" : undefined,
                        },
                    };
                }, {}),
            }
        })

        const total = data.data.usersCount ?? 0;
        const totalPages = Math.ceil(total / args.pagination.perPage);

        return {
            data: data.data.users?.map((user) => user),
            total: total,
            page: args.pagination.page,
            perPage: args.pagination.perPage,
            totalPages: totalPages,
        };
    },
};
