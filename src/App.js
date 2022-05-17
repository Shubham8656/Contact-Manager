import './App.css';
import AddContact from './component/AddContact/AddContact';
import ContactList from './component/ContactList/ContactList';
import Header from './component/Header/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import EditContact from './component/EditContact/EditContact';
import auth from './firebase';
import SignIn from './component/SignIn/SignIn';
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState({})
  const navigate = useNavigate()
  useEffect(() => {
    const authchange = onAuthStateChanged(auth, (currentuser) => {
      console.log('currentuser', currentuser);
      setUser(currentuser)
      if (currentuser)
        navigate('/')
      else
        navigate('/SignIn')
    })
    authchange();
  }, [])

  
  return (
    <>
      <Header user={user}/>
      <>
        <Routes>
          <Route path='/' element={<ContactList />} exact />
          <Route path='/newcontact' element={<AddContact />} />
          <Route path='/:id' element={<EditContact />} />
          <Route path='/SignIn' element={<SignIn />} />
        </Routes>
      </>
    </>
  );
}

export default App;
