import { useDispatch, useSelector } from 'react-redux';

import { removeContact } from 'redux/contactSlice';

import { ContactElement } from './contacts.styled';

export function ContactList() {
  const dispath = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

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
