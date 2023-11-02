import Notiflix from 'notiflix';
import { Button, Li, Ul } from './ContactList.styled';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/ContactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contactsList.contacts);
  const filter = useSelector(state => state.filtersList.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();

  return (
    <Ul>
      {filteredContacts.map(contact => (
        <Li key={contact.id}>
          {contact.name} : {contact.number}
          <Button
            onClick={() => {
              Notiflix.Notify.info(
                `${contact.name} has been removed from the contacts`
              );

              dispatch(deleteContact(contact.id));
            }}
          >
            <AiFillDelete size={15} />
          </Button>
        </Li>
      ))}
    </Ul>
  );
};
