import { useDispatch, useSelector } from 'react-redux';

import { removeContact } from 'redux/contactSlice';

import { ContactElement } from './contacts.styled';
import { selectContacts, selectFilter } from 'redux/selectors';

export function ContactList() {
  const dispath = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFilteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul>
        {getFilteredContacts.map(contact => (
          <ContactElement key={contact.id}>
            <span>{contact.name}: </span>
            <span>{contact.number} </span>
            <button
              type="button"
              onClick={() => dispath(removeContact(contact.id))}
            >
              Delete
            </button>
          </ContactElement>
        ))}
      </ul>
    </>
  );
}
