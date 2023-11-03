import { useSelector } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Container, Span } from './App.styled';
import { getContacts } from 'redux/ContactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? <Filter /> : <Span>Contact list is empty</Span>}
      <ContactList />
    </Container>
  );
};
