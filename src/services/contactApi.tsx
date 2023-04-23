import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Contact} from '../models/contac.model';


export const contactApi = createApi({
    reducerPath : "contactApi",
    baseQuery : fetchBaseQuery({baseUrl : " http://localhost:5000/"}),
    tagTypes: ["Contacts"],
    endpoints : (builder) => ({
        contacts : builder.query<Contact[], void>({
            query : () => "/contacts",
            providesTags: ["Contacts"]
        }),
         contact : builder.query<Contact, string>({
            query : (id) => `/contacts/${id}`,
            providesTags: ["Contacts"]
        }),
        addContact : builder.mutation<{}, Contact>({
            query : (contact) => ({
                url : "/contacts",
                method : "POST",
                body : contact,
            }),
            invalidatesTags: ["Contacts"],
        }),
        deleteContact : builder.mutation<void, string>({
            query : (id) => ({
                url : `/contacts/${id}`,
                method : "DELETE"
            }),
            invalidatesTags: ["Contacts"]
        })
    }),
});

export const {useContactsQuery, useAddContactMutation, useDeleteContactMutation} = contactApi;
