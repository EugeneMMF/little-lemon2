import './App.css';
import NavBar from './NavBar';
import Main from './Main';
import Footer from './Footer';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <Main />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
