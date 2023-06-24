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

  addContact = (name, number) => {
    const contactToAdd = {
      name: name,
      number: Number(number),
      key: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contactToAdd],
    }));
  };

  onFilterInput = event => {
    this.setState({ filter: event.target.value });
  };

  removeContact = key => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.key !== key
    );
    this.setState({
      contacts: updatedContacts,
    });
  };

  render() {
    const filteredContacts = this.state.contacts.filter(
      contact =>
        contact.name &&
        contact.name.toLowerCase().startsWith(this.state.filter.toLowerCase())
    );
    return (
      <div className={styles.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          addContact={this.addContact}
        />
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
