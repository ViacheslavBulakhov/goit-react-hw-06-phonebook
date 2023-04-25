import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ContactForm } from './ContactForm/contactForm';
import { ContactList } from './Contacts/contacts';
import { Filter } from './Filter/filter';

export function App() {
  const [contacts, setContacts] = useState(() =>
    localStorage.getItem('contacts')
      ? [...JSON.parse(localStorage.getItem('contacts'))]
      : []
  );
  const [filter, setFilter] = useState('');

  const isFirstUpdate = useRef(false);

  useEffect(() => {
    if (!isFirstUpdate.current) {
      isFirstUpdate.current = true;
      return;
    }

    window.localStorage.setItem('contacts', JSON.stringify([...contacts]));
  }, [contacts]);

  const addContact = contact => {
    !checkOfValidContact(contact)
      ? setContacts(prevState => [{ ...contact, id: uuidv4() }, ...prevState])
      : alert(`${contact.name} is olready in contacts.`);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const checkOfValidContact = value =>
    contacts.find(
      contact => contact.name.toLowerCase() === value.name.toLowerCase()
    );

  const getFilteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>

      {contacts.length > 0 ? (
        <>
          <Filter changeFilter={setFilter} />
          <ContactList
            contacts={getFilteredContacts}
            deleteContact={deleteContact}
          />
        </>
      ) : (
        <p>You have no contacts on phonebook yet</p>
      )}
    </div>
  );
}
