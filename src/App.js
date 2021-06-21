import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Route from './routes';
import { ContextProvider } from './hooks/authContext';
import GlobalStyle from './styles/global';

import Header from './components/header'
import Footer from './components/footer'

function App() {

  return (
    <ContextProvider >    
      <GlobalStyle/>
      <ToastContainer autoClose={2000}/>
      <Header/>
      <Route/>
      <Footer/>
    </ContextProvider>
  );
}

export default App;
