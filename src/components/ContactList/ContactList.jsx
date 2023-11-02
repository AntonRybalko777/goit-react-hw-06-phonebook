import Notiflix from 'notiflix';
import { Button, Li, Ul } from './ContactList.styled';
import { AiFillDelete } from 'react-icons/ai';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <Ul>
      {contacts.map(contact => (
        <Li key={contact.id}>
          {contact.name} : {contact.number}
          <Button
            onClick={() => {
              Notiflix.Notify.info(
                `${contact.name} has been removed from the contacts`
              );
              onDelete(contact.id);
            }}
          >
            <AiFillDelete size={15} />
          </Button>
        </Li>
      ))}
    </Ul>
  );
};
