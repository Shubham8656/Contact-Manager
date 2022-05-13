import { useState } from 'react';
import './App.css';
import AddContact from './component/AddContact/AddContact';
import ContactList from './component/ContactList/ContactList';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import EditContact from './component/EditContact/EditContact';

const data = [
  {
    "id": new Date(),
    "name": "shubham",
    "email": "shubham@gmail.com"
  }
]
function App() {
  const [contacts, setContacts] = useState(data);

  let addContact = (contact) => {
    setContacts([...contacts, contact])
  }
  let deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<ContactList/>} exact />
        <Route path='/newcontact' element={<AddContact/>} />
        <Route path='/:id' element={<EditContact/>} />
      </Routes>
    </>
  );
}

export default App;
