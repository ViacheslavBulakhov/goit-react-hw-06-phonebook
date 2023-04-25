import { useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/contactForm';
import { ContactList } from './Contacts/ContactList';
import { Filter } from './Filter/filter';

export function App() {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <div>
      <h1>PhoneBook</h1>
      <ContactForm />

      <h2>Contacts</h2>

      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>You have no contacts on phonebook yet</p>
      )}
    </div>
  );
}
