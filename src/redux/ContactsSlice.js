import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'contacts',
  storage,
};

const ContactsSlice = createSlice({
  name: 'contactsList',
  initialState: { contacts: [] },
  reducers: {
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    addContact: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
  },
});

export const persistedContactsReducer = persistReducer(
  persistConfig,
  ContactsSlice.reducer
);

export const { deleteContact, addContact } = ContactsSlice.actions;

// Selectors

export const getContacts = state => state.contactsList.contacts;
