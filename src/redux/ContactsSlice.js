import { createSlice } from '@reduxjs/toolkit';

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

export const contactsListReducer = ContactsSlice.reducer;
export const { deleteContact, addContact } = ContactsSlice.actions;
