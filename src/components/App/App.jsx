import { useState, useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { nanoid } from 'nanoid';
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

  const addContact = newContact => {
    setContacts(prevState => [
      ...prevState,
      {
        ...newContact,
        name: newContact.name.trim(),
        number: newContact.number.trim(),
        id: nanoid(),
      },
    ]);
  };

  const deleteContact = contactId => {
    const newContactList = contacts.filter(contact => {
      return contact.id !== contactId;
    });
    setContacts(newContactList);
  };

  const checkDuplicate = enteredName => {
    return contacts.find(contact => {
      return contact.name === enteredName;
    });
  };

  const changeFilter = value => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} checkDuplicate={checkDuplicate} />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter onChange={changeFilter} />
      ) : (
        <Span>Contact list is empty</Span>
      )}

      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </Container>
  );
};
