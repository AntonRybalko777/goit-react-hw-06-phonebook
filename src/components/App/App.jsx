import { useState, useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container, Span } from './App.styled';

function checkSavedContacts() {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts == null) {
    return [];
  }
  return JSON.parse(savedContacts);
}

export const App = () => {
  const [contacts, setContacts] = useState(checkSavedContacts);
  const [filter, setFilter] = useState('');

  const checkDuplicate = enteredName => {
    return contacts.find(contact => {
      return contact.name === enteredName;
    });
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm checkDuplicate={checkDuplicate} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? <Filter /> : <Span>Contact list is empty</Span>}

      <ContactList />
    </Container>
  );
};
