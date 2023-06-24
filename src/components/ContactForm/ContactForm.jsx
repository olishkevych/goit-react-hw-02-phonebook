import { Component } from 'react';
import styles from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { addContact, contacts } = this.props;
    if (contacts.find(contact => contact.name === this.state.name)) {
      alert(`${this.state.name} is already in the contacts.`);
    } else {
      addContact(this.state.name, this.state.number);
      this.setState({
        name: '',
        number: '',
      });
    }
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onInputChange}
            placeholder="Name"
          />

          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onInputChange}
            placeholder="Phone number"
          />

          <button type="submit" className={styles.addBtn}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
