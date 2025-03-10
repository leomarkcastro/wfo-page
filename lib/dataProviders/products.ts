import { Products_Create, Products_Delete, Products_Get, Products_List, Products_Update } from '@/graphql/declarations/products';
import { apolloClient } from '../apollo/ApolloClient';
import { DataProvider } from '../services/dataProvider';
import { DocumentNode } from 'graphql';

export const ProductsDataProvider: DataProvider = {
  name: 'ProductsDataProvider',
  getList: async (args) => {
    const data = await apolloClient.query({
      query: Products_List as DocumentNode,
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

    const retData = data.data.api_products_list;
    const total = retData.page.total ?? 0;
    const totalPages = Math.ceil(total / args.pagination.perPage);

    return {
      data: retData.data?.map((product) => product),
      total: total,
      page: args.pagination.page,
      perPage: args.pagination.perPage,
      totalPages: totalPages,
    };
  },

  getOne: async (args) => {
    const data = await apolloClient.query({
      query: Products_Get as DocumentNode,
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
      data: data.data.api_products_get.data
    };
  },

  create: async (args) => {
    const data = await apolloClient.mutate({
      mutation: Products_Create as DocumentNode,
      variables: {
        input: {
          data: {
            data: [args.variables]
          }
        }
      },
      fetchPolicy: 'no-cache'
    });

    await apolloClient.refetchQueries({
      include: ['Products_List', 'Products_Get']
    });

    return {
      id: data.data.api_products_create.ids[0]
    };
  },

  update: async (args) => {
    const data = await apolloClient.mutate({
      mutation: Products_Update as DocumentNode,
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
      include: ['Products_List', 'Products_Get']
    });

    return {
      id: data.data.api_products_update.ids[0]
    };
  },

  deleteOne: async (args) => {
    const data = await apolloClient.mutate({
      mutation: Products_Delete as DocumentNode,
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
      include: ['Products_List', 'Products_Get']
    });

    return {
      id: data.data.api_products_delete.ids[0]
    };
  }
}; 