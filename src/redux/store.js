import { configureStore } from '@reduxjs/toolkit';
import { contactsListReducer } from './ContactsSlice';
import { filtersListReducer } from './FiltersSlice';

export const store = configureStore({
  reducer: {
    contactsList: contactsListReducer,
    filtersList: filtersListReducer,
  },
});
