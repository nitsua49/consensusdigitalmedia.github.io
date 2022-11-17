import { useState } from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';
//import { ChakraProvider } from '@chakra-ui/react'




function App() {
  const [accounts, setAccounts] = useState([]);

  return (
   // <ChakraProvider>
    (<div className="App">
      <NavBar accounts={accounts} setAccounts={setAccounts} />
      <MainMint accounts={accounts} setAccounts={setAccounts} />
    </div>)
  //  </ChakraProvider>
  );
}

export default App;