import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery(
        {baseUrl: 'https://jsonplaceholder.typicode.com/'}
    ),
    endpoints: (builder) => ({
        getAllTodos: builder.query ({
            query: () => 'todos',
        })
    })
});

export const {useGetAllTodosQuery, useLazyGetAllTodosQuery} = todosApi;