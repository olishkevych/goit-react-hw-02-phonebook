import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import styles from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const isExisting = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExisting) {
      alert(`${isExisting.name} is already in contacts`);
      return;
    } else {
      const contactToAdd = {
        name: name,
        number: Number(number),
        id: nanoid(),
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, contactToAdd],
      }));
    }
  };

  onFilterInput = event => {
    this.setState({ filter: event.target.value });
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className={styles.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter onFilterInput={this.onFilterInput} />
        <ContactList
          contacts={filteredContacts}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}
