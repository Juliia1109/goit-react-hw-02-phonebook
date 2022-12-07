import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { nanoid } from 'nanoid'


export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  };

  addContacts = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
    return true;
  };


  // addContacts=data=>{
  //   const { name, number } = data;
  //   const { contacts } = this.state;
  //   const newContacts = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };

  //   contacts.some(newContacts => newContacts.name === name)
  //   ? alert(`${name} is already in contacts`)
  //   : this.setState(({ contacts }) => ({
  //       contacts: [newContacts, ...contacts],
  //     }));
  
  // }
  // filteredData =()=>{
  //   const { contacts, filter } = this.state;
  //   const normalFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalFilter)
  //   );

  // }
  onDeleteContacts =id=>{
    this.setState((prevState)=> ({
      contacts: prevState.contacts.filter(
        (contact)=> contact.id !== id
      )
    }))

  };


  componentFilter =event=> {
    this.setState({ filter: event.target.value })
  };
  render() {
    // const allContacts = this.filteredData();
    const allContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    return (
  
      <div>
      <h1>Phonebook</h1>
      <ContactForm 
      onSubmit={this.addContacts}/>

      
      <h2>Contacts</h2>
      <Filter value={this.state.filter} onChange={this.componentFilter} />
      <ContactList 
      deleteContacts={ this.onDeleteContacts } 
      contacts={ allContacts }/>
      </div>
  
    );
  }

};
